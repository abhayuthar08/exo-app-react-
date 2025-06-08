import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8">Get in Touch</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white"
          />
          <button
            type="submit"
            className="bg-white text-zinc-900 font-bold px-6 py-3 rounded hover:bg-zinc-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
