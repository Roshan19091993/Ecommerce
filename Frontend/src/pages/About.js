
import React from 'react';


const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">About Our Company</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="md:w-1/2">
          {/* <img src={TeamPhoto} alt="Team" className="rounded-lg shadow-lg mb-4" /> */}
          <p className="text-lg text-gray-600">
            At OurCompany, we are passionate about delivering exceptional services and solutions to our clients.
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-4">
           "Our mission is to empower businesses with innovative e-commerce solutions that enhance customer experiences, drive growth, and foster lasting relationships."
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-600">
            <li>Customer Satisfaction</li>
            <li>Innovation and Creativity</li>
            <li>Team Collaboration</li>
            <li>Integrity and Transparency</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-600 mb-8">
          Get to know the talented individuals behind OurCompany.
        </p>
        <div className="flex flex-wrap justify-center">
        
        </div>
      </div>
      <div className="mt-12">
        
        <p className="text-lg text-gray-600">
          Hear what our clients have to say about their experience working with us.
        </p>
      </div>
    </div>
  );
};

export default About;
