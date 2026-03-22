 import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Header() {
  const navigate = useNavigate();

  // Seedha localStorage se data uthao (Bina useEffect ke)
  const savedUser = localStorage.getItem('userdata');
  const user = savedUser ? JSON.parse(savedUser) : null;

  const savedCount = localStorage.getItem('bagCount') || '0';
  const bagCount = parseInt(savedCount);

  const handleLogout = () => {
    localStorage.removeItem('userdata'); 
    localStorage.removeItem('bagCount'); // Logout par cart bhi khali kar di
    navigate('/'); 
    // Page ko reload karna padega taaki changes dikhein bina useEffect ke
    window.location.reload(); 
  };

  return (
    <div className="w-full font-sans">
      <div className="bg-black text-white text-[10px] px-4 py-2 flex justify-between items-center tracking-tight">
        <div className="flex items-center gap-6">
          <div className="cursor-pointer border-r border-gray-700 pr-4 uppercase">More Brands ▾</div>
          <div className="flex flex-col text-[9px] leading-tight">
            <span className="text-gray-400">Delivering to</span>
            <span className="font-bold underline cursor-pointer uppercase">Add delivery location</span>
          </div>
        </div>

        <div className="flex items-center gap-5 uppercase font-medium">
          <span className="cursor-pointer">📍 Stores</span>
          <span className="text-gray-700">|</span>
          <span className="cursor-pointer">ⓘ Contact Us</span>
          <span className="text-gray-700">|</span>
          
          {user ? (
            <div className="flex gap-3 items-center">
              <span>HI, {user.name.toUpperCase()}</span>
              <button onClick={handleLogout} className="font-bold hover:text-red-500">LOGOUT</button>
            </div>
          ) : (
            <Link to="/Sign" className="hover:underline">SIGN IN</Link>
          )}
          
          <span className="text-gray-700">|</span>
          <span className="text-lg cursor-pointer">♡</span>
          
          {user && (
  <div 
    onClick={() => navigate("/bag")}
    className="relative cursor-pointer"
  >
    <span className="text-xl">👜</span>

    {bagCount > 0 && (
      <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
        {bagCount}
      </span>
    )}
  </div>
)}
        </div>
      </div>

      {/* Main White Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">👑</span>
          <span className="text-xl font-bold tracking-[0.2em]">LOUIS PHILIPPE</span>
        </div>

        <nav className="flex gap-6 text-[12px] font-bold uppercase text-gray-800">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/new-in" className="hover:text-black">New In</Link>
          <Link to="/collections" className="hover:text-black">Collections</Link>
          <Link to="/premium" className="hover:text-black">Premium</Link>
          <Link to="/Myorder" className="hover:text-black">Myorder</Link>

        </nav>

        <div className="flex items-center gap-4">
          <div className="border-b border-black flex items-center pb-1 w-48">
            <span className="text-gray-400 mr-2">🔍</span>
            <input type="text" placeholder="Search Cargos" className="outline-none text-xs w-full bg-transparent" />
          </div>

          <div className="text-[8px] font-bold text-center leading-none text-red-800 border-l pl-4">
            <div className="bg-orange-500 h-4 w-6 mb-1 mx-auto"></div>
            ADITYA BIRLA<br />FASHION
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;