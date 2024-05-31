import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">
        We'd love to hear from you! Please reach out with any questions or comments.
      </p>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="name"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="email"
            id="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            id="message"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
