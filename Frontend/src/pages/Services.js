

import React from 'react';
import { FaShoppingCart, FaShippingFast, FaCreditCard, FaUserShield, FaMobileAlt, FaHeadset } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Our E-commerce Services</h1>
      <p className="text-lg text-center mb-8 text-gray-600">
        We offer a comprehensive range of e-commerce services to help you build, manage, and grow your online store.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaShoppingCart className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Store Development</h2>
          <p className="text-gray-600 text-center">
            Custom e-commerce website development tailored to your business needs, ensuring a seamless shopping experience for your customers.
          </p>
          <p className="text-gray-600 mt-2 text-center">
            <strong>Process:</strong> Consultation, Design, Development, Testing, Launch.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaShippingFast className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Order Management</h2>
          <p className="text-gray-600 text-center">
            Efficient order processing and inventory management systems to streamline your operations and ensure timely delivery.
          </p>
          <p className="text-gray-600 mt-2 text-center">
            <strong>Process:</strong> Analysis, Integration, Optimization, Monitoring.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaCreditCard className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Payment Solutions</h2>
          <p className="text-gray-600 text-center">
            Secure and flexible payment gateway integrations to provide your customers with a variety of payment options.
          </p>
          <p className="text-gray-600 mt-2 text-center">
            <strong>Process:</strong> Requirement Analysis, Gateway Selection, Integration, Testing.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaUserShield className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Security</h2>
          <p className="text-gray-600 text-center">
            Robust security measures to protect your online store and customer data from threats and breaches.
          </p>
          <p className="text-gray-600 mt-2 text-center">
            <strong>Process:</strong> Security Assessment, Implementation, Monitoring, Upgrades.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaMobileAlt className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Mobile Optimization</h2>
          <p className="text-gray-600 text-center">
            Ensure your e-commerce site is fully optimized for mobile devices, providing a seamless shopping experience on the go.
          </p>
          <p className="text-gray-600 mt-2 text-center">
            <strong>Process:</strong> Mobile-Friendly Design, Development, Testing, Deployment.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaHeadset className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Customer Support</h2>
          <p className="text-gray-600 text-center">
            Provide exceptional customer service with our integrated support systems, ensuring your customers' queries are resolved promptly.
          </p>
          <p className="text-gray-600 mt-2 text-center">
            <strong>Process:</strong> Support System Setup, Training, Live Support, Feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

