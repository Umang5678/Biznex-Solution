import React, { useState, useEffect } from "react";

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
    <section className="min-h-screen bg-gray-200  px-4 py-16 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Send us your questions or concerns and we’ll get back to you
            shortly.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full h-11 rounded-lg border border-gray-300 px-3 text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full h-11 rounded-lg border border-gray-300 px-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full h-11 rounded-lg border border-gray-300 px-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* City */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full h-11 rounded-lg border border-gray-300 px-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Country */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full h-11 rounded-lg border border-gray-300 px-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Comments */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Comments
              </label>
              <textarea
                name="comments"
                value={form.comments}
                onChange={handleChange}
                rows={5}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-11 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              send message
            </button>

            {submitted && (
              <p className="text-center text-sm text-green-600 font-medium">
                ✅ Thanks! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
