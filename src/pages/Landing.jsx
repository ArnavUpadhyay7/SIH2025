import { useState } from "react";
import Carousel from "../components/Carousel";
import Features from "../components/Features";

export default function Landing() {
  const demoImages = [
    "https://imgs.search.brave.com/GmM7EjJbADgYNhA-w-S_S6927oQqfVf9LTXFwCjA-_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8wOS80Mi9h/bmltYWwtc2NpZW5j/ZS1pc29sYXRlZC1j/YXJ0b29uLXZlY3Rv/ci00ODk3MDk0Mi5q/cGc",
    "https://imgs.search.brave.com/CPapSbDCvhsr5ScKaTMjKf1Fmpqpwmj99HO9kskVAIk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/b3JkaW5hcnktZmFy/bWVycy1saWZlLWlz/b21ldHJpYy13aXRo/LWNhdHRsZS1mYXJt/LWFuaW1hbHMtc2hl/ZXBmb2xkLWh1bWFu/LWNoYXJhY3Rlci1l/bWJyYWNpbmctY293/LWlsbHVzdHJhdGlv/bl8xMjg0LTI4MDY5/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA",
    "https://imgs.search.brave.com/s4Ka-Ce3MtoVm9KOrFMV190tl0SS0KvoFuYVedbCeGI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJmLzcz/LzExLzJmNzMxMTgw/YjM4YzY4NDVjODg3/MTg3OWUwYWI4MzFm/LmpwZw",
    "https://imgs.search.brave.com/T8rcmYu26RdnfXFtl43G042tqVhGLJ99aGjVCAT1Dss/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC83NC84MC9h/bmltYWwtaHVzYmFu/ZHJ5LWNvbmNlcHQt/ZmFybWVyLWJyZWVk/cy1jaGlja2Vucy12/ZWN0b3ItNDc5ODc0/ODAuanBn" 
  ];

  const [image, setImage] = useState(null);
  const [details, setDetails] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));

      // ML guys will give the details here...
      setDetails("🔍 Analyzing image... (ML results will appear here)");
    }
  };

  return (
    <div className="space-y-16 max-w-6xl mx-auto px-4 py-12">
      {/* Image Upload Section */}
      <section className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-10 overflow-hidden hover:shadow-2xl transition">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4CAF50] to-[#4FC3F7]" />
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Upload Animal Image
          </h2>
        </div>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Upload an image of your livestock to receive{" "}
          <span className="font-semibold text-[#4CAF50]">health</span> and{" "}
          <span className="font-semibold text-[#4FC3F7]">identification</span>{" "}
          insights using our ML-powered system.
        </p>

        <div className="flex flex-col items-center gap-6">
          <label className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-10 cursor-pointer hover:border-[#4CAF50] hover:bg-gray-50 transition group">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <span className="text-gray-700 font-medium group-hover:text-[#4CAF50]">
              Click or drag & drop to upload
            </span>
            <span className="text-sm text-gray-500">
              Supported: JPG, PNG
            </span>
          </label>

          {image && (
            <div className="w-full text-center">
              <img
                src={image}
                alt="Uploaded preview"
                className="max-h-80 mx-auto rounded-xl shadow-lg border border-gray-200 object-cover hover:scale-[1.02] transition"
              />
              <p className="mt-4 text-gray-700 font-medium bg-gray-50 p-3 rounded-lg shadow-sm">
                {details}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Carousel Section */}
      <section>
        <Carousel images={demoImages} />
      </section>

      {/* Basic Info Section */}
      <section className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-10 overflow-hidden hover:shadow-2xl transition">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD54F] to-[#FFB300]" />
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        </div>
        <p className="text-gray-700 leading-relaxed space-y-3">
          Welcome to{" "}
          <span className="font-semibold text-[#4CAF50]">AgriHub</span> — your
          trusted digital companion for the future of modern animal husbandry.
          At AgriHub, we believe farming should be smarter, more connected, and
          easier to manage.
          <br />
          This platform empowers you to track every aspect of your livestock's
          health with precision, giving you insights once reserved for large
          farms with costly resources.
          <br />
          From nutrition monitoring and vaccination reminders to early illness
          detection, AgriHub ensures every animal gets personalized care. Plus,
          connect with farmers, vets, and innovators worldwide to share and
          learn.
          <br />
          Together, let's build a future where every farmer thrives and every
          animal receives the care it deserves.
        </p>
      </section>

      {/* Features */}
      <Features />

      {/* Announcements Section */}
      <section className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-10 overflow-hidden hover:shadow-2xl transition">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4FC3F7] to-[#81C784]" />
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Announcements</h2>
        </div>
        <ul className="space-y-4">
          <li className="p-4 rounded-xl bg-gradient-to-r from-[#E8F5E9] to-[#E3F2FD] shadow hover:scale-[1.02] hover:shadow-md transition">
            SIH hackathon day - <strong>September 25th</strong>.
          </li>
          <li className="p-4 rounded-xl bg-gradient-to-r from-[#FFFDE7] to-[#FFF9C4] shadow hover:scale-[1.02] hover:shadow-md transition">
            Will we win? <strong>For sure!</strong>.
          </li>
          <li className="p-4 rounded-xl bg-gradient-to-r from-[#F3E5F5] to-[#EDE7F6] shadow hover:scale-[1.02] hover:shadow-md transition">
            AZNET ? <strong>Na !</strong> Team Meow FTW 🚀
          </li>
        </ul>
      </section>
    </div>
  );
}
