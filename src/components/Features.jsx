export default function Features() {
  
    const features = [
  {
    title: "🌱 Energy Savings",
    description:
      "Reduce energy consumption with our eco-efficient solutions designed to save costs and protect the planet.",
  },
  {
    title: "🍃 Natural Ingredients",
    description:
      "All our products are crafted with natural, safe, and sustainable ingredients for healthier living.",
  },
  {
    title: "✅ Green Certification",
    description:
      "We comply with global environmental standards to ensure eco-conscious practices.",
  },
  {
    title: "🏭 Sustainable Production",
    description:
      "Our facilities use renewable energy and sustainable manufacturing techniques.",
  },
    ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Key Features
          </h2>
          <h3 className="text-lg text-gray-600">
            Excellence in Quality and Environmentally Friendly
          </h3>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Big left box */}
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col justify-center text-center lg:text-left hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              📊 Sustainable Manufacturing Statistics
            </h3>
            <p className="text-gray-600 mb-6">
              Access clear data on our impact and sustainability achievements to
              build trust and accountability.
            </p>
            <div className="h-40 bg-green-100 rounded-lg flex items-center justify-center text-green-700 font-semibold">
              [ Chart / Image Placeholder ]
            </div>
          </div>

          {/* 4 small boxes on right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
