// src/pages/Home.tsx
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-primary text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Transform Your Space with{" "}
          <span className="text-secondary">PM Interior</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8">
          Bringing elegance, comfort, and functionality to your home and office.
        </p>
        <button className="px-8 py-3 bg-secondary rounded-xl font-semibold hover:bg-[#a53d34] transition">
          Get Started
        </button>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-12 px-6">
          <img src="/logos/logo1.png" alt="Partner 1" className="h-16" />
          <img src="/logos/logo2.png" alt="Partner 2" className="h-16" />
          <img src="/logos/logo3.png" alt="Partner 3" className="h-16" />
          <img src="/logos/logo4.png" alt="Partner 4" className="h-16" />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white border border-primary/20 rounded-xl shadow-md p-4 text-center">
            <img src="/products/sofa.jpg" alt="Sofa" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold text-secondary">Modern Sofa</h3>
          </div>
          <div className="bg-white border border-primary/20 rounded-xl shadow-md p-4 text-center">
            <img src="/products/chair.jpg" alt="Chair" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold text-secondary">Luxury Chair</h3>
          </div>
          <div className="bg-white border border-primary/20 rounded-xl shadow-md p-4 text-center">
            <img src="/products/table.jpg" alt="Table" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold text-secondary">Dining Table</h3>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={28} color="white" />
      </a>
    </div>
  );
}
