import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../assets/logo10.png";
import FooterShape from "../../assets/Footerimg.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <img src={FooterShape} alt="shape" className="footer-shape" />
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="Infocorpus Logo" />
            <p>Fueling Your Brand’s Brilliance</p>
          </div>

          <div className="footer-links">
            {[
              {
                title: "Software Engineering",
                items: [
                  "Software Development",
                  "Web Design",
                  "Mobile App Development",
                  "Ui-Ux Design",
                  "SEO Optimization",
                  "Digital Marketing Service",
                ],
              },
              {
                title: "Application Development",
                items: [
                  "Web Design",
                  "Mobile App Development",
                  "Ui-Ux Design",
                  "SEO Optimization",
                  "Digital Marketing Service",
                ],
              },
              {
                title: "Generative AI Solutions",
                items: [
                  "Web Design",
                  "Mobile App Development",
                  "Ui-Ux Design",
                  "SEO Optimization",
                  "Digital Marketing Service",
                ],
              },
              {
                title: "For Company",
                items: [
                  "Web Design",
                  "Mobile App Development",
                  "Ui-Ux Design",
                  "SEO Optimization",
                  "Digital Marketing Service",
                ],
              },
            ].map((column, index) => (
              <div key={index} className="footer-column">
                <h4>{column.title}</h4>
                <ul>
                  {column.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-left">
            <p
              className="pp
            "
            >
              © 2010–2025 Infocorpus solution Private Limited.
            </p>
            <a className="pp2" href="#">
              Privacy Policy
            </a>
            <a className="pp2" href="#">
              Terms of Service
            </a>
          </div>
          <div className="footer-socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
