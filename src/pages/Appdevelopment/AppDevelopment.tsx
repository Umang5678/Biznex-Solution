import React, { useEffect } from "react";
import heroAppImg from "../../../src/assets/app1.png";
import appDevImg from "../../../src/assets/seo11.png";
import appDevImg1 from "../../../src/assets/mob3.png";
import Footer from "../../Components/Footer/Footer";

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
    heading: "India's Leading App Development Company",
    desc: "Biznex Solution is a leading mobile app development company in Ahmedabad specialized in delivering complex and multi-functional mobile apps without any compromise on user interface. We are a team of professional and skilled app developers who are highly passionate and actively engaged in consumer and enterprise level mobile apps. High reliability is our trademark and each development work is carried out with proper planning and through transparent process.",
    subTitle: "Apps that Create Great Customer Experiences",
    subDesc:
      "Biznex Solution is acclaimed for innovative and creative ideas in mobile application development. We develop apps that provide users with new opportunities, increase availability and utilize innovative technologies across devices. Apps are highly necessary for you to increase your workflow, increase orders and thereby increase productivity and revenue.",
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

const steps = [
  {
    step: "01",
    title: "Discovery",
    desc: "Scope, requirements, estimates, roadmap.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Wireframes → UI screens → prototype approval.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Agile sprints with weekly demos & updates.",
  },
  {
    step: "04",
    title: "QA & Launch",
    desc: "Testing, performance checks, store deployment.",
  },
];

const tech = [
  "React Native",
  "Flutter",
  "Kotlin",
  "Swift",
  "Firebase",
  "REST / GraphQL",
  "Push Notifications",
  "Payments (UPI/Card)",
  "Crash Reporting",
  "CI/CD",
];

const MobileDevelopmentPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        {/* Primary blur background (light mode) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-300/50 blur-3xl" />
          <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-cyan-300/50 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* HERO */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
                Mobile App Development • Android • iOS • Cross-Platform
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Mobile apps that feel{" "}
                <span className="bg-gradient-to-r from-indigo-700 via-slate-900 to-slate-700 bg-clip-text text-transparent">
                  fast, modern, and premium
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                We build production-ready mobile apps with clean UI, strong
                architecture, secure APIs, and store-ready deployments —
                designed for growth.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Get Free Consultation
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  View Services
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { k: "Fast Delivery", v: "Agile sprints" },
                  { k: "Clean UI", v: "Modern look" },
                  { k: "Secure", v: "Best practices" },
                  { k: "Scalable", v: "Future-ready" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {x.k}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ RIGHT IMAGE (replaces HERO CARD) */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={appDevImg1} // or heroAppImg
                alt="Mobile App Development"
                className="w-full max-w-2xl object-contain"
                loading="lazy"
              />
            </div>
          </div>

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

          {/* PROCESS */}
          <div className="mt-14">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-10">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Our Process
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Transparent steps from idea to launch — optimized for quality
                and speed.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((p) => (
                  <div
                    key={p.step}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-indigo-700">
                        {p.step}
                      </span>
                      <span className="h-10 w-10 rounded-2xl border border-slate-200 bg-white" />
                    </div>
                    <p className="mt-4 text-base font-semibold text-slate-900">
                      {p.title}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TECH STACK */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Tech Stack
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              We choose the right technology based on performance, budget, and
              timeline.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm text-slate-800 shadow-sm backdrop-blur hover:bg-slate-50 transition"
                >
                  {t}
                </span>
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
