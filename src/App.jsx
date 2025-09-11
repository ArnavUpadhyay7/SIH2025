import "./index.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Singup";
import Login from "./pages/Login";
import FMsystem from "./pages/FMsystem";
import Biocare from "./pages/Biocare";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "FMsystem", path: "/fmsystem" },
    { name: "Biocare", path: "/biocare" },
  ];

  return (
    
    <div className="text-gray-900 font-sans flex flex-col min-h-screen">
     
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-gray-50 border-b border-gray-200">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-gray-900 hover:text-green-700 transition"
        >
          Meow 🐄
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-700 hover:text-green-700 transition"
            >
              {item.name}
            </Link>
          ))}
          
        </nav>

        <Link to="/signup" className="hidden md:flex bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition shadow">
          Get Started
        </Link>

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
        <nav className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white border-b border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-green-700 transition"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/signin"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2 border border-gray-300 rounded-lg text-center hover:bg-gray-100 transition"
          >
            Sign in
          </Link>
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/fmsystem" element={<FMsystem />} />
          <Route path="/biocare" element={<Biocare />} />
        </Routes>
      </main>

      <Footer />

    </div>

    
  );
}

export default App;



