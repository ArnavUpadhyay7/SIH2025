import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex">
      {/* Left Side (Image) */}
      <div className="hidden md:flex w-1/2">
        <img
          src="https://imgs.search.brave.com/er7mHqEPzVNuMVVPIX4XrrYDB6q0j3SvqXglT6_XYYE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC80MC80OS9h/bmltYWwtYnJlZWRp/bmctYWJzdHJhY3Qt/Y29uY2VwdC12ZWN0/b3ItNDkzMDQwNDku/anBn"
          alt="Login Visual"
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>

      {/* Right Side (Form) */}
      <div className="flex w-full md:w-1/2 items-center justify-center backdrop-blur-xl p-10">
        <div className="w-full max-w-lg bg-white rounded-2xl p-10 shadow-xl border border-gray-200">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-[#4CAF50]">
            Welcome Back
          </h2>

          <form className="space-y-6">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4FC3F7] outline-none transition"
            />

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

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg font-semibold text-white text-lg shadow-md bg-gradient-to-r from-[#4CAF50] to-[#81C784] hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-700 mt-8 text-base">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#FFD54F] font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
