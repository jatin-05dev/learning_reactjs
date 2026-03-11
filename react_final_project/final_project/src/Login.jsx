 import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    const [loginval, set] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    function login(e) {
        let { name, value } = e.target
        set({ ...loginval, [name]: value })
    }

    function logins(e) {
        e.preventDefault()
        let localdata = JSON.parse(localStorage.getItem("userdata"))
        
        // Safety check if localdata exists
        if (!localdata) {
            alert("No user found. Please Sign Up first.")
            navigate("/signup")
            return
        }

        if (loginval.email !== localdata.email || loginval.password !== localdata.password) {
            alert("Invalid Credentials")
        } else {
            alert("Login Successful")
            navigate("/HeroCarousel")
        }
    }

    return (
        <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white p-10 shadow-sm border border-gray-100 transition-all">
                
                {/* Brand Logo Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl tracking-[0.4em] font-serif text-black uppercase">
                        Louis Philippe
                    </h1>
                    <p className="text-[10px] tracking-[0.25em] text-gray-400 mt-3 uppercase">
                        In Pursuit of Excellence
                    </p>
                </div>

                <h2 className="text-center text-sm tracking-widest text-gray-800 uppercase mb-10 font-semibold">
                    Member Login
                </h2>

                <form onSubmit={logins} className="space-y-8">
                    {/* Email Input */}
                    <div className="relative">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="EMAIL ADDRESS"
                            value={loginval.email} 
                            onChange={login} 
                            className="w-full border-b border-gray-300 py-3 text-sm tracking-wide focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-300 font-light"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="PASSWORD"
                            value={loginval.password} 
                            onChange={login} 
                            className="w-full border-b border-gray-300 py-3 text-sm tracking-wide focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-300 font-light"
                            required
                        />
                    </div>

                    <div className="text-right">
                        <button type="button" className="text-[10px] tracking-widest text-gray-400 uppercase hover:text-black transition-colors">
                            Forgot Password?
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-black text-white py-4 mt-4 text-xs tracking-[0.3em] font-bold hover:bg-[#222] transition-all active:scale-[0.98]"
                    >
                        SIGN IN
                    </button>
                </form>

                <div className="mt-10 text-center text-[11px] tracking-widest text-gray-500 uppercase">
                    New to Louis Philippe? 
                    <button 
                        onClick={() => navigate("/signup")} 
                        className="ml-2 text-black font-bold border-b border-black pb-0.5"
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login