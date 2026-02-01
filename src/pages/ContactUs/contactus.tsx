import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  country: string;
  comments: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  country: "",
  comments: "",
};

const ContactUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Contact Us | UByte Solution";
  }, []);

  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("email", form.email);
      formData.append("city", form.city);
      formData.append("country", form.country);
      formData.append("comments", form.comments);

      await fetch(
        "https://script.google.com/macros/s/AKfycbzwpxXiv3hKhgf67_HscjIBojBa7FmvfIu26e1BZUkd_M1USCKX5Xaz-tbLqRQvak9Tpg/exec",
        {
          method: "POST",
          mode: "no-cors", // 🔑 THIS FIXES CORS
          body: formData,
        },
      );

      setSubmitted(true);
      setForm(initialState);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-white px-4 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm font-semibold text-indigo-600 tracking-wide">
            NEED ANY HELP?
          </span>

          <h1 className="mt-3 text-5xl font-bold text-gray-900 leading-tight">
            Get in touch <br /> with us
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            We’re here to help! Whether you have questions, need more
            information, or are ready to start your project — feel free to
            contact us anytime.
          </p>

          {/* Info List */}
          <div className="mt-12 space-y-8">
            {/* Phone */}
            <div className="group flex items-center gap-5">
              <div
                className="
      h-12 w-12 rounded-full 
      bg-indigo-50 
      flex items-center justify-center 
      text-indigo-600
      transition-all duration-300
      group-hover:bg-indigo-100
      group-hover:scale-110
      group-hover:shadow-md
    "
              >
                <FaPhoneAlt className="text-lg" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 transition group-hover:text-indigo-600">
                  Have any question?
                </p>
                <p className="text-gray-600 transition group-hover:text-gray-800">
                  +91 98700 97179
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="group flex items-center gap-5">
              <div
                className="
      h-12 w-12 rounded-full 
      bg-indigo-50 
      flex items-center justify-center 
      text-indigo-600
      transition-all duration-300
      group-hover:bg-indigo-100
      group-hover:scale-110
      group-hover:shadow-md
    "
              >
                <FaEnvelope className="text-lg" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 transition group-hover:text-indigo-600">
                  Write email
                </p>
                <p className="text-gray-600 transition group-hover:text-gray-800">
                  support@kndigitech.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative">
          {/* subtle background blur */}
          <div className="absolute -inset-4 bg-indigo-50 rounded-3xl blur-2xl opacity-50"></div>

          <form
            onSubmit={handleSubmit}
            className="relative bg-white rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] space-y-5"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Feel free to write
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className="h-12 rounded-lg bg-gray-100 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
                className="h-12 rounded-lg bg-gray-100 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                required
                className="h-12 rounded-lg bg-gray-100 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
                className="h-12 rounded-lg bg-gray-100 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
              required
              className="w-full h-12 rounded-lg bg-gray-100 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              name="comments"
              placeholder="Your message"
              rows={5}
              value={form.comments}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-gray-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-center text-green-600 font-medium">
                ✅ Message sent successfully
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
