import FAQSection from "../components/FAQSection";
import Features from "../components/Features";
import image from "../assets/image.png";

export default function Landing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-start justify-center bg-white font-serif overflow-hidden">
        {/* Background Image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center duration-1000 animate-hero-bg"
          style={{
            backgroundImage: `url(${image})`
          }}
        />

        {/* Content */}
        <div className="relative z-10 tracking-tighter md:tracking-normal text-center px-4 pt-8 md:pt-16 w-full max-w-3xl mx-auto animate-fade-in-down">
          {/* Trust Badge */}
          <p className="flex items-center justify-center gap-2 mb-2 text-sm md:text-base animate-fade-in-up delay-100">
            <span>🌱</span>
            <span className="font-semibold text-green-700">Trusted by leading agriculture companies</span>
            <span>🌱</span>
          </p>

          {/* Heading */}
          <h1 className="text-2xl md:text-5xl font-extrabold leading-snug mb-2 md:mb-4 text-green-900 drop-shadow animate-fade-in-up delay-200">
            Empowering Dairy Farmers<br />
            <span className="text-green-700">Eco-Friendly Practices</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl mb-4 md:mb-8 text-gray-700 animate-fade-in-up delay-300">
            Improve milk yield and feed efficiency for more profit and time for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
            <button className="cursor-pointer bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-lg">
              Get Started - it's free
            </button>
          </div>
        </div>
      </section>

      {/* Features with fade-in animation */}
      <div className="animate-fade-in-up delay-500">
        <Features />
      </div>

      {/* FAQ's section with fade-in animation */}
      <div className="animate-fade-in-up delay-700">
        <FAQSection />
      </div>
    </div>
  );
}