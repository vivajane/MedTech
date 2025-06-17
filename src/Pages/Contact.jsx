import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {
    const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    alert('Thank you! We’ll get back to you soon.');
    setForm({ name: '', email: '', message: '' });
    navigate("/")

  };

  return (
    <section className="max-w-lg mx-auto px-6 mt-28 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-4 pt-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-3  pb-6">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700">Send Message</button>
      </form>
    </section>
  );
}
