import { motion } from "framer-motion";
import {
  FaTools,
  FaLaptopCode,
  FaHandshake,
  FaUsers,
  FaBullseye,
  FaComments,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const cards = [
    {
      icon: <FaTools />,
      title: "Expertise & Experience",
      text: "Our team brings deep technical expertise and a proven track record across industries.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Customized Solutions",
      text: "We design solutions tailored to your business goals, not generic templates.",
    },
    {
      icon: <FaBullseye />,
      title: "Commitment to Quality",
      text: "Every product is built with performance, scalability, and long-term value in mind.",
    },
    {
      icon: <FaUsers />,
      title: "Innovative Approach",
      text: "We use modern tools, frameworks, and strategies to keep you ahead of the curve.",
    },
    {
      icon: <FaHandshake />,
      title: "Client-Centric Service",
      text: "Your success is our priority. We collaborate closely at every step.",
    },
    {
      icon: <FaComments />,
      title: "Transparent Communication",
      text: "Clear updates, honest timelines, and open communication—always.",
    },
  ];

  return (
    <section className="relative bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl font-semibold text-slate-900 sm:text-4xl"
        >
          Why <span className="text-indigo-600">Choose Us</span>
        </motion.h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          We combine technology, creativity, and strategy to build digital
          solutions that truly make a difference.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(79,70,229,0.15)",
              }}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 text-xl transition group-hover:bg-indigo-600 group-hover:text-white">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {card.title}
              </h3>

              {/* Text */}
              <p className="text-sm leading-relaxed text-slate-600">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
