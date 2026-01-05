"use client";

import React, { useState } from "react";

const LeadForm = () => {
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
    <section className="max-w-6xl mx-auto mt-20 px-6 mb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-pink-600 text-3xl font-bold mb-4">
            Start your journey with RingScale Media
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Let’s bring your ideas to life with tailored strategies, clear
            goals, and measurable growth. Share your requirements and our team
            will connect with you.
          </p>
        </div>


        <div className="bg-white shadow-xl rounded-2xl p-8 border">
          <form className="space-y-5" onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                name="firstName"
                value={formdata.firstName}
                onChange={handleChange}
                required
              />
              <Input
                label="Last Name"
                name="lastName"
                value={formdata.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <Input
              label="Email"
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              required
            />

            <Input
              label="Company Name"
              name="companyName"
              value={formdata.companyName}
              onChange={handleChange}
            />

            <Input
              label="Phone Number"
              name="phone"
              value={formdata.phone}
              onChange={handleChange}
            />

            <div>
              <label className="text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formdata.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="mt-1 w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 outline-none"
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

          
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md font-semibold transition
                ${
                  loading
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-pink-600 text-white hover:bg-pink-700"
                }
              `}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;

const Input = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: any) => (
  <div>
    <label className="text-sm font-medium text-gray-600">
      {label}
      {required && <span className="text-pink-600">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 outline-none"
    />
  </div>
);
