import React from "react";

const features = [
  {
    title: "Wife material",
    description:
      "Our wind turbines are engineered to perform across diverse terrains, from coastal areas to open plains, supporting both grid and off-grid systems.",
    img: "https://i.pinimg.com/736x/37/ac/cd/37accdf700192b4d9124df5c337d7e3a.jpg",
  },
  {
    title: "Power from Water",
    description:
      "Hydropower harnesses the force of moving water to generate reliable and sustainable energy worldwide.",
    img: "https://i.pinimg.com/736x/1f/04/51/1f04511915872850d9fd0bb8b9b38efa.jpg",
  },
  {
    title: "Harness the Sun",
    description:
      "Solar panels convert sunlight into clean electricity, powering homes, businesses, and communities.",
    img: "https://i.pinimg.com/1200x/fd/94/cf/fd94cfad71217c9e7de9f8e3a6b66732.jpg",
  },
  {
    title: "Geothermal Energy",
    description:
      "By tapping into the Earth's natural heat, geothermal systems provide renewable energy with minimal environmental impact.",
    img: "https://i.pinimg.com/736x/8b/86/5d/8b865d6130d58f3c468b6ab980982d70.jpg",
  },
  {
    title: "Baddie",
    description:
      "Pioneering technologies drive the global transition to renewable energy and a sustainable future.",
    img: "https://i.pinimg.com/736x/c8/3a/a4/c83aa4cdbff2241148e27d99d8180485.jpg",
  },
];

const Features = () => {
  return (
    <section className="px-16 py-12 bg-gray-50">
      
      {/* max-w-6xl just add this below to make it centered */}
      <div className="max-w-7x mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">Key Services</h1>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Empowering the World with Clean Energy Solutions
        </h2>

        <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 group hover:scale-110 hover:z-10"
            >
              {/* Background image */}
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-[60vh] object-cover transition-all duration-500 group-hover:opacity-100 opacity-70"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-4 text-white transition-all duration-500">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
