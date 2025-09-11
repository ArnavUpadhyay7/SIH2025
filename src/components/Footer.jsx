import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="mt-[2px] border-t border-gray-200">
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
</div>
  )
}

export default Footer