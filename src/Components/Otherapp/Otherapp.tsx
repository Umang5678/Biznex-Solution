import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { ShieldCheck } from "lucide-react"; // ✅ nice icon for bullets
import { useNavigate } from "react-router-dom";
import App1 from "../../assets/ui-ux-design.jpg";
import App2 from "../../assets/mob1.png";
import App3 from "../../assets/godud.png";
import App4 from "../../assets/potrone.png";

// ✅ Add your about image here (illustration like screenshot)
import aboutImg from "../../assets/vision.webp"; // change this

type Item = {
  badge: string;
  title: string;
  desc: string;
  img: string;
  route: string;
};

const items: Item[] = [
  {
    badge: "WEBSITE DESIGN",
    title: "Modern Website Design That Converts Visitors",
    desc: "Clean, responsive UI/UX with fast performance—built to showcase your brand and drive leads or sales.",
    img: App1,
    route: "/website-development",
  },
  {
    badge: "MOBLIE APP DEVELOPMENT",
    title: "High-Performance Mobile Apps for iOS & Android",
    desc: "Custom mobile apps with smooth UX, secure APIs, and scalable architecture—ready for growth and updates.",
    img: App2,
    route: "/app-development",
  },
  {
    badge: "SEARCH ENGINE OPTIMIZATION",
    title: "SEO That Improves Rankings and Organic Traffic",
    desc: "On-page, technical SEO, and content strategy to boost visibility, rankings, and qualified leads over time.",
    img: App3,
    route: "/seo",
  },
  {
    badge: "DIGITAL MARKETING",
    title: "Digital Marketing That Generates Quality Leads",
    desc: "Targeted ads, social campaigns, and analytics-driven strategy to increase reach, engagement, and conversions.",
    img: App4,
    route: "/website-design",
  },
];

const highlights = [
  "Elevate Your Business with Digital Innovation.",
  "Crafting Digital Experiences With Expert Website Development",
  "Transforming Ideas into Seamless Software Solutions.",
];

const OtherApp: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F6F8FF]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ✅ YOUR EXISTING GRID SECTION */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((x) => (
            <article
              key={x.badge}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* IMAGE */}
              <div className="relative">
                <span className="absolute left-4 top-4 z-10 inline-flex rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold tracking-widest text-slate-700 shadow-sm">
                  {x.badge}
                </span>

                <div className="relative h-56 w-full overflow-hidden sm:h-64 lg:h-72">
                  <img
                    src={x.img}
                    alt={x.badge}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/0" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative px-5 pb-16 pt-5 sm:px-6">
                <h4 className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
                  {x.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {x.desc}
                </p>

                {/* CTA BUTTON */}
                <button
                  type="button"
                  onClick={() => navigate(x.route)}
                  className="
                    absolute bottom-5
                    h-12 w-12 rounded-full bg-indigo-500 text-white shadow-sm
                    grid place-items-center transition hover:brightness-95
                    md:right-5
                    max-md:left-1/2 max-md:-translate-x-1/2
                  "
                  aria-label="Open"
                >
                  <GrFormNextLink className="h-8 w-8" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* ✅ ABOUT SECTION (like screenshot) */}
        <div className="grid items-center mt-5 gap-10 lg:grid-cols-2">
          {/* Left image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={aboutImg}
              alt="About Illustration"
              className="w-full max-w-xl object-contain"
              loading="lazy"
            />
          </div>

          {/* Right content */}
          <div className="lg:pl-4">
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest text-indigo-600">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
              About Biznex Solution
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Discover the{" "}
              <span className="text-indigo-500">Story and Vision</span> of
              Biznex
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Welcome to Biznex Solution, your one-stop solution for IT
              services. From attractive website design and development to
              powerful marketing strategies and SEO solutions, we help
              businesses succeed in the digital world.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              We specialize in delivering cutting-edge solutions that elevate
              businesses, setting new benchmarks in innovation and reliability.
            </p>

            {/* ✅ Highlight pills */}
            <div className="mt-6 space-y-3">
              {highlights.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 rounded-2xl bg-indigo-50/70 px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-indigo-100"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white ring-1 ring-indigo-100">
                    <ShieldCheck className="h-5 w-5 text-indigo-600" />
                  </span>
                  <span className="font-medium">{t}</span>
                </div>
              ))}
            </div>

            {/* ✅ Button */}
            <button
              type="button"
              onClick={() => navigate("/about-us")}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-indigo-50"
            >
              View more about us <GrFormNextLink className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherApp;
