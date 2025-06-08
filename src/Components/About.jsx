import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white py-16 px-6 sm:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-zinc-100">
          About <span className="text-zinc-400">ExoApp</span>
        </h1>
        <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed">
          Welcome to <strong>ExoApp</strong> — your futuristic platform built for performance and elegance.
          Our mission is to build seamless, scalable, and visually compelling digital experiences.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-10 text-left">
          <div className="bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-zinc-700 transition">
            <h3 className="text-xl font-semibold text-zinc-100 mb-2">🚀 Our Mission</h3>
            <p className="text-zinc-400">
              To empower creators and businesses with tools that help them launch, scale, and succeed online.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-zinc-700 transition">
            <h3 className="text-xl font-semibold text-zinc-100 mb-2">💡 Our Vision</h3>
            <p className="text-zinc-400">
              We envision a digital-first world where innovation and design drive meaningful change.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-zinc-700 transition">
            <h3 className="text-xl font-semibold text-zinc-100 mb-2">🤝 Our Values</h3>
            <p className="text-zinc-400">
              Innovation, Integrity, Simplicity — values that guide everything we build and how we grow.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">The Team Behind ExoApp</h2>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            ExoApp is crafted by passionate developers, designers, and thinkers who believe in a better digital experience.
            Our team collaborates globally, committed to creating excellence with every release.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
