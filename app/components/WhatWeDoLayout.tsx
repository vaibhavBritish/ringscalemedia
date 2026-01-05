import Image from "next/image"
import React, { useState } from "react"

const WhatWeDoLayout = ({ children }: { children: React.ReactNode }) => {

  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const api = "/api";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${api}/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error:", data.message || "Something went wrong");
        alert(data.message || "Failed to submit form");
        return;
      }

      console.log("Form submitted successfully:", data);
      alert("Form submitted successfully!");

      setformdata({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        phone: "",
        message: ""
      })
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };
  return (
    <div className="w-full">

      <section className="bg-black text-white py-16 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {children}
          </h1>
          <p className="font-semibold italic text-lg md:text-xl">
            Development Services
          </p>
          <Image
            src="/whatwedo/bdr_linebt.png"
            alt="divider"
            width={200}
            height={20}
            className="mt-6"
          />
        </div>
      </section>

      <section className="bg-[#2D2476] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/whatwedo/banner.jpg"
                alt="What We Do"
                width={700}
                height={450}
                className="w-full object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">

                <div className="text-center mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#2D2476]">
                    Free Request Form
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-3">
                    Get A Free Quote
                  </h2>
                  <p className="text-gray-500 mt-3 text-sm sm:text-base">
                    Tell us about your project and we’ll get back to you shortly.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formdata.firstName}
                    className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2D2476]"
                  />

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formdata.lastName}
                    className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2D2476]"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    value={formdata.email}
                    className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2D2476]"
                  />

                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    onChange={handleChange}
                    value={formdata.companyName}
                    className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2D2476]"
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    onChange={handleChange}
                    value={formdata.phone}
                    className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2D2476]"
                  />

                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Your Message"
                    onChange={handleChange}
                    value={formdata.message}
                    className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2D2476]"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#2D2476] text-white font-semibold py-3 sm:py-4 rounded-lg hover:bg-[#241d5e] transition-all duration-300"
                  >
                    Submit Request
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default WhatWeDoLayout
