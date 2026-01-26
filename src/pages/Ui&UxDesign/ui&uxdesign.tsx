import React, { useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI Design",
    desc: "Modern, clean interfaces that match your brand and feel premium on every screen.",
    bullets: [
      "High-fidelity screens",
      "Visual consistency",
      "Responsive layouts",
    ],
  },
  {
    title: "UX Design",
    desc: "User flows that reduce confusion, increase engagement, and improve conversions.",
    bullets: [
      "User journeys",
      "Information architecture",
      "Conversion-focused UX",
    ],
  },
  {
    title: "Wireframes & Prototypes",
    desc: "Clickable prototypes to validate your idea before development starts.",
    bullets: [
      "Low/High-fidelity wireframes",
      "Figma prototypes",
      "Fast iteration",
    ],
  },
  {
    title: "Design Systems",
    desc: "Reusable components and tokens for consistent UI across web and mobile products.",
    bullets: ["Component library", "Typography & colors", "UI guidelines"],
  },
  {
    title: "UX Audit & Improvements",
    desc: "Identify issues in your current product and optimize flow, clarity, and usability.",
    bullets: ["Heuristic review", "Funnel improvements", "Actionable fixes"],
  },
  {
    title: "Developer Handoff",
    desc: "Pixel-perfect specs, assets, and documentation to speed up development.",
    bullets: ["Auto-layout ready", "Exportable assets", "Specs & notes"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "Goals, users, competitors, and requirements.",
  },
  {
    step: "02",
    title: "UX Strategy",
    desc: "User flows, IA, wireframes, and structure.",
  },
  {
    step: "03",
    title: "UI Design",
    desc: "High-fidelity UI with brand styling and components.",
  },
  {
    step: "04",
    title: "Prototype",
    desc: "Clickable prototype for review & validation.",
  },
  {
    step: "05",
    title: "Design System",
    desc: "Reusable components + consistent rules.",
  },
  {
    step: "06",
    title: "Handoff",
    desc: "Specs, assets, and dev-ready documentation.",
  },
];

const focusAreas = [
  {
    title: "Clarity & Usability",
    items: [
      "Simple navigation",
      "Readable typography",
      "Clear CTAs",
      "Reduced friction",
    ],
  },
  {
    title: "Consistency",
    items: [
      "Component reuse",
      "Spacing system",
      "Unified colors",
      "Standard states",
    ],
  },
  {
    title: "Conversion",
    items: [
      "Better funnels",
      "Shorter forms",
      "Stronger CTAs",
      "Trust-building UI",
    ],
  },
  {
    title: "Accessibility",
    items: [
      "Contrast & readability",
      "Touch targets",
      "Keyboard-friendly",
      "Inclusive UX",
    ],
  },
];

const tools = [
  "Figma",
  "FigJam",
  "Design Systems",
  "Auto-Layout",
  "Prototyping",
  "Responsive UI",
  "Component Libraries",
  "Accessibility Checks",
];

const UiUxDesignPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

      <section className="relative overflow-hidden bg-white">
        {/* Primary blur background (light mode) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white blur-3xl" />
          <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-cyan-300/45 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-200/35 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* SERVICES */}
          <div id="services" className="mt-14">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  UI/UX Services
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600">
                  We cover everything from wireframes and prototypes to final UI
                  and developer handoff.
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
                Our Design Process
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                A structured process that ensures clarity, quality, and fast
                execution.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {process.map((p) => (
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

          {/* FOCUS AREAS */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              What We Focus On
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Beyond visuals — we design for usability, conversion, and
              consistency.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map((p) => (
                <div
                  key={p.title}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur"
                >
                  <p className="text-base font-semibold text-slate-900">
                    {p.title}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-50 to-slate-50 p-6 shadow-sm sm:p-10">
              <div className="grid gap-5 lg:grid-cols-3">
                {[
                  {
                    t: "Design System Ready",
                    d: "Reusable components, tokens, and guidelines for consistent UI.",
                  },
                  {
                    t: "Mobile-first & Responsive",
                    d: "Designs that look perfect on mobile, tablet, and desktop.",
                  },
                  {
                    t: "Dev-Friendly Handoff",
                    d: "Specs, assets, and clear notes for faster development.",
                  },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {x.t}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TOOLS */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Tools & Workflow
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              We use industry-standard tools for design, collaboration, and
              handoff.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm text-slate-800 shadow-sm backdrop-blur hover:bg-slate-50 transition"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA / CONTACT (SECTION ONLY) */}
          <div id="contact" className="mt-14">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-50 to-cyan-50 p-6 shadow-sm sm:p-10">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    Want a premium UI/UX for your product?
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Share your product idea or current design — we’ll suggest
                    improvements and a clear design plan.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="mailto:hello@yourcompany.com"
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                      Email Us
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                    >
                      WhatsApp / Call
                    </a>
                  </div>
                </div>

                {/* Form UI only */}
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs text-slate-600">Name</label>
                      <input
                        className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-600">Phone</label>
                      <input
                        className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs text-slate-600">
                        Project Details
                      </label>
                      <textarea
                        rows={4}
                        className="mt-1 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        placeholder="Product type, goals, screens needed, timeline..."
                      />
                    </div>
                  </div>

                  <button className="mt-5 w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                    Request Design Quote (UI)
                  </button>

                  <p className="mt-3 text-xs text-slate-500">
                    *Section only (UI). Connect form to your backend when
                    needed.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UiUxDesignPage;
