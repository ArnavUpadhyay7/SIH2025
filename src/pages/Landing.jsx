import FAQSection from "../components/FAQSection";
import Features from "../components/Features";

export default function Landing() {

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-start justify-center bg-white font-serif">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4 pt-24 md:pt-32">
          {/* Trust Badge */}
          <p className="flex items-center justify-center gap-2 mb-4 text-sm md:text-base">
            <span>🌱</span>
            Trusted by leading agriculture companies
            <span>🌱</span>
          </p>

          {/* Heading */}
          <h1 className="text-2xl md:text-5xl font-semibold leading-snug mb-4">
            Main tagline here - Meow meow
            <br />
            Cows, Eco-Friendly Practices
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl mb-8">
            Improve milk yield and feed efficiency for more profit and time for you
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="cursor-pointer bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition shadow">
              Get Started - it's free
            </button>
          </div>

          
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* FAQ's section */}
      <FAQSection />
        

    </div>
  );
}
