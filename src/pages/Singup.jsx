import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [userType, setUserType] = useState("Farmer");

  return (
    <div className="flex">
      {/* Left Side (Image) */}
      <div className="hidden md:flex w-1/2">
        <img
          src="https://imgs.search.brave.com/MjIU2TmXpJU8sbHYrNwOFk0QcfSNOnB5_XPFVSwC0Q4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTYy/MzAxODQwMS92ZWN0/b3IvdmV0ZXJpbmFy/eS1jYXJlLWZvci1m/YXJtLWFuaW1hbHMt/Y293LXBpZy1jaGlj/a2VuLWhlYWx0aC1j/aGVjay1tZWRpY2lu/ZS1hbmltYWwtdHJl/YXRtZW50LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1fX1U4/WVNlY0E4Y1pMbEZj/SjEySDI4cVR3enF4/SUtDaklWRnhvZjVI/bWR3PQ"
          alt="Signup Visual"
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>

      {/* Right Side (Form) */}
      <div className="flex w-full md:w-1/2 items-center justify-center backdrop-blur-xl p-10">
        <div className="w-full max-w-lg bg-white rounded-2xl p-10 shadow-xl border border-gray-200">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-[#4CAF50]">
            Create Account
          </h2>

          <form className="space-y-6">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4FC3F7] outline-none transition"
            />

            {/* Language Dropdown */}
            <select
              className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4FC3F7] outline-none transition"
            >
              <option>Select Language</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Punjabi</option>
              <option>Telugu</option>
              <option>Tamil</option>
              <option>Bengali</option>
              {/* add more */}
            </select>

            {/* State Dropdown */}
            <select
              className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4FC3F7] outline-none transition"
            >
              <option>Select State</option>
              <option>Punjab</option>
              <option>Haryana</option>
              <option>Uttar Pradesh</option>
              <option>Rajasthan</option>
              <option>Karnataka</option>
              {/* add all states */}
            </select>

            {/* Mobile + OTP */}
            <div className="flex gap-3">
              <input
                type="tel"
                placeholder="Mobile Number"
                className="flex-1 px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4FC3F7] outline-none transition"
              />
              <button
                type="button"
                className="cursor-pointer px-4 py-2 rounded-lg bg-gradient-to-r from-[#4CAF50] to-[#81C784] text-white font-semibold shadow hover:opacity-90 transition"
              >
                Send OTP
              </button>
            </div>

            {/* User Type */}
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4FC3F7] outline-none transition"
            >
              <option>Farmer</option>
              <option>Breeder</option>
              <option>Organization</option>
              <option>Govt Cattle Farm</option>
            </select>

            {/* Optional Fields for orgs/breeders/govt */}
            {(userType === "Breeder" ||
              userType === "Organization" ||
              userType === "Govt Cattle Farm") && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Farm / Organization Name"
                  className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4FC3F7] outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Email (Optional)"
                  className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4FC3F7] outline-none transition"
                />
                <input
                  type="number"
                  placeholder="Number of Animals Owned"
                  className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4FC3F7] outline-none transition"
                />
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg font-semibold text-white text-lg shadow-md bg-gradient-to-r from-[#4CAF50] to-[#81C784] hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-700 mt-8 text-base">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-[#FFD54F] font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
