import React, { useState } from "react";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalMap from "./GlobalMap";

const Contactus = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // VALIDATION FUNCTION
  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";

    // PHONE VALIDATION – Exactly 10 digits only
    if (!/^[0-9]{10}$/.test(form.phone_number)) {
      newErrors.phone_number = "Phone number must be exactly 10 digits";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // No errors → valid
  };

  // SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("https://test.imanglobal.net/api/contacus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", phone_number: "", message: "" });
      } else {
        alert(data?.message || "Something went wrong!");
      }
    } catch (error) {
      alert("Network error!");
    }
  };

  return (
    <>
      <Header />

      {/* TOP BANNER */}
      <section
        className="relative w-full h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/contact.png')" }}
      ></section>

      <section className="w-full">
        <img src="/img/image.png" className="w-full" alt="Banner" />
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
          <div>
            <img src="/img/Needhelp.png" className="rounded-md shadow-lg" />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-3">Need more help?</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Contact us anytime.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* NAME */}
              <div>
                <label className="block text-sm mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="p-[2px] rounded bg-gradient-to-r from-[#37B8E1] to-[#40BD02]">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-white px-4 py-2 rounded outline-none"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="p-[2px] rounded bg-gradient-to-r from-[#37B8E1] to-[#40BD02]">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white px-4 py-2 rounded outline-none"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="p-[2px] rounded bg-gradient-to-r from-[#37B8E1] to-[#40BD02]">
                  <input
                    type="tel"
                    name="phone_number"
                    maxLength="10"
                    value={form.phone_number}
                    onChange={(e) => {
                      // Allow only numbers
                      if (/^[0-9]*$/.test(e.target.value)) handleChange(e);
                    }}
                    placeholder="10 Digit Number"
                    className="w-full bg-white px-4 py-2 rounded outline-none"
                  />
                </div>
                {errors.phone_number && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone_number}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="p-[2px] rounded bg-gradient-to-r from-[#37B8E1] to-[#40BD02]">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message..."
                    className="w-full bg-white px-4 py-2 rounded outline-none h-[80px]"
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="px-6 py-2 text-white font-semibold rounded bg-gradient-to-r from-[#37B8E1] to-[#40BD02] hover:scale-105 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>

      <GlobalMap />
      <Footer />
    </>
  );
};

export default Contactus;
