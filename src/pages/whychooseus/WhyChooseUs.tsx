import React from "react";
import "./WhyChooseUs.css";
import { motion } from "framer-motion";
import {
  FaTools,
  FaLaptopCode,
  FaHandshake,
  FaUsers,
  FaBullseye,
  FaComments,
} from "react-icons/fa";

const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      icon: <FaTools />,
      title: "Expertise and Experience",
      text: "Our team's deep expertise and proven track record guarantee solutions that meet your industry’s specific needs.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Customized Solutions",
      text: "We tailor our services to align with your unique business goals, offering personalized solutions for every client.",
    },
    {
      icon: <FaBullseye />,
      title: "Commitment to Quality",
      text: "Quality is our priority, ensuring our solutions exceed standards and deliver lasting value.",
    },
    {
      icon: <FaUsers />,
      title: "Innovative Approach",
      text: "We employ cutting-edge technologies and innovative strategies to keep you ahead in a fast-evolving market.",
    },
    {
      icon: <FaHandshake />,
      title: "Client-Centric Service",
      text: "Your needs lead our approach, with dedicated service designed to achieve your business objectives.",
    },
    {
      icon: <FaComments />,
      title: "Transparent Communication",
      text: "Clear, open communication ensures you’re informed and engaged throughout our partnership.",
    },
  ];

  return (
    <section className="why-choose-section">
      <motion.h2
        className="why-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why <span>Choose Us</span>
      </motion.h2>

      <div className="why-grid">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="why-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -8,
              boxShadow: "0 8px 25px rgba(0, 114, 255, 0.15)",
            }}
          >
            <div className="why-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
