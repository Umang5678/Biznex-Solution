import { motion, type Variants } from "framer-motion";
import {
  Clock3,
  Zap,
  Sparkles,
  Headset,
  ShieldCheck,
  Users,
} from "lucide-react";
import Footer from "../../Components/Footer/Footer";
import aboutImg from "../../assets/about-us.webp"; // change your image
import { CheckCircle2, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const wrap: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const item: Variants = {
  hidden: { opacity: 0, x: 12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FEATURES = [
  {
    title: "Time Savings",
    desc: "Efficient workflows and smart automation that save hours every week.",
    Icon: Clock3,
  },
  {
    title: "Enhanced Productivity",
    desc: "Fast, scalable solutions that keep your team focused on what matters.",
    Icon: Zap,
  },
  {
    title: "User-Friendly Solutions",
    desc: "Clean UI/UX built for real users with intuitive navigation and flows.",
    Icon: Sparkles,
  },
  {
    title: "24/7 Support",
    desc: "We’re available when you need help—quick responses and clear fixes.",
    Icon: Headset,
  },
  // optional extra cards
  {
    title: "Secure & Reliable",
    desc: "Best practices for security, performance, and stability.",
    Icon: ShieldCheck,
  },
  {
    title: "Client First",
    desc: "Clear communication, fast iterations, and on-time delivery.",
    Icon: Users,
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute -bottom-40 left-10 h-[380px] w-[380px] rounded-full bg-sky-500/10 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
            {/* Left */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" />
                About Our Company
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
              >
                Unveiling the Story Behind{" "}
                <span className="text-indigo-600">Biznex Solution</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base"
              >
                We build modern websites, mobile apps, SEO, and branding that
                helps businesses grow faster.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap gap-3"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                >
                  Contact Us Today →
                </a>
              </motion.div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.35 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-sky-50 shadow-sm">
                <img
                  src={aboutImg}
                  alt="About illustration"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="values"
          className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="mx-auto mt-2 max-w-4xl text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              Commitment to Making Your Everyday Living Effortless
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base"
            >
              Reliable solutions with strong UI/UX, performance, and support.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURES.map(({ title, desc, Icon }) => (
              <motion.div
                key={title}
                variants={card}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600/10">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {desc}
                </p>
                <div className="mt-5 h-1 w-10 rounded-full bg-indigo-600/20 transition group-hover:w-14 group-hover:bg-indigo-600/40" />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CONTACT */}
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <motion.div
            variants={wrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-slate-50 to-sky-50 p-6 shadow-sm sm:p-10"
          >
            {/* soft glow blobs */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />

            <div className="grid items-center gap-8 lg:grid-cols-2">
              {/* Left text */}
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs font-semibold text-indigo-700 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Contact
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-3xl">
                  Reach out us for inquiries, partnerships, and exceptional
                  solutions.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Tell us what you want to build—website, app, branding, or
                  SEO—and we’ll respond with the best approach.
                </p>
              </div>

              {/* Right bullet pills */}
              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                className="space-y-3"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.12 } },
                }}
              >
                {[
                  "Elevate your business with digital innovation.",
                  "Crafting digital experiences with expert website development.",
                  "Efficiency and security in one package.",
                ].map((text) => (
                  <motion.li
                    key={text}
                    variants={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600/10">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                    </span>
                    <span className="text-sm font-medium text-slate-800">
                      {text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Center button (like screenshot) */}
            <div className="mt-8 flex justify-center">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              >
                Contact Us Today
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
