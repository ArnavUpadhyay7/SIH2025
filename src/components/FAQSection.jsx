import { useState } from "react";

const faqs = [
  {
    question: "🌱 How can sustainable farming improve crop yield?",
    answer:
      "Sustainable practices like crop rotation, organic fertilizers, and soil health management can significantly increase yield while protecting the environment.",
  },
  {
    question: "💧 What irrigation methods are most efficient for agriculture?",
    answer:
      "Drip irrigation and smart water management systems help conserve water while ensuring crops receive optimal hydration.",
  },
  {
    question: "🌾 Is organic farming economically viable?",
    answer:
      "Yes, organic farming can be profitable due to premium pricing, lower input costs, and growing consumer demand for organic products.",
  },
  {
    question: "🐝 How does biodiversity benefit agriculture?",
    answer:
      "Biodiversity supports pollination, pest control, and soil fertility, all of which contribute to sustainable crop production.",
  },
  {
    question: "🚜 What technologies are shaping modern agriculture?",
    answer:
      "Precision farming, drones, AI-based crop monitoring, and renewable energy solutions are transforming agriculture globally.",
  },
  {
    question: "🚜 What technologies are shaping modern agriculture?",
    answer:
      "Precision farming, drones, AI-based crop monitoring, and renewable energy solutions are transforming agriculture globally.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 md:px-16 pt-6 pb-16">
      <h1 className="text-4xl font-extrabold text-green-900 text-center mb-12 tracking-tight">
        Frequently Asked Questions
      </h1>
      <div className="mx-auto px-2 md:px-6 grid lg:grid-cols-2 gap-8 max-w-6xl">
        {/* Left Card */}
        <div className="bg-green-800 h-[340px] md:h-[50vh] text-white rounded-2xl p-10 flex flex-col justify-between bg-[url('https://i.pinimg.com/1200x/c5/89/71/c589717354d7605694a8ffff192fce17.jpg')] bg-cover bg-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-green-900/60 rounded-2xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Need More Help?</h2>
            <p className="text-gray-100 mb-4">
              Have another question? Please contact our team!
            </p>
            <button className="mt-2 bg-white text-green-700 px-5 py-2 rounded-lg font-semibold hover:bg-green-100 shadow transition">
              Contact Our Team
            </button>
          </div>
        </div>

        {/* Right Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border border-gray-200 rounded-xl overflow-hidden shadow transition-all duration-300 ${
                openIndex === idx ? "bg-green-50 border-green-300 shadow-lg" : "bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-green-900 hover:bg-green-100 transition"
              >
                <span className="flex items-center gap-2">{faq.question}</span>
                <span
                  className={`ml-2 text-xl transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180 text-green-700" : "text-gray-400"
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === idx
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 text-gray-700">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}