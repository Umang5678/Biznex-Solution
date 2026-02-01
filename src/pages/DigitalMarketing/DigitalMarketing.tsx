// import { motion, type Variants } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa";
// import {
//   FaChartLine,
//   FaBullhorn,
//   FaUsers,
//   FaLightbulb,
//   FaDollarSign,
//   FaShieldAlt,
// } from "react-icons/fa";

// import digitalMarketingHero from "../../assets/digital-marketing-hero.png";
// import seoImg from "../../assets/seo.png";
// import ppcImg from "../../assets/ppc.png";
// import socialImg from "../../assets/social.png";
// import contentImg from "../../assets/content.png";
// import emailImg from "../../assets/email.png";

// /* ------------------ Animations ------------------ */
// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const stagger: Variants = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.15 } },
// };

// const cardAnim: Variants = {
//   hidden: { opacity: 0, y: 20, scale: 0.98 },
//   show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
// };

// /* ------------------ Data ------------------ */
// const services = [
//   {
//     title: "Search Engine Optimization (SEO)",
//     img: seoImg,
//     desc: "Improve visibility and rank higher on search engines.",
//     bullets: [
//       "On-page SEO",
//       "Technical SEO",
//       "Local SEO",
//       "Keyword research",
//       "Content optimization",
//     ],
//   },
//   {
//     title: "Social Media Marketing (SMM)",
//     img: socialImg,
//     desc: "Engage users and grow brand presence on social platforms.",
//     bullets: [
//       "Facebook & Instagram",
//       "Content creation",
//       "Community management",
//       "Paid ads",
//     ],
//   },
//   {
//     title: "Pay-Per-Click Advertising (PPC)",
//     img: ppcImg,
//     desc: "High-ROI paid campaigns for quick conversions.",
//     bullets: ["Google Ads", "Display Ads", "Remarketing", "Tracking"],
//   },
//   {
//     title: "Content Marketing",
//     img: contentImg,
//     desc: "Content that educates, engages, and converts.",
//     bullets: ["Blog writing", "Landing pages", "SEO content", "Copywriting"],
//   },
//   {
//     title: "Email Marketing",
//     img: emailImg,
//     desc: "Personalized campaigns that nurture leads.",
//     bullets: ["Automation", "Newsletters", "Lead nurturing"],
//   },
// ];

// const whyChooseCards = [
//   {
//     icon: <FaChartLine />,
//     title: "Data-Driven Strategies",
//     text: "Analytics-based campaigns that maximize ROI.",
//   },
//   {
//     icon: <FaBullhorn />,
//     title: "Multi-Channel Marketing",
//     text: "SEO, ads, social, email — all covered.",
//   },
//   {
//     icon: <FaUsers />,
//     title: "Audience Focused",
//     text: "Messaging tailored to your ideal customers.",
//   },
//   {
//     icon: <FaLightbulb />,
//     title: "Creative Campaigns",
//     text: "Innovative ideas that stand out.",
//   },
//   {
//     icon: <FaDollarSign />,
//     title: "ROI Oriented",
//     text: "Every campaign is performance-focused.",
//   },
//   {
//     icon: <FaShieldAlt />,
//     title: "Transparent Reporting",
//     text: "Clear reports and measurable outcomes.",
//   },
// ];

// const faqs = [
//   {
//     q: "How long does digital marketing take to show results?",
//     a: "SEO usually takes 3–6 months, while paid ads can show results within weeks.",
//   },
//   {
//     q: "Do you provide monthly reports?",
//     a: "Yes, we provide detailed performance and ROI reports.",
//   },
//   {
//     q: "Can you handle small businesses?",
//     a: "Absolutely! We work with startups, SMEs, and enterprises.",
//   },
// ];

// /* ------------------ Component ------------------ */
// const DigitalMarketing: React.FC = () => {
//   return (
//     <motion.div
//       initial="hidden"
//       animate="show"
//       variants={stagger}
//       className="bg-white overflow-hidden"
//     >
//       {/* Hero */}
//       <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
//         <motion.div variants={fadeUp}>
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
//             Data-Driven Digital{" "}
//             <span className="bg-gradient-to-r from-indigo-600 to-slate-900 bg-clip-text text-transparent">
//               Marketing Growth
//             </span>
//           </h1>
//           <p className="mt-4 text-lg text-slate-700">
//             SEO, Ads, Social & Email — all in one growth engine.
//           </p>
//           <Link
//             to="/contact-us"
//             className="inline-block mt-6 rounded-2xl border border-indigo-600 px-6 py-3 text-indigo-600 font-semibold hover:bg-indigo-50"
//           >
//             Request a Quote
//           </Link>
//         </motion.div>

