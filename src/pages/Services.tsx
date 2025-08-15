import React from 'react';
import { MessageCircle, Package, Truck, Settings } from 'lucide-react';

const Services = () => {
  const ropeTypes = [
    {
      name: "Twisted PP Rope",
      description: "Classic 3-strand twisted construction for general purpose applications",
      specifications: ["Diameters: 6mm - 50mm", "Colors: Natural, Blue, Black, Custom", "Breaking Load: 500kg - 8000kg"],
      applications: ["Marine & Boating", "Agriculture", "Construction", "General Industrial"]
    },
    {
      name: "Braided PP Rope",
      description: "8-strand braided construction offering superior flexibility and strength",
      specifications: ["Diameters: 4mm - 40mm", "Colors: Various options available", "Breaking Load: 400kg - 6500kg"],
      applications: ["Mooring Lines", "Tow Ropes", "Sports & Recreation", "Safety Lines"]
    },
    {
      name: "PP Twine",
      description: "Lightweight and versatile twine for packaging and bundling applications",
      specifications: ["Thickness: 1mm - 8mm", "Colors: Natural, Colored options", "Breaking Load: 50kg - 800kg"],
      applications: ["Packaging", "Agriculture", "Crafts", "Bundling"]
    },
    {
      name: "Marine Grade Rope",
      description: "UV-stabilized rope specifically designed for harsh marine environments",
      specifications: ["Diameters: 8mm - 60mm", "UV Resistant coating", "Breaking Load: 800kg - 12000kg"],
      applications: ["Marine Mooring", "Offshore Operations", "Dock Lines", "Anchor Lines"]
    },
    {
      name: "High-Strength Rope",
      description: "Engineered for maximum strength and durability in demanding applications",
      specifications: ["Diameters: 10mm - 80mm", "Enhanced breaking strength", "Special reinforcement"],
      applications: ["Heavy Industry", "Mining", "Lifting Operations", "Towing"]
    },
    {
      name: "Colored PP Rope",
      description: "Available in various colors for identification and decorative purposes",
      specifications: ["Standard and custom colors", "Colorfast properties", "Various constructions"],
      applications: ["Safety & Identification", "Decorative use", "Sports marking", "Educational"]
    }
  ];

  const services = [
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Custom Manufacturing",
      description: "Tailored rope and twine solutions to meet your specific requirements",
      features: ["Custom diameters", "Special colors", "Unique specifications", "Private labeling"]
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Bulk Supply",
      description: "Large volume orders with competitive pricing and reliable delivery",
      features: ["Volume discounts", "Flexible packaging", "Regular supply contracts", "Quality assurance"]
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Global Shipping",
      description: "Worldwide delivery with secure packaging and tracking",
      features: ["International shipping", "Secure packaging", "Tracking support", "Insurance options"]
    }
  ];

  const getWhatsAppLink = (service: string) => {
    const message = `Hi! I'm interested in your ${service} service. Could you please provide more details and a quote?`;
    return `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive rope and twine solutions with custom manufacturing, bulk supply, and worldwide delivery
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions for all your polypropylene rope and twine requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rope Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Rope & Twine Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of polypropylene ropes and twines for various applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ropeTypes.map((rope, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{rope.name}</h3>
                <p className="text-gray-600 mb-6">{rope.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Specifications:</h4>
                  <ul className="space-y-1">
                    {rope.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {rope.applications.map((app, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={getWhatsAppLink(rope.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                >
                  <MessageCircle size={18} />
                  <span>Request Quote</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Custom Solutions?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We specialize in creating custom rope and twine solutions tailored to your specific requirements. 
              From unique specifications to special applications, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/1234567890?text=Hi! I need a custom rope solution for my specific requirements. Could you help me?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                <MessageCircle size={24} />
                <span>Discuss Custom Needs</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;