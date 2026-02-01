import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Frame from "../../assets/ub-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) setServicesOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const closeDesktopDropdown = () => {
    setDesktopServicesOpen(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src={Frame} alt="Logo" className="h-15 w-auto" />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link relative ${isActive ? "nav-active" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `nav-link relative ${isActive ? "nav-active" : ""}`
              }
            >
              About Us
            </NavLink>

            {/* ===== Desktop Services Dropdown (FIXED PROPERLY) ===== */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              {/* Services link */}
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link relative flex items-center gap-1 ${
                    isActive ? "nav-active" : ""
                  }`
                }
              >
                Services
                <span
                  className={`text-xs transition-transform ${
                    desktopServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </NavLink>

              {/* Hover bridge (IMPORTANT) */}
              <div className="absolute left-0 top-full h-2 w-full" />

              {/* Dropdown */}
              <div
                className={`absolute top-full left-0 w-64 rounded-xl bg-white
    border border-gray-100 shadow-xl overflow-hidden
    transition-all duration-200 ease-out
    ${
      desktopServicesOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 translate-y-2 pointer-events-none"
    }`}
              >
                <NavLink
                  to="/website-development"
                  className="desktop-dd-item"
                  onClick={closeDesktopDropdown}
                >
                  Web Development
                </NavLink>

                <NavLink
                  to="/app-development"
                  className="desktop-dd-item"
                  onClick={closeDesktopDropdown}
                >
                  Mobile App Development
                </NavLink>

                <NavLink
                  to="/ui-ux-design"
                  className="desktop-dd-item"
                  onClick={closeDesktopDropdown}
                >
                  UI / UX Design
                </NavLink>

                <NavLink
                  to="/Seo"
                  className="desktop-dd-item"
                  onClick={closeDesktopDropdown}
                >
                  SEO Optimization
                </NavLink>

                {/* <NavLink
                  to="/digitalmarketing"
                  className="desktop-dd-item"
                  onClick={closeDesktopDropdown}
                >
                  Digital Marketing
                </NavLink> */}
              </div>
            </div>

            <NavLink
              to="/workpage"
              className={({ isActive }) =>
                `nav-link relative ${isActive ? "nav-active" : ""}`
              }
            >
              Our Work
            </NavLink>

            <NavLink
              to="/technologies"
              className={({ isActive }) =>
                `nav-link relative ${isActive ? "nav-active" : ""}`
              }
            >
              Technologies
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => navigate("/contact-us")}
              className="group inline-flex items-center gap-2
    bg-indigo-600 text-white px-6 py-2.5 rounded-full
    text-sm font-medium
    hover:bg-indigo-500 transition-all"
            >
              Get in Touch
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l6 7-6 7"
                />
              </svg>
            </button>
          </div>

          {/* Hamburger (hidden when menu open) */}
          {!menuOpen && (
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg border"
            >
              <div className="w-5 h-0.5 bg-gray-800 mb-1" />
              <div className="w-5 h-0.5 bg-gray-800 mb-1" />
              <div className="w-5 h-0.5 bg-gray-800" />
            </button>
          )}
        </div>
      </header>

      {/* ================= CLICKABLE 30% AREA ================= */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 z-45 h-screen w-[30vw]"
          onClick={closeMenu}
        />
      )}

      {/* ================= MOBILE DRAWER ================= */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[70vw] max-w-md
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        bg-gradient-to-br from-slate-50 via-white to-indigo-50`}
      >
        <div className="px-6 pt-24 pb-10 h-full overflow-y-auto">
          <div className="flex flex-col gap-6">
            <Link to="/" onClick={closeMenu} className="mobile-link-modern">
              Home
            </Link>

            <Link
              to="/about-us"
              onClick={closeMenu}
              className="mobile-link-modern"
            >
              About Us
            </Link>

            {/* Mobile Services */}
            <div className="flex items-center justify-between">
              <Link
                to="/services"
                onClick={closeMenu}
                className="mobile-link-modern"
              >
                Services
              </Link>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesOpen((prev) => !prev);
                }}
                className="text-gray-700 text-lg"
              >
                <span
                  className={`inline-block transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
            </div>

            {servicesOpen && (
              <div className="ml-4 flex flex-col gap-4 animate-fade-in">
                <Link
                  to="/website-development"
                  onClick={closeMenu}
                  className="mobile-sublink-modern"
                >
                  Web Development
                </Link>
                <Link
                  to="/app-development"
                  onClick={closeMenu}
                  className="mobile-sublink-modern"
                >
                  Mobile App Development
                </Link>
                <Link
                  to="/ui-ux-design"
                  onClick={closeMenu}
                  className="mobile-sublink-modern"
                >
                  UI / UX Design
                </Link>
                <Link
                  to="/Seo"
                  onClick={closeMenu}
                  className="mobile-sublink-modern"
                >
                  SEO Optimization
                </Link>
                {/* <Link
                  to="/digitalmarketing"
                  onClick={closeMenu}
                  className="mobile-sublink-modern"
                >
                  Digital Marketing
                </Link> */}
              </div>
            )}

            <Link
              to="/workpage"
              onClick={closeMenu}
              className="mobile-link-modern"
            >
              Our Work
            </Link>

            <Link
              to="/technologies"
              onClick={closeMenu}
              className="mobile-link-modern"
            >
              Technologies
            </Link>
          </div>

          {/* Mobile CTA */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => {
                closeMenu();
                navigate("/contact-us");
              }}
              className="w-[85%] flex items-center justify-center gap-2
    bg-indigo-600 text-white
    py-3.5 rounded-xl
    text-base font-semibold
    transition active:scale-95"
            >
              Get in Touch
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l6 7-6 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
