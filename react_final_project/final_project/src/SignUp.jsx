 import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function Sign() {
    const [sign, set] = useState({
        name: "",
        email: "",
        age: "",
        password: ""
    })

    toast()
    const navigate = useNavigate()

    function inputdata(e) {
        const { name, value } = e.target
        set({ ...sign, [name]: value })
    }

function handle(e) {
    e.preventDefault()

    // Name validation
    if(sign.name.trim().length < 3){
        toast("Name must be at least 3 characters")
        return
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailPattern.test(sign.email)){
        toast("Enter valid email")
        return
    }

    // Age validation
    if(sign.age < 18){
        toast("Age must be 18+")
        return
    }

    // Password validation
    if(sign.password.length < 6){
        toast("Password must be at least 6 characters")
        return
    }

    localStorage.setItem("userdata", JSON.stringify(sign))

    toast("Sign up successful",{
        type:"success",
        autoClose:1000
    })

    navigate("/login")
}
    return (
        <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white p-10 shadow-sm border border-gray-100 transition-all hover:shadow-md">
                
                {/* Brand Logo Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl tracking-[0.4em] font-serif text-black uppercase leading-none">
                        Louis Philippe
                    </h1>
                    <p className="text-[10px] tracking-[0.2em] text-gray-400 mt-3 uppercase">
                        In Pursuit of Excellence
                    </p>
                </div>

                <h2 className="text-center text-sm tracking-widest text-gray-800 uppercase mb-8 font-semibold">
                    Create Your Account
                </h2>

                <form onSubmit={handle} className="space-y-6">
                    {/* Name Input */}
                    <div className="relative">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="FULL NAME"
                            value={sign.name} 
                            onChange={inputdata} 
                            className="w-full border-b border-gray-300 py-3 text-sm tracking-wide focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-300"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="EMAIL ADDRESS"
                            value={sign.email} 
                            onChange={inputdata} 
                            className="w-full border-b border-gray-300 py-3 text-sm tracking-wide focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-300"
                            required
                        />
                    </div>

                    {/* Age Input */}
                    <div className="relative">
                        <input 
                            type="number" 
                            name="age" 
                            placeholder="AGE"
                            value={sign.age} 
                            onChange={inputdata} 
                            className="w-full border-b border-gray-300 py-3 text-sm tracking-wide focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-300"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="PASSWORD"
                            value={sign.password} 
                            onChange={inputdata} 
                            className="w-full border-b border-gray-300 py-3 text-sm tracking-wide focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-300"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-black text-white py-4 mt-4 text-xs tracking-[0.3em] font-bold hover:bg-[#222] transition-all active:scale-[0.98]"
                    >
                        SIGN UP
                    </button>
                </form>

                <div className="mt-8 text-center text-[11px] tracking-wider text-gray-500">
                    Already have an account? 
                    <button 
                        onClick={() => navigate("/login")} 
                        className="ml-2 text-black font-bold border-b border-black pb-0.5"
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sign