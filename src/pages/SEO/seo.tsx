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
    title: "Biznex Solution - A Full-Service SEO Agency India",
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
  }, []);
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        {/* Primary blur background (light mode) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-300/45 blur-3xl" />
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
                  Get SEO Audit
                </a>
                <a
                  href="#content"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Learn More
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