//         <motion.img
//           variants={fadeUp}
//           src={digitalMarketingHero}
//           alt="Digital Marketing"
//           className="w-full max-w-lg mx-auto"
//         />
//       </section>

//       {/* Services */}
//       <section className="max-w-7xl mx-auto px-4 py-14">
//         <motion.h2 variants={fadeUp} className="text-3xl font-extrabold mb-8">
//           Our <span className="text-indigo-600">Services</span>
//         </motion.h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((s) => (
//             <motion.div
//               key={s.title}
//               variants={cardAnim}
//               className="rounded-3xl border bg-white/40 backdrop-blur-lg p-6 shadow-xl"
//             >
//               <img src={s.img} alt={s.title} className="h-36 mx-auto mb-4" />
//               <h3 className="text-xl font-bold">{s.title}</h3>
//               <p className="text-sm text-slate-700 mt-2">{s.desc}</p>
//               <ul className="mt-4 space-y-1 text-sm">
//                 {s.bullets.map((b) => (
//                   <li key={b}>• {b}</li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="max-w-7xl mx-auto px-4 py-14">
//         <motion.h2 variants={fadeUp} className="text-3xl font-extrabold mb-8">
//           Why <span className="text-indigo-600">Choose Us</span>
//         </motion.h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {whyChooseCards.map((c, i) => (
//             <motion.div
//               key={i}
//               variants={cardAnim}
//               whileHover={{ y: -8 }}
//               className="rounded-3xl bg-white/40 backdrop-blur-lg p-6 shadow-lg"
//             >
//               <div className="text-indigo-600 text-3xl mb-3">{c.icon}</div>
//               <h3 className="font-bold">{c.title}</h3>
//               <p className="text-sm text-slate-700 mt-2">{c.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="max-w-4xl mx-auto px-4 py-14">
//         <motion.h2 variants={fadeUp} className="text-3xl font-extrabold mb-6">
//           Frequently Asked <span className="text-indigo-600">Questions</span>
//         </motion.h2>

//         <div className="space-y-4">
//           {faqs.map((f, i) => (
//             <motion.div
//               key={i}
//               variants={cardAnim}
//               className="rounded-2xl border p-4"
//             >
//               <h4 className="font-semibold">{f.q}</h4>
//               <p className="text-sm text-slate-700 mt-2">{f.a}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="text-center py-14">
//         <h2 className="text-3xl font-extrabold mb-6">
//           Ready to <span className="text-indigo-600">Grow Online?</span>
//         </h2>
//         <Link
//           to="/contact-us"
//           className="rounded-2xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700"
//         >
//           Get Free Audit
//         </Link>
//       </section>

//       {/* Back */}
//       <div className="max-w-7xl mx-auto px-4 mb-20">
//         <Link to="/services" className="flex items-center text-indigo-600">
//           <FaArrowLeft className="mr-2" /> Back to Services
//         </Link>
//       </div>
//     </motion.div>
//   );
// };

// export default DigitalMarketing;

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  FaChartLine,
  FaBullhorn,
  FaUsers,
  FaLightbulb,
  FaDollarSign,
  FaShieldAlt,
} from "react-icons/fa";

import digitalMarketingHero from "../../assets/digital-marketing-hero.png";
import seoImg from "../../assets/seo.png";
import ppcImg from "../../assets/ppc.png";
import socialImg from "../../assets/social.png";
import contentImg from "../../assets/content.png";
import emailImg from "../../assets/email.png";

