import "./index.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Singup";
import Login from "./pages/Login";
import FMsystem from "./pages/FMsystem";
import Biocare from "./pages/Biocare";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Signup", path: "/signup" },
    { name: "FMsystem", path: "/fmsystem" },
    { name: "Biocare", path: "/biocare" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#4CAF50] via-[#4FC3F7] to-[#81C784] text-gray-900 font-sans flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-[#4CAF50]">
          Meow 🐱
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-3 py-2 rounded-lg hover:bg-[#FFD54F]/70 transition-colors text-gray-800"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </div>
        </button>
      </header>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-3 px-6 py-4 bg-[#4CAF50]/90 backdrop-blur-md border-b border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#FFD54F]/80 transition-colors text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto bg-white/80">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/fmsystem" element={<FMsystem />} />
          <Route path="/biocare" element={<Biocare />} />
        </Routes>
      </main>

      {/* Footer */}
<footer className="mt-[2px] bg-white/80 backdrop-blur-md border-t border-gray-200">
  <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
    {/* Brand / About */}
    <div>
      <h2 className="text-2xl font-bold text-[#4CAF50] mb-3">AgriHub 🐄</h2>
      <p className="text-gray-600 leading-relaxed text-sm">
        Smart livestock management made simple.  
        Empowering farmers with data-driven tools for better care, higher yields, 
        and sustainable farming.
      </p>
    </div>

    {/* Quick Navigation */}
    <div>
      <h3 className="text-lg font-semibold text-[#FFB300] mb-3">Explore</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <Link to="/" className="hover:text-[#4FC3F7] transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/signup" className="hover:text-[#4FC3F7] transition-colors">
            Signup
          </Link>
        </li>
        <li>
          <Link
            to="/fmsystem"
            className="hover:text-[#4FC3F7] transition-colors"
          >
            Farm Management
          </Link>
        </li>
      </ul>
    </div>

    {/* Govt Resources */}
    <div>
      <h3 className="text-lg font-semibold text-[#FFB300] mb-3">
        Govt & Resources
      </h3>
      <ul className="space-y-2 text-sm">
        <li>
          <a
            href="https://dahd.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4CAF50] transition-colors"
          >
            Dept. of Animal Husbandry & Dairying (GoI)
          </a>
        </li>
        <li>
          <a
            href="https://icar.org.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4CAF50] transition-colors"
          >
            ICAR - Agricultural Research
          </a>
        </li>
        <li>
          <a
            href="https://agricoop.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4CAF50] transition-colors"
          >
            Ministry of Agriculture & Farmers Welfare
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-100">
    © {new Date().getFullYear()} AgriHub • Built for Farmers, Powered by Tech 🌾
  </div>
</footer>


    </div>
  );
}

export default App;
