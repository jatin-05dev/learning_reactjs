import React, { useState } from 'react';

// --- WINNER PORTAL COMPONENT ---
// Jab Step 2 se Flag mil jaye, tab ye screen dikhegi
const WinnerPortal = ({ flag, onBack }) => {
  const [ans, setAns] = useState('');
  const [solved, setSolved] = useState(false);

  const checkLogic = () => {
    if (ans === "32") setSolved(true);
    else alert("Wrong Logic Answer!");
  };

  return (
    <div style={styles.card}>
      <h2 style={{color: '#f39c12'}}>🏆 MISSION ACCOMPLISHED</h2>
      <p style={{color: '#00ff9d', fontSize: '14px', marginBottom: '15px'}}>Vault Secret: {flag}</p>
      <hr style={{borderColor: '#333'}} />
      <p style={{fontSize: '14px', margin: '10px 0'}}>Sequence: 2, 4, 8, 16, ?</p>
      <input 
        type="number" 
        value={ans} 
        onChange={(e) => setAns(e.target.value)}
        style={styles.input}
        placeholder="Answer"
      />
      <button onClick={checkLogic} style={styles.blueButton}>Verify Identity</button>
      
      {solved && (
        <div style={{marginTop: '20px', padding: '10px', border: '1px solid #28a745', color: '#28a745'}}>
           👑 YOU ARE A TRUE PENTESTER!
        </div>
      )}
      <button onClick={onBack} style={styles.backBtn}>Back</button>
    </div>
  );
};

// --- MAIN APP ---
function App() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('Vault is Locked 🔒');
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState('');
  const [showWinner, setShowWinner] = useState(false);

  const API_URL = "/api";

  const login = async () => {
    setMessage("Attempting Login...");
    try {
      const response = await fetch(`${API_URL}/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (data.access) {
        setToken(data.access);
        setMessage("Logged In! Token Received.");
      } else {
        setMessage("Login Failed!");
      }
    } catch (err) { setMessage("Connection Error!"); }
  };

  const openVault = async () => {
    setLoading(true);
    setMessage("Unlocking...");
    try {
      const response = await fetch(`${API_URL}/vault/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          // 🛠️ FIX: Ye header missing tha jo middleware check kar raha hai
          'X-SECRET-HASH': '53' 
        }
      });
      const data = await response.json();

      if (response.status === 403) {
        setMessage(`Error 403: ${data.error}. Hint: ${data.hint}`);
      } else if (data.flag) {
        setFlag(data.flag);
        setMessage("SUCCESS! Vault Unlocked.");
        setShowWinner(true); // Winner Portal khol do
      } else {
        setMessage(data.detail || "Access Denied.");
      }
    } catch (err) {
      setMessage("Request Timeout! Check Middleware.");
    }
    setLoading(false);
  };

  if (showWinner) return (
    <div style={styles.container}>
      <WinnerPortal flag={flag} onBack={() => setShowWinner(false)} />
    </div>
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>⚡ TECH TREASURE HUNT ⚡</h1>
      <div style={styles.card}>
        <p style={styles.status}><strong>Status:</strong> {message}</p>
        <button onClick={login} style={styles.button}>Step 1: Get Access Token</button>
        <button 
          onClick={openVault} 
          style={{...styles.button, backgroundColor: '#28a745'}}
          disabled={!token || loading}
        >
          {loading ? "Processing..." : "Step 2: Unlock Vault"}
        </button>
      </div>
      <p style={styles.footer}>Find the bugs in Frontend, Settings, Middleware, and Views!</p>
    </div>
  );
}

const styles = {
  container: { height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a0a0a', color: 'white', fontFamily: 'Arial' },
  header: { color: '#f39c12', marginBottom: '20px' },
  card: { padding: '30px', borderRadius: '15px', backgroundColor: '#1a1a1a', border: '1px solid #333', textAlign: 'center', width: '350px' },
  status: { fontSize: '16px', marginBottom: '20px', color: '#00d4ff', minHeight: '50px' },
  button: { padding: '12px 20px', fontSize: '14px', cursor: 'pointer', margin: '10px', border: 'none', borderRadius: '8px', backgroundColor: '#007bff', color: 'white', fontWeight: 'bold', width: '80%' },
  blueButton: { padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%', marginTop: '10px' },
  input: { padding: '10px', width: '90%', marginBottom: '10px', backgroundColor: '#222', border: '1px solid #444', color: 'white', borderRadius: '5px', textAlign: 'center' },
  backBtn: { background: 'none', border: 'none', color: '#666', cursor: 'pointer', marginTop: '15px', textDecoration: 'underline' },
  footer: { marginTop: '20px', fontSize: '11px', color: '#444' }
};

export default App;