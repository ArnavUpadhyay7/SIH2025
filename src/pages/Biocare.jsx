export default function BioCare() {
  const demoFeatures = [
    {
      title: "Disease Detection",
      desc: "Upload animal images to detect early signs of illness with AI insights.",
      icon: "🐄",
    },
    {
      title: "Vaccination Reminders",
      desc: "Stay on top of vaccination schedules with smart alerts.",
      icon: "🧪",
    },
    {
      title: "Diet & Nutrition",
      desc: "Personalized diet plans to boost animal health and productivity.",
      icon: "🌾",
    },
    {
      title: "Vet Helpline",
      desc: "Connect to certified veterinarians for urgent care and advice.",
      icon: "📞",
    },
  ];

  return (
    <div className="space-y-16 max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center py-12 bg-gradient-to-r from-[#4CAF50]/10 to-[#81C784]/10 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4CAF50]">
          BioCare 🐑
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Smarter livestock healthcare, powered by AI and trusted veterinary
          practices. Ensure your animals live healthier and longer lives.
        </p>
      </section>

      {/* Upload Section */}
      <section className="bg-gray-100 rounded-2xl shadow-xl border border-gray-200 p-8">
        <h2 className="text-2xl font-bold mb-4 text-[#4CAF50]">
          Quick Health Check
        </h2>
        <p className="text-gray-600 mb-6">
          Upload your animal's photo for instant AI-based health screening.
        </p>
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 cursor-pointer hover:border-[#4CAF50] transition">
          <input type="file" accept="image/*" className="hidden" />
          <span className="text-gray-700 font-medium">
            Click or drag & drop to upload
          </span>
          <span className="text-sm text-gray-500">Supported: JPG, PNG</span>
        </label>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-3xl font-bold text-center text-[#4CAF50] mb-10">
          BioCare Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {demoFeatures.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-[#4CAF50] mb-4">
          Govt. Resources & Guides
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <a
              href="#"
              className="hover:text-[#4FC3F7] transition underline"
            >
              Dept. of Animal Husbandry & Dairying (GoI)
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#4FC3F7] transition underline"
            >
              ICAR – Animal Health & Nutrition
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#4FC3F7] transition underline"
            >
              Ministry of Agriculture – Animal Welfare Schemes
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
