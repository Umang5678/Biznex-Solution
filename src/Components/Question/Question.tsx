import React, { useState } from "react";

import ConsultantImg from "../../assets/img.png"; // background overlay image
import BgPattern from "../../assets/Backgroundimg.png"; // right-side illustration
import faqImg from "../../assets/seo12.png";

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "What industries does your IT company specialize in serving?",
    a: "We work with startups, SMEs, and enterprises across real estate, fintech, e-commerce, education, healthcare, and service-based businesses.",
  },
  {
    q: "Does your company offer ongoing support and maintenance after project completion?",
    a: "Yes. We provide ongoing support plans, security updates, performance monitoring, bug fixes, and feature enhancements based on your needs.",
  },
  {
    q: "How does your IT consulting process work?",
    a: "We start with discovery, then define scope and roadmap, propose the best tech stack, and deliver with clear milestones and weekly updates.",
  },
  {
    q: "What is the typical timeline for a software development project?",
    a: "Timelines vary by scope. Small websites take ~2–4 weeks, while full products typically take 6–16+ weeks depending on features.",
  },
  {
    q: "What technologies does your development team specialize in?",
    a: "Frontend: React/Next, Tailwind. Backend: Node/Django. Databases: PostgreSQL/MongoDB. Mobile: React Native/Flutter.",
  },
];

const Question: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (i: number) => {
    setOpenFAQ((prev) => (prev === i ? null : i));
  };

  return (
    <>
      {/* ✅ FAQ Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest text-indigo-600">
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
                Frequently Asked Questions
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Biznex’s <span className="text-indigo-500">Informative</span>
                <br />
                FAQ Section
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Explore answers to common queries about our services, helping
                you make informed decisions for your business’s technological
                growth.
              </p>

              {/* Accordion */}
              <div className="mt-10 space-y-4">
                {faqs.map((item, i) => {
                  const isOpen = openFAQ === i;

                  return (
                    <div
                      key={item.q}
                      className="rounded-2xl border border-indigo-200/70 bg-white shadow-sm"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFAQ(i)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className="text-sm font-semibold text-slate-900 sm:text-base">
                          {item.q}
                        </span>

                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition ${
                            isOpen
                              ? "border-indigo-600 bg-indigo-600 text-white"
                              : "border-indigo-200 bg-indigo-50 text-indigo-600"
                          }`}
                          aria-hidden="true"
                        >
                          {/* always the same "+" icon, rotate when open */}
                          <svg
                            viewBox="0 0 24 24"
                            className={`h-5 w-5 transition-transform duration-300 ${
                              isOpen ? "rotate-45" : "rotate-0"
                            }`}
                          >
                            <path
                              fill="currentColor"
                              d="M11 5a1 1 0 1 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5Z"
                            />
                          </svg>
                        </span>
                      </button>

                      {/* Answer */}
                      <div
                        className={`grid overflow-hidden px-5 transition-all duration-300 ${
                          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="min-h-0">
                          <p className="text-sm leading-relaxed text-slate-600">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Image */}
            <div className="mt-6 flex items-center justify-center lg:mt-50 lg:justify-end">
              <img
                src={faqImg}
                alt="FAQ Illustration"
                className="w-full max-w-xl object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Contact / Question Section (Tailwind, responsive, desktop perfect) */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-[#5D59EA] px-6 py-10 text-white shadow-lg sm:px-10 lg:px-14 lg:py-14">
            {/* Background overlay image */}
            <img
              src={ConsultantImg}
              alt=""
              className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[55%] object-cover opacity-90 lg:block"
            />

            {/* content */}
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
              {/* Left */}
              <div className="max-w-xl">
                <span className="inline-flex rounded-full bg-[#14F0C9] px-4 py-2 text-xs font-semibold tracking-widest text-white">
                  CONTACT US
                </span>

                <h2 className="mt-5 text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
                  Have a question? Our team is happy to assist you
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
                  Ask about Infocorpus solution impressive portfolio, pricing,
                  development approach, or anything else. Our Expert Consultants
                  are ready to help!
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button className="rounded-xl bg-[#14F0C9] px-6 py-3 text-sm font-semibold text-white hover:brightness-95">
                    Get In Touch
                  </button>

                  <button className="rounded-xl border border-white/90 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                    View Services
                  </button>
                </div>
              </div>

              {/* Right illustration (mobile + desktop) */}
              <div className="relative z-10 flex justify-center lg:justify-end">
                <img
                  src={BgPattern}
                  alt="Consultant"
                  className="w-full max-w-xs object-contain sm:max-w-sm lg:max-w-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Question;
