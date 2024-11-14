"use client";

import React, { useState, useEffect } from "react";

export default function FindTalent() {
  const images = [
    "/images/talent-hero/talent1.jpg",
    "/images/talent-hero/talent2.jpg",
    "/images/talent-hero/talent3.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900">
      <section
        className="relative text-white py-16 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50 z-0"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))`, // Darkening effect
          }}
        ></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl font-extrabold mb-4">Join the Talent Hunt</h1>
          <p className="text-lg mb-6">
            We are looking for amazing talent to be part of something great.
            Register now and showcase your skills!
          </p>
          <button className="text-white bg-green-600 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-green-700 transition">
            Get Started
          </button>
        </div>

        {/* Dot Indicator Section */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImage ? "bg-green-600" : "bg-gray-300"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">Showcase Your Skills</h3>
            <p className="text-gray-700">
              Let the world see your talent and get discovered by top companies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">
              Connect with Industry Leaders
            </h3>
            <p className="text-gray-700">
              Networking opportunities with experts and professionals in your
              field.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">Get Noticed</h3>
            <p className="text-gray-700">
              Stand out and get the chance to work on exciting projects with
              top-tier companies.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Sign Up for the Talent Hunt
          </h2>
          <form className="max-w-lg mx-auto space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <textarea
              placeholder="Describe Your Talent"
              rows="4"
              className="w-full p-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-md w-full font-semibold shadow-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
