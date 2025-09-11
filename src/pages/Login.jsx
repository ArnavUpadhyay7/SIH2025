import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="px-2 min-h-[90vh] flex flex-col md:flex-row items-center justify-center">
      {/* Left Side (Image) */}
      <div className="hidden md:flex md:w-1/2 h-[70vh] items-center justify-center">
        <div className="px-10 w-full h-full flex items-center justify-center">
          <img
            src="https://imgs.search.brave.com/er7mHqEPzVNuMVVPIX4XrrYDB6q0j3SvqXglT6_XYYE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC80MC80OS9h/bmltYWwtYnJlZWRp/bmctYWJzdHJhY3Qt/Y29uY2VwdC12ZWN0/b3ItNDkzMDQwNDku/anBn"
            alt="Login Visual"
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="flex w-full md:w-1/2 items-center justify-center py-8 md:py-0 h-auto md:h-[70vh]">
        <div className="w-full max-w-lg bg-white rounded-2xl p-6 md:p-10 shadow-2xl border border-gray-100 animate-fade-in flex flex-col justify-center h-full">
          {/* Logo/Avatar */}
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Avatar"
              className="w-16 h-16 rounded-full shadow-lg border-2 border-[#4CAF50]"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-[#388E3C] tracking-tight">
            Welcome Back
          </h2>

          <form className="space-y-6">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#388E3C] focus:ring-2 focus:ring-[#4FC3F7] outline-none transition placeholder:text-gray-400"
            />

            {/* Mobile + OTP */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="tel"
                placeholder="Mobile Number"
                className="flex-1 px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#388E3C] focus:ring-2 focus:ring-[#4FC3F7] outline-none transition placeholder:text-gray-400"
              />
              <button
                type="button"
                className="cursor-pointer px-4 py-2 rounded-lg bg-gradient-to-r from-[#388E3C] to-[#81C784] text-white font-semibold shadow hover:scale-105 hover:opacity-95 transition"
              >
                Send OTP
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg font-semibold text-white text-lg shadow-md bg-gradient-to-r from-[#388E3C] to-[#81C784] hover:scale-105 hover:opacity-95 transition"
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="mx-4 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>

          <p className="text-center text-gray-700 text-base">
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