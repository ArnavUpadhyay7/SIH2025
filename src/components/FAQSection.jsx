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
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="bg-green-800 text-white rounded-xl p-10 flex flex-col justify-between bg-[url('https://i.pinimg.com/1200x/c5/89/71/c589717354d7605694a8ffff192fce17.jpg')] bg-cover bg-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-100">
              Have another question? Please contact our team!
            </p>
          </div>
          <button className="mt-6 bg-white text-green-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 self-start">
            Contact Our Team
          </button>
        </div>

        {/* Right Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100"
              >
                {faq.question}
                <span>{openIndex === idx ? "-" : "+"}</span>
              </button>
              {openIndex === idx && (
                <div className="p-4 bg-gray-50 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
