import React, { useEffect } from "react";
import onPageImg from "../../../src/assets/11.png";
import auditImg from "../../../src/assets/12.png";
import updatesImg from "../../../src/assets/13.png";
import competitiveImg from "../../../src/assets/14.png";
import trackImg from "../../../src/assets/11.png";
import linkImg from "../../../src/assets/12.png";
import seoHeroImg from "../../../src/assets/seo11.png";
import seoAgencyImg from "../../../src/assets/seo12.png";
import seoTopImg from "../../../src/assets/seobedge.png"; // apni image ka path
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";

const reasons = [
  "Result-driven SEO strategies and proven ranking improvements",
  "Trusted by businesses for long-term organic growth",
  "Expert team with technical SEO + content + link building",
  "100% transparent reporting and performance tracking",
  "Custom plans for local SEO, eCommerce SEO, and enterprise SEO",
];

const sections = [
  {
    title: "What is SEO / Search Engine Optimization?",
    desc: "SEO (Search Engine Optimization) is the process of improving your website visibility on search engines like Google. It helps your pages rank higher, bring more relevant traffic, and convert visitors into customers through content, technical improvements, and authority building.",
    bullets: [
      "Improve rankings for business keywords",
      "Increase organic traffic & leads",
      "Build trust with stronger online presence",
    ],
    img: seoHeroImg,
  },
  {
    title: "Ubyte Solution - A Full-Service SEO Agency India",
    desc: "When people search online, they trust top results. SEO helps your business appear at the right time for the right audience. It reduces dependency on paid ads and builds sustainable growth by continuously bringing traffic and enquiries.",
    bullets: [
      "Long-term growth with low cost per lead",
      "Better visibility than competitors",
      "Higher credibility and improved conversions",
    ],
    img: seoAgencyImg,
  },
];

// ✅ NEW: Services section data (like screenshot)
const services = [
  { title: "On-Page SEO Implementation", img: onPageImg },
  { title: "Website SEO Audit", img: auditImg },
  { title: "Implement New Updates", img: updatesImg },
  { title: "Competitive SEO Search", img: competitiveImg },
  { title: "Track, Analyse and Report", img: trackImg },
  { title: "High-Quality Link Building", img: linkImg },
];

const SeoOptimizationPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "SEO Services -UByte Solution";
  }, []);
  return (
    <>
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
            Driving Organic Growth through
            <span className="block">
              <span className="text-indigo-500">SEO Optimization</span> that
              Delivers Results
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            We help brands grow faster with data-driven SEO strategies.
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
      <section className="relative overflow-hidden bg-white">
        {/* Primary blur background (light mode) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-cyan-300/45 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-200/35 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* TOP: Reasons + Circular Badge (like screenshot) */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Top reasons that make us a{" "}
                <span className="text-slate-900">SEO Company</span>
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                We help businesses grow with modern SEO strategies and
                measurable results.
              </p>

              <ul className="mt-6 space-y-3">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed text-slate-700">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  INQUIRY NOW
                </a>
              </div>
            </div>

            {/* Right side Image (badge removed) */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={seoTopImg}
                alt="SEO Illustration"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* ✅ NEW SECTION: What We Do Best (like screenshot) */}
          <div className="mt-16">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                What We Do Best
              </h2>
              <p className="mt-1 text-sm font-semibold text-slate-600">
                Discover Our Services
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group rounded-3xl border border-slate-200 bg-white/90 p-3 sm:p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="mx-auto w-full max-w-none h-28 sm:h-40 object-contain"
                    loading="lazy"
                  />

                  <h3 className="mt-3 text-center text-xs sm:text-lg font-bold text-slate-900">
                    {s.title}
                  </h3>

                  <div className="mt-3 flex justify-center">
                    <span className="h-1 w-10 rounded-full bg-indigo-600/70 opacity-0 transition group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTENT BLOCKS */}
          <div id="content" className="mt-14">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-widest text-indigo-700">
                #1 SEO COMPANY
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                SEO Company (Optimization)
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
                Bring more traffic to your website with proven strategies, clean
                technical setup, and high-quality content that ranks.
              </p>
            </div>

            <div className="mt-10 space-y-10">
              {sections.map((sec, i) => (
                <div
                  key={sec.title}
                  className="grid gap-6 rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur lg:grid-cols-2 lg:items-center sm:p-8"
                >
                  {/* ✅ Image side (like screenshot) */}
                  <div
                    className={`${i % 2 === 1 ? "lg:order-2" : ""} flex justify-center`}
                  >
                    <img
                      src={sec.img}
                      alt={sec.title}
                      className="w-full max-w-md object-contain sm:max-w-lg lg:max-w-xl"
                      loading="lazy"
                    />
                  </div>

                  {/* text side */}
                  <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                      {sec.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {sec.desc}
                    </p>

                    <ul className="mt-5 space-y-2 text-sm text-slate-700">
                      {sec.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SeoOptimizationPage;
