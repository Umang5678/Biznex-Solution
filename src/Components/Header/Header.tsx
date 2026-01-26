import React, { useState } from "react";
import "./Header.css";
import Frame from "../../assets/logo7.png";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
            {/* <li
              className="dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className="dropdown-toggle">Services ▾</span>
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
                      to="/services/mobile-app"
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
                      to="/services/ui-ux"
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
                      to="/services/seo"
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
            </li> */}

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
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile CTA */}
          <div className="mobile-cta">
            <button className="get-in-touch">
              Get in Touch →{/* <GrFormNextLink className="arrow-icon" /> */}
            </button>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="header__cta">
          <button className="get-in-touch">
            Get in Touch →{/* <GrFormNextLink className="arrow-icon" /> */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