/* ================= Animations ================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardAnim: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= Data ================= */
const services = [
  {
    title: "Search Engine Optimization (SEO)",
    img: seoImg,
    desc: "Improve visibility, drive organic traffic, and rank higher on search engines.",
    bullets: [
      "On-page SEO",
      "Technical SEO",
      "Local SEO",
      "Keyword research",
      "Content optimization",
    ],
  },
  {
    title: "Social Media Marketing (SMM)",
    img: socialImg,
    desc: "Engage your audience and grow brand loyalty across social platforms.",
    bullets: [
      "Facebook & Instagram",
      "Content creation",
      "Community management",
      "Paid ads",
    ],
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    img: ppcImg,
    desc: "High-ROI paid campaigns that attract and convert customers fast.",
    bullets: [
      "Google Ads",
      "Display Ads",
      "Remarketing",
      "Conversion tracking",
    ],
  },
  {
    title: "Content Marketing",
    img: contentImg,
    desc: "Content that educates, engages, and converts your audience.",
    bullets: ["Blog writing", "Landing pages", "SEO content", "Copywriting"],
  },
  {
    title: "Email Marketing",
    img: emailImg,
    desc: "Personalized campaigns to nurture leads and retain customers.",
    bullets: ["Automation", "Newsletter design", "Lead nurturing"],
  },
];

const whyChooseCards = [
  {
    icon: <FaChartLine />,
    title: "Data-Driven Strategies",
    text: "Analytics-powered campaigns focused on measurable growth.",
  },
  {
    icon: <FaBullhorn />,
    title: "Multi-Channel Marketing",
    text: "SEO, ads, social media, and email — all in one strategy.",
  },
  {
    icon: <FaUsers />,
    title: "Audience-Focused",
    text: "We craft messaging that connects with your ideal customers.",
  },
  {
    icon: <FaLightbulb />,
    title: "Creative Campaigns",
    text: "Innovative ideas that stand out in crowded markets.",
  },
  {
    icon: <FaDollarSign />,
    title: "ROI-Oriented",
    text: "Every campaign is designed to maximize your return.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Transparent Reporting",
    text: "Clear performance reports with actionable insights.",
  },
];

const faqs = [
  {
    q: "How long does digital marketing take to show results?",
    a: "SEO typically takes 3–6 months, while paid ads can deliver results within weeks.",
  },
  {
    q: "Do you provide monthly reports?",
    a: "Yes, we provide detailed monthly performance and ROI reports.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Absolutely! We work with startups, SMEs, and enterprises.",
  },
];

/* ================= Component ================= */
const DigitalMarketing: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={stagger}
      className="bg-white overflow-hidden"
    >
      {/* ========== Hero Section ========== */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeUp}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Data-Driven Digital{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-slate-900 bg-clip-text text-transparent">
              Marketing Growth
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            SEO, Ads, Social & Email — all in one powerful growth engine.
          </p>
          <Link
            to="/contact-us"
            className="inline-block mt-6 rounded-2xl border border-indigo-600 px-6 py-3 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
          >
            Request a Quote
          </Link>
        </motion.div>

        <motion.img
          variants={fadeUp}
          src={digitalMarketingHero}
          alt="Digital Marketing"
          className="w-full max-w-lg mx-auto"
        />
      </section>

      {/* ========== Services ========== */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <motion.h2 variants={fadeUp} className="text-3xl font-extrabold mb-8">
          Our <span className="text-indigo-600">Services</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardAnim}
              className="rounded-3xl border bg-white/40 backdrop-blur-lg p-6 shadow-xl"
            >
              <img src={s.img} alt={s.title} className="h-36 mx-auto mb-4" />
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-sm text-slate-700 mt-2">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== Why Choose Us ========== */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <motion.h2 variants={fadeUp} className="text-3xl font-extrabold mb-8">
          Why <span className="text-indigo-600">Choose Us</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseCards.map((c, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white/40 backdrop-blur-lg p-6 shadow-lg"
            >
              <div className="text-indigo-600 text-3xl mb-3">{c.icon}</div>
              <h3 className="font-bold">{c.title}</h3>
              <p className="text-sm text-slate-700 mt-2">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <motion.h2 variants={fadeUp} className="text-3xl font-extrabold mb-6">
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              className="rounded-2xl border p-4"
            >
              <h4 className="font-semibold">{f.q}</h4>
              <p className="text-sm text-slate-700 mt-2">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="text-center py-14">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to <span className="text-indigo-600">Grow Online?</span>
        </h2>
        <Link
          to="/contact-us"
          className="rounded-2xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
        >
          Get Free Audit
        </Link>
      </section>

      {/* ========== Back Link ========== */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <Link to="/services" className="flex items-center text-indigo-600">
          <FaArrowLeft className="mr-2" />
          Back to Services
        </Link>
      </div>
    </motion.div>
  );
};

export default DigitalMarketing;
