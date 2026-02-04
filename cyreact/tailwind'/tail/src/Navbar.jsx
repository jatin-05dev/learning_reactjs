
export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <span>🪑</span>
          <h2>GreenWood</h2>
        </div>

        {/* MENU ITEMS */}
        <ul className="flex items-center gap-10 text-gray-700">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">About</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
          <li className="hover:text-black cursor-pointer">Portfolio</li>
          <li className="hover:text-black cursor-pointer">Help</li>
        </ul>
      </div>
    </nav>
  );
}
