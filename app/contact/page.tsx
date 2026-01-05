"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, Building2, Phone } from "lucide-react";

const Contact = () => {
  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formdata.consent) {
      alert("Please accept Terms & Privacy Policy");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert("✅ Form submitted successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        phone: "",
        message: "",
        consent: false,
      });
    } catch (error: any) {
      alert(error.message || "❌ Failed to submit form");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif font-bold text-center text-gray-900"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-pink-600 text-lg mt-4"
        >
          Let’s build something amazing together
        </motion.p>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-14 backdrop-blur-xl bg-white/70 shadow-2xl border border-pink-100 rounded-3xl p-10"
        >
          <form className="space-y-7" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="First Name"
                name="firstName"
                value={formdata.firstName}
                onChange={handleChange}
                icon={<User size={18} />}
                required
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formdata.lastName}
                onChange={handleChange}
                icon={<User size={18} />}
                required
              />
            </div>

            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={formdata.email}
              onChange={handleChange}
              icon={<Mail size={18} />}
              required
            />

            <InputField
              label="Company Name"
              name="companyName"
              value={formdata.companyName}
              onChange={handleChange}
              icon={<Building2 size={18} />}
            />

            <InputField
              label="Phone Number"
              name="phone"
              value={formdata.phone}
              onChange={handleChange}
              icon={<Phone size={18} />}
            />

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                value={formdata.message}
                onChange={handleChange}
                required
                className="border border-gray-300 bg-white/60 rounded-xl px-4 py-3
                focus:ring-2 focus:ring-pink-400 outline-none transition shadow-sm hover:shadow-md"
              />
            </div>

            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="consent"
                checked={formdata.consent}
                onChange={handleChange}
                className="mt-1 accent-pink-600"
              />
              <span>
                I agree to the{" "}
                <a href="/terms-of-service" className="text-pink-600 underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-and-policy"
                  className="text-pink-600 underline"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg text-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* CALENDLY */}
        <div className="mt-24">
          <h2 className="text-3xl font-serif font-bold text-center mb-6">
            Book a Free Consultation
          </h2>

          <div className="w-full h-screen rounded-3xl overflow-hidden shadow-2xl border border-pink-100">
            <iframe
              src="https://calendly.com/ringscale/30min"
              className="w-full h-full border-0"
              allow="camera; microphone; fullscreen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  //   icon,
  required = false,
}: any) => (
  <div className="flex flex-col">
    <label className="text-sm font-semibold text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      {/* <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span> */}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className="w-full border border-gray-300 bg-white/60 rounded-xl px-4 py-3
        focus:ring-2 focus:ring-pink-400 outline-none transition shadow-sm hover:shadow-md"
      />
    </div>
  </div>
);

export default Contact;
