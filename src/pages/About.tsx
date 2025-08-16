import React from 'react';
import { Factory, Users, Globe, Award } from 'lucide-react';
import PPTwine from "../components/assets/PPTwine.jpeg";

const About = () => {
  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Countries Served' },
    { number: '1000+', label: 'Products Delivered' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About PP Rope & Twine</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your trusted partner in manufacturing premium polypropylene ropes and twines since 1998
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1998, PP Rope & Twine Manufacturing began as a small family business with a 
                simple mission: to produce the highest quality polypropylene ropes and twines for industrial 
                and marine applications.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've grown into a leading manufacturer, serving clients across 50+ countries 
                while maintaining our commitment to quality, innovation, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600">
                Today, our state-of-the-art manufacturing facility produces millions of meters of rope and 
                twine annually, each product crafted to meet the most demanding industry standards.
              </p>
            </div>
            <div className="relative">
              <img
                src={PPTwine}
                alt="Manufacturing Facility"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our manufacturing process and business relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality First</h3>
              <p className="text-gray-600">
                Rigorous testing and quality control ensure every product meets international standards
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuous investment in technology and manufacturing processes for better products
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Understanding and exceeding customer expectations through personalized service
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Environmentally responsible manufacturing with sustainable materials and processes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Quality */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/5427681/pexels-photo-5427681.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quality Control"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Manufacturing Excellence
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">ISO Certified Facility</h3>
                  <p className="text-gray-600">
                    Our manufacturing facility is ISO 9001:2015 certified, ensuring consistent 
                    quality and adherence to international standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Technology</h3>
                  <p className="text-gray-600">
                    State-of-the-art machinery and equipment enable us to produce ropes and twines 
                    with precise specifications and superior quality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Testing</h3>
                  <p className="text-gray-600">
                    Every batch undergoes rigorous testing for strength, durability, UV resistance, 
                    and other critical parameters before shipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
