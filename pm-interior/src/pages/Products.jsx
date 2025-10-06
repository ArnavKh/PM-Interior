// src/pages/Products.jsx
import React from "react";
import Image from "../assets/DSCN4051.jpg";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Modern Sofa Set",
      description: "Premium comfort and design to complement your living room.",
      image: `${Image}`,
    },
    {
      id: 2,
      name: "Elegant Dining Table",
      description: "A spacious and stylish dining solution for your family meals.",
      image: `${Image}`,
    },
    {
      id: 3,
      name: "Luxury Bed Frame",
      description: "Bring elegance and relaxation to your bedroom.",
      image: `${Image}`,
    },
    {
      id: 4,
      name: "Wardrobe Collection",
      description: "Maximize storage with modern and sleek wardrobe designs.",
      image: `${Image}`,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-primary pt-24 px-6">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-primary">
          Our Products
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our wide range of interior solutions crafted to bring beauty
          and functionality into every space.
        </p>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-700 text-sm mb-4">
                  {product.description}
                </p>
                <button className="px-4 py-2 bg-primary hover:bg-secondary transition text-white rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
