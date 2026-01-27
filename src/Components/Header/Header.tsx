import React, { useState } from "react";
import "./Header.css";
import Frame from "../../assets/logo7.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <img src={Frame} alt="Infocorpus Solutions" />
        </div>

        {/* Mobile menu toggle */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
        </button>

        {/* Navigation */}
        <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              {/* Clickable main link */}
              <Link
                to="/services"
                className="dropdown-toggle"
                onClick={() => {
                  setMenuOpen(false);
                  setServicesOpen(false);
                }}
              >
                Services ▾
              </Link>

              {/* Dropdown items */}
              {servicesOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/website-development"
                      onClick={() => {
                        setMenuOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/app-development"
                      onClick={() => {
                        setMenuOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ui-ux-design"
                      onClick={() => {
                        setMenuOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Seo"
                      onClick={() => {
                        setMenuOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      SEO Optimization
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/digital-marketing"
                      onClick={() => {
                        setMenuOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Digital Marketing Service
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/workpage" onClick={() => setMenuOpen(false)}>
                Our Work
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile CTA */}
          <div className="mobile-cta">
            <button
              onClick={() => navigate("/contact-us")}
              className="get-in-touch"
            >
              Get in Touch →{/* <GrFormNextLink className="arrow-icon" /> */}
            </button>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="header__cta">
          <button
            onClick={() => navigate("/contact-us")}
            className="get-in-touch"
          >
            Get in Touch →{/* <GrFormNextLink className="arrow-icon" /> */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
