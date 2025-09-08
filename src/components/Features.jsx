import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const themes = [
  {
    title: "Image identification",
    description:
      "Smart education, a concept that describes learning in digital age. It enables learners to learn more effectively, efficiently, flexibly and comfortably.",
    icon: "https://files.lpu.in//umsweb//Events//umseventAssets//27273_2025_8_13_11_9.jpg",
  },
  {
    title: "Food management",
    description:
      "Disaster management includes ideas related to risk mitigation, Planning and management before, after or during a disaster.",
    icon: "https://files.lpu.in//umsweb//Events//umseventAssets//27273_2025_8_13_11_9.jpg",
  },
  {
    title: "Meow",
    description:
      "Challenge your creative mind to conceptualize and develop unique toys and games based on our civilization, history, and culture etc.",
    icon: "https://files.lpu.in//umsweb//Events//umseventAssets//27273_2025_8_13_11_9.jpg",
  },
  {
    title: "TECH INNOVATION",
    description:
      "Innovate with tech-based solutions to solve modern-day challenges across industries and society.",
    icon: "https://files.lpu.in//umsweb//Events//umseventAssets//27273_2025_8_13_11_9.jpg",
  },
];

export default function Features() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + themes.length) % themes.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % themes.length);
  };

  // Get 3 items in a circular way
  const getVisibleThemes = () => {
    return [
      themes[current],
      themes[(current + 1) % themes.length],
      themes[(current + 2) % themes.length],
    ];
  };

  return (
    <div className="max-w-8xl mx-auto py-12 px-4 text-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-orange-500 mb-2">Features</h2>
      <p className="mb-8 text-gray-700">Here are all our features...</p>

      {/* Carousel */}
      <div className="flex items-center justify-center gap-6">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="text-orange-500 text-2xl hover:text-orange-600 transition cursor-pointer"
        >
          <FaArrowLeft />
        </button>

        {/* Animated cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out">
          {getVisibleThemes().map((theme, index) => (
            <div
              key={index}
              className="h-80 bg-white rounded-xl border border-orange-300 p-6 shadow hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={theme.icon}
                alt={theme.title}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-blue-900 mb-2">{theme.title}</h3>
              <p className="text-gray-700 text-sm">{theme.description}</p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="text-orange-500 text-2xl hover:text-orange-600 transition cursor-pointer"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
