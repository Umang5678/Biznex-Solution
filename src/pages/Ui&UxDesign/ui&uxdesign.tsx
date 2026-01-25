import React from "react";

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

const deliverables = [
  { title: "Figma File", desc: "Organized pages, components, and styles." },
  { title: "Wireframes", desc: "Low/High fidelity based on project stage." },
  { title: "Prototype", desc: "Clickable flow for testing and approval." },
  { title: "Design System", desc: "Tokens + components for consistency." },
  { title: "Assets", desc: "Icons/images exported and ready for dev." },
  { title: "Specs", desc: "Spacing, sizes, states, and interactions." },
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
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Primary blur background (light mode) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-300/45 blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-cyan-300/45 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-200/35 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
              UI/UX Design • Prototypes • Design Systems
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              UI/UX that looks{" "}
              <span className="bg-gradient-to-r from-indigo-700 via-slate-900 to-slate-700 bg-clip-text text-transparent">
                premium
              </span>{" "}
              and converts better
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We design clean interfaces and smart user flows for websites and
              apps — focused on clarity, usability, and business results.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Book a Design Call
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                See Services
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: "Pixel Perfect", v: "Clean modern UI" },
                { k: "User Flow", v: "Less friction" },
                { k: "Design System", v: "Consistent screens" },
                { k: "Dev Handoff", v: "Fast build" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur"
                >
                  <p className="text-sm font-semibold text-slate-900">{x.k}</p>
                  <p className="mt-1 text-xs text-slate-500">{x.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Design deliverables
                  </p>
                  <p className="text-xs text-slate-500">What you receive</p>
                </div>
                <span className="rounded-xl bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                  Advanced
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {deliverables.map((d) => (
                  <div
                    key={d.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {d.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">{d.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-indigo-50 to-cyan-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Fast iterations
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  We share updates and refine the design quickly based on your
                  feedback.
                </p>
              </div>
            </div>
          </div>
        </div>

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
                  <p className="text-sm font-semibold text-slate-900">{x.t}</p>
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
                  *Section only (UI). Connect form to your backend when needed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiUxDesignPage;
