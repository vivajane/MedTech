import React from 'react';

export default function AboutUs() {
  return (
    <section className="max-w-3xl mx-auto p-6 mt-16 text-gray-800">
      <h2 className="text-3xl font-bold mb-4">About MedTech</h2>
      <p className="mb-4">
        MedTech is dedicated to making healthcare more accessible by providing a fast, user-friendly platform for patients
        to book appointments with qualified doctors online. Our mission is to connect people with trusted medical professionals
        ,anywhere, anytime.
      </p>
      <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Trust:</strong> We value confidentiality and accurate information.</li>
        <li><strong>Simplicity:</strong> Easy appointment scheduling in just a few clicks.</li>
        <li><strong>Accessibility:</strong> A mobile-first design that works for everyone.</li>
        <li><strong>Innovation:</strong> Continuously improving our platform using modern tech.</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-2">Our Team</h3>
      <p>Founded by a small group of dedicated developers and healthcare professionals passionate about making digital healthcare available to all.</p>
    </section>
  );
}
