import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";

import WhyChooseUs from "../whychooseus/WhyChooseUs";
import webDesignImg from "../../assets/webimg1.png";
import webDevImg from "../../assets/webimg2.png";
import ecommerceImg from "../../assets/webimg3.png";

const WebsiteDevelopment: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  type WebsiteTypeCard = {
    title: string;
    desc: string;
    icon: React.ReactNode;
  };

  const websiteTypes: WebsiteTypeCard[] = [
    {
      title: "Personal\nWebsites/Blog",
      desc: "Personal blog or websites where peoples share their thoughts, experiences, and interests.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-indigo-500">
          <path
            fill="currentColor"
            d="M4 6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2 0v7h7V6H6Zm10 3h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2h2v2h7v-7h-2V9Z"
          />
        </svg>
      ),
    },
    {
      title: "Landing Page\nWebsite",
      desc: "A web page created for a specific business or promotion. Usually for the promoting a product.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-indigo-500">
          <path
            fill="currentColor"
            d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Zm2 0v14h12V5H6Zm2 3h8v2H8V8Zm0 4h6v2H8v-2Z"
          />
        </svg>
      ),
    },
    {
      title: "Business/Corporate\nWebsite",
      desc: "Business website represents a company or organization. They often contain information.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-indigo-500">
          <path
            fill="currentColor"
            d="M4 21V7a2 2 0 0 1 2-2h4V3h4v2h4a2 2 0 0 1 2 2v14H4Zm2-2h2v-2H6v2Zm0-4h2v-2H6v2Zm0-4h2V9H6v2Zm6 8h2v-2h-2v2Zm0-4h2v-2h-2v2Zm0-4h2V9h-2v2Zm6 8h2v-2h-2v2Zm0-4h2v-2h-2v2Zm0-4h2V9h-2v2Z"
          />
        </svg>
      ),
    },
    {
      title: "E-Commerce\nWebsite",
      desc: "E-commerce website is online stores that facilitate the buying and selling of products and services.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-indigo-500">
          <path
            fill="currentColor"
            d="M7 18a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4ZM6.2 6l.3 2h13.9a1 1 0 0 1 .98 1.2l-1.2 6A2 2 0 0 1 18.24 17H8.12a2 2 0 0 1-1.96-1.6L4.3 4H2V2h3.9a1 1 0 0 1 .98.8L7.1 6H6.2Z"
          />
        </svg>
      ),
    },
  ];

  const webServices = [
    {
      tag: "Service-01",
      title: "Web Designing\nService",
      img: webDesignImg,
    },
    {
      tag: "Service-02",
      title: "Web Development\nService",
      img: webDevImg,
    },
    {
      tag: "Service-03",
      title: "E-Commerce Solutions\nService",
      img: ecommerceImg,
    },
  ];

  const process = [
    {
      title: "1️⃣ Planning",
      desc: "Understanding your goals and defining a clear project roadmap.",
    },
    {
      title: "2️⃣ Design",
      desc: "Crafting intuitive, user-centered, and visually stunning designs.",
    },
    {
      title: "3️⃣ Development",
      desc: "Building responsive, scalable, and optimized websites.",
    },
    {
      title: "4️⃣ Launch & Support",
      desc: "Ensuring a flawless launch with ongoing optimization.",
    },
  ];

  return (
    <div className="bg-white">
      {/* 🌟 HERO */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-cyan-50" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="pointer-events-none absolute top-20 -right-24 h-96 w-96 rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-200/30 blur-3xl" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <motion.p
            className="text-xs font-semibold tracking-widest text-indigo-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Crafting Your Digital Presence
          </motion.p>

          <motion.h1
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Painting Your Ideas into Stunning
            <span className="block">
              <span className="text-indigo-500">Web Development</span> for
              Digital Excellence
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            We turn your ideas into modern, fast, and responsive websites. Our
            team blends creativity with clean engineering so your brand looks
            premium and performs great.
          </motion.p>
        </div>

        {/* Bottom wave */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 110C160 160 320 180 480 140C640 100 800 0 960 40C1120 80 1280 180 1440 130V200H0V110Z"
            fill="white"
          />
          <path
            d="M0 120C180 40 360 30 540 90C720 150 900 190 1080 120C1260 50 1350 60 1440 90"
            stroke="rgba(79, 70, 229, 0.75)"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M0 140C180 80 360 70 540 110C720 150 900 170 1080 130C1260 90 1350 95 1440 110"
            stroke="rgba(99, 102, 241, 0.35)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </section>

      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center">
            <p className="text-xs font-semibold tracking-widest text-indigo-600">
              Elevate Your Online Presence Today
            </p>

            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-4xl">
              Crafting Your Digital Success Story by Our{" "}
              <span className="text-indigo-500">Web Development Services</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webServices.map((s) => (
              <div
                key={s.tag}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-semibold text-slate-500">{s.tag}</p>

                <h3 className="mt-2 whitespace-pre-line text-xl font-bold text-slate-900">
                  {s.title}
                </h3>

                <div className="mt-6 flex justify-center">
                  <img
                    src={s.img}
                    alt={s.tag}
                    className="h-56 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Your existing component */}
      <WhyChooseUs />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest text-indigo-600">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
              Exploring Diverse Web Development
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
            </div>
          </div>

          <h2 className="mt-5 text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Unveiling the Variety in{" "}
            <span className="text-indigo-500">Website Types</span>
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {websiteTypes.map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
                  {x.icon}
                </div>

                <h3 className="mt-6 whitespace-pre-line text-xl font-bold text-slate-900">
                  {x.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {x.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚙️ PROCESS */}
      <section className="relative bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.h2
            className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our <span className="text-indigo-600">Development Process</span>
          </motion.h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
