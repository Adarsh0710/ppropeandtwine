import React from 'react';
import { MessageCircle, Award, Shield, Truck } from 'lucide-react';

const Home = () => {
  const products = [
    {
      id: 1,
      name: "PP Twisted Rope",
      description: "High-strength polypropylene twisted rope ideal for marine and industrial applications.",
      image: "https://images.pexels.com/photos/6291574/pexels-photo-6291574.jpeg?auto=compress&cs=tinysrgb&w=600",
      sizes: "6mm - 50mm diameter"
    },
    {
      id: 2,
      name: "PP Braided Rope",
      description: "Durable braided rope with excellent grip and flexibility for various applications.",
      image: "https://images.pexels.com/photos/6291571/pexels-photo-6291571.jpeg?auto=compress&cs=tinysrgb&w=600",
      sizes: "4mm - 40mm diameter"
    },
    {
      id: 3,
      name: "PP Twine",
      description: "Premium quality twine perfect for packaging, bundling, and agricultural use.",
      image: "https://images.pexels.com/photos/5435292/pexels-photo-5435292.jpeg?auto=compress&cs=tinysrgb&w=600",
      sizes: "1mm - 8mm thickness"
    },
    {
      id: 4,
      name: "Marine Grade Rope",
      description: "UV-resistant rope designed specifically for marine environments and harsh conditions.",
      image: "https://images.pexels.com/photos/6291575/pexels-photo-6291575.jpeg?auto=compress&cs=tinysrgb&w=600",
      sizes: "8mm - 60mm diameter"
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Premium Quality",
      description: "ISO certified manufacturing with rigorous quality control"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Durable & Strong",
      description: "Built to withstand extreme conditions and heavy loads"
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Fast Delivery",
      description: "Quick turnaround times with reliable shipping worldwide"
    }
  ];

  const getWhatsAppLink = (productName: string) => {
    const message = `Hi! I'm interested in getting a quote for ${productName}. Could you please provide more details?`;
    return `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Premium PP Rope & Twine
                <span className="block text-blue-200">Manufacturing</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-lg">
                Leading manufacturer of high-quality polypropylene ropes and twines. 
                Trusted by industries worldwide for strength, durability, and reliability.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#products"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 text-center"
                >
                  View Products
                </a>
                <a
                  href="https://wa.me/1234567890?text=Hi! I'd like to know more about your PP rope and twine products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  <MessageCircle size={20} />
                  <span>Get Quote</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6291574/pexels-photo-6291574.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="PP Rope Manufacturing"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive selection of premium PP ropes and twines designed for various industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <p className="text-sm text-blue-600 font-medium mb-4">Available: {product.sizes}</p>
                  <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                  >
                    <MessageCircle size={18} />
                    <span>Get Quote on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Place Your Order?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for custom quotes, bulk orders, and specialized rope solutions tailored to your needs.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hi! I'm interested in placing a bulk order. Could you please provide a quote?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 text-lg"
          >
            <MessageCircle size={24} />
            <span>Contact Us on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;