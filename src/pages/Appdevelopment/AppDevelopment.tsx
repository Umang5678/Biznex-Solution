import React, { useEffect } from "react";
import heroAppImg from "../../../src/assets/app1.png";
import appDevImg from "../../../src/assets/seo11.png";
// import appDevImg1 from "../../../src/assets/mob3.png";
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";

const services = [
  {
    title: "Android Development",
    desc: "High-performance Android apps with clean UI, smooth UX, and scalable architecture.",
    bullets: ["Kotlin / Jetpack", "Material UI", "Play Store ready"],
  },
  {
    title: "iOS Development",
    desc: "Premium iOS apps optimized for performance, security, and Apple guidelines.",
    bullets: ["Swift / SwiftUI", "App Store launch", "Polished animations"],
  },
  {
    title: "Cross-Platform Apps",
    desc: "Faster delivery with a shared codebase and consistent UI across devices.",
    bullets: ["React Native / Flutter", "Lower cost", "Faster MVP"],
  },
  {
    title: "UI/UX & Prototyping",
    desc: "Modern interfaces and user flows that improve engagement and conversion.",
    bullets: ["Figma designs", "Design system", "Clickable prototype"],
  },
  {
    title: "Backend & Admin Panel",
    desc: "Secure APIs, databases, dashboards, roles, and deployments for your app.",
    bullets: ["Node/Django APIs", "PostgreSQL", "Role-based access"],
  },
  {
    title: "Testing & Maintenance",
    desc: "Quality checks, stable releases, crash fixes, updates, and support plans.",
    bullets: ["QA testing", "Monitoring-ready", "Monthly support"],
  },
];
const infoSections = [
  {
    heading: "Build, Launch & Grow with Expert App Development",
    desc: "Our mobile team builds mobile apps for every user, every platform, and every industry. No matter under which niche your project falls, with the help of our experienced mobile app developers, we can deliver you with robust mobile application solutions. Ubyte Solution holds the best resources with a rare combination of rich industry experience and unparalleled expertise to develop native Android, iOS, and Cross-platform mobile apps..",
    subTitle: "Apps that Create Great Customer Experiences",
    subDesc:
      "Ubyte Solution is acclaimed for innovative and creative ideas in mobile application development. We develop apps that provide users with new opportunities, increase availability and utilize innovative technologies across devices. Apps are highly necessary for you to increase your workflow, increase orders and thereby increase productivity and revenue.",
    img: heroAppImg,
    reverse: false,
  },
  {
    heading: "Android / iOS App Development",
    desc: "We take pride in our android app development in Ahmedabad team as they are highly efficient at developing for Android devices that include phones, tablets and phablets. We also develop iPhone apps and help you come up with an all-inclusive range of iOS app development for all types of business solutions.",
    subDesc:
      "Are you looking for a product driven app at the enterprise level? We promise beautiful, functional experience for your users. At WIT Solution, we want to help you create mobile apps that have the potential to change the world.",
    img: appDevImg,
    reverse: true,
  },
];

const process = [
  {
    title: "Reserch",
    desc: "Idea, Consultant, Research, Goal Defination & Requirement Gathering",
  },
  {
    title: " Design",
    desc: "System Architecture Design, Wireframing, UI/UX Designing & Prototyping",
  },
  {
    title: " Development",
    desc: "Building responsive, scalable, and optimized websites.",
  },
  {
    title: "Testing",
    desc: "Quality Assurance, Trouble shooting & Testing",
  },
  {
    title: "Deployment",
    desc: "Live & Beta Live",
  },
  {
    title: "Maintenence",
    desc: "Monitoring, Feedback, Analysis & Complete Support",
  },
];

const MobileDevelopmentPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "App Development Services -UByte Solution";
  }, []);
  return (
    <>
      <section className="relative  bg-white">
        {/* Primary blur background (light mode) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-300/50 blur-3xl" />
          <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-cyan-300/50 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl" />
        </div>

        <section className="relative overflow-hidden">
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
              Building Native & Cross Platform
              <span className="block">
                <span className="text-indigo-500">Moblie Application</span> for
                Digital Excellence
              </span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              We bring revolution to reality. Transforming your custom business
              ideas into an innovative next-gen web app in our forte.
            </motion.p>
          </div>
          {/* Bottom wave */}s
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
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* ✅ Screenshot-like Two Blocks (Text + Image) */}
          <div className="mt-14 space-y-14">
            {infoSections.map((sec) => (
              <div
                key={sec.heading}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  sec.reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text */}
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    {sec.heading}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base text-justify">
                    {sec.desc}
                  </p>

                  {sec.subTitle && (
                    <h3 className="mt-6 text-xl font-bold text-slate-900 sm:text-2xl">
                      {sec.subTitle}
                    </h3>
                  )}

                  {sec.subDesc && (
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base text-justify">
                      {sec.subDesc}
                    </p>
                  )}
                </div>

                {/* Image (PURE) */}
                <div className="flex justify-center">
                  <img
                    src={sec.img}
                    alt={sec.heading}
                    className="w-full max-w-xl object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* SERVICES */}
          <div id="services" className="mt-14">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Mobile Development Services
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600">
                  End-to-end mobile development for startups and businesses —
                  design, build, launch, and support.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm hover:shadow-md transition backdrop-blur"
                >
                  <p className="text-lg font-semibold text-slate-900">
                    {s.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ⚙️ PROCESS */}

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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MobileDevelopmentPage;
