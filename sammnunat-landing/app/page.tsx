"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Sammnunat</h1>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Building Modern Web Experiences
            </h2>
            <p className="mt-6 text-lg text-indigo-100">
              We help startups and businesses scale with modern web development,
              clean UI/UX, and high-performance applications.
            </p>
            <button className="mt-8 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Explore Services
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 p-10 rounded-3xl backdrop-blur shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-indigo-100">
              <li>✔ React & Next.js Experts</li>
              <li>✔ Clean UI/UX Design</li>
              <li>✔ Scalable & Maintainable Code</li>
              <li>✔ Performance Focused</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white text-center py-20">
        <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
        <p className="mt-4 text-indigo-100">
          Let’s build something amazing together.
        </p>
        <button className="mt-8 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        © 2025 Sammnunat. All rights reserved.
      </footer>
    </div>
  );
}

const services = [
  {
    icon: "💻",
    title: "Web Development",
    desc: "Modern, scalable web applications using React and Next.js.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "User-focused, clean and attractive interface designs.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    desc: "Fast-loading, SEO-friendly and optimized solutions.",
  },
];