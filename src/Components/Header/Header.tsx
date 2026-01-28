// import React, { useState } from "react";
// import "./Header.css";
// import Frame from "../../assets/logo7.png";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Header: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const navigate = useNavigate();
//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   return (
//     <header className="header">
//       <div className="header__container">
//         {/* Logo */}
//         <div className="header__logo">
//           <img src={Frame} alt="Infocorpus Solutions" />
//         </div>

//         {/* Mobile menu toggle */}
//         <button className="menu-toggle" onClick={toggleMenu}>
//           <span className="hamburger"></span>
//         </button>

//         {/* Navigation */}
//         <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
//           <ul>
//             <li>
//               <Link to="/" onClick={() => setMenuOpen(false)}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about-us" onClick={() => setMenuOpen(false)}>
//                 About Us
//               </Link>
//             </li>

//             <li
//               className="dropdown"
//               onMouseEnter={() => setServicesOpen(true)}
//               onMouseLeave={() => setServicesOpen(false)}
//             >
//               {/* Clickable main link */}
//               <Link
//                 to="/services"
//                 className="dropdown-toggle"
//                 onClick={() => {
//                   setMenuOpen(false);
//                   setServicesOpen(false);
//                 }}
//               >
//                 Services ▾
//               </Link>

//               {/* Dropdown items */}
//               {servicesOpen && (
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link
//                       to="/website-development"
//                       onClick={() => {
//                         setMenuOpen(false);
//                         setServicesOpen(false);
//                       }}
//                     >
//                       Web Design
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/app-development"
//                       onClick={() => {
//                         setMenuOpen(false);
//                         setServicesOpen(false);
//                       }}
//                     >
//                       Mobile App Development
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/ui-ux-design"
//                       onClick={() => {
//                         setMenuOpen(false);
//                         setServicesOpen(false);
//                       }}
//                     >
//                       UI/UX Design
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/Seo"
//                       onClick={() => {
//                         setMenuOpen(false);
//                         setServicesOpen(false);
//                       }}
//                     >
//                       SEO Optimization
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/services/digital-marketing"
//                       onClick={() => {
//                         setMenuOpen(false);
//                         setServicesOpen(false);
//                       }}
//                     >
//                       Digital Marketing Service
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li>
//               <Link to="/workpage" onClick={() => setMenuOpen(false)}>
//                 Our Work
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
//                 Contact Us
//               </Link>
//             </li>
//           </ul>

//           {/* Mobile CTA */}
//           <div className="mobile-cta">
//             <button
//               onClick={() => navigate("/contact-us")}
//               className="get-in-touch"
//             >
//               Get in Touch →{/* <GrFormNextLink className="arrow-icon" /> */}
//             </button>
//           </div>
//         </nav>

//         {/* Desktop CTA */}
//         <div className="header__cta">
//           <button
//             onClick={() => navigate("/contact-us")}
//             className="get-in-touch"
//           >
//             Get in Touch →{/* <GrFormNextLink className="arrow-icon" /> */}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Frame from "../../assets/logo7.png";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//     if (menuOpen) setServicesOpen(false);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//     setServicesOpen(false);
//   };

//   return (
//     <>
//       {/* ================= HEADER ================= */}
//       <header className="sticky top-0 z-40 bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/">
//             <img src={Frame} alt="Logo" className="h-10 w-auto" />
//           </Link>

//           {/* ================= DESKTOP NAV ================= */}
//           <nav className="hidden lg:flex items-center gap-8">
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//             <Link to="/about-us" className="nav-link">
//               About Us
//             </Link>

//             {/* Desktop Services Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => setDesktopServicesOpen(true)}
//               onMouseLeave={() => setDesktopServicesOpen(false)}
//             >
//               <Link to="/services" className="nav-link flex items-center gap-1">
//                 Services <span className="text-xs">▾</span>
//               </Link>

//               {desktopServicesOpen && (
//                 <div className="absolute top-full left-0 mt-3 w-64 rounded-xl bg-white shadow-xl border overflow-hidden">
//                   <Link to="/website-development" className="desktop-dd-item">
//                     Web Design
//                   </Link>
//                   <Link to="/app-development" className="desktop-dd-item">
//                     Mobile App Development
//                   </Link>
//                   <Link to="/ui-ux-design" className="desktop-dd-item">
//                     UI / UX Design
//                   </Link>
//                   <Link to="/Seo" className="desktop-dd-item">
//                     SEO Optimization
//                   </Link>
//                   <Link
//                     to="/services/digital-marketing"
//                     className="desktop-dd-item"
//                   >
//                     Digital Marketing
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/workpage" className="nav-link">
//               Our Work
//             </Link>
//             <Link to="/contact-us" className="nav-link">
//               Contact Us
//             </Link>
//           </nav>

//           {/* Desktop CTA */}
//           <div className="hidden lg:block">
//             <button
//               onClick={() => navigate("/contact-us")}
//               className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-500 transition"
//             >
//               Get in Touch →
//             </button>
//           </div>

//           {/* Hamburger (hidden when menu open) */}
//           {!menuOpen && (
//             <button
//               onClick={toggleMenu}
//               className="lg:hidden p-2 rounded-lg border"
//             >
//               <div className="w-5 h-0.5 bg-gray-800 mb-1" />
//               <div className="w-5 h-0.5 bg-gray-800 mb-1" />
//               <div className="w-5 h-0.5 bg-gray-800" />
//             </button>
//           )}
//         </div>
//       </header>

//       {/* ================= CLICKABLE 30% AREA ================= */}
//       {menuOpen && (
//         <div
//           className="fixed top-0 left-0 z-45 h-screen w-[30vw]"
//           onClick={closeMenu}
//         />
//       )}

//       {/* ================= MOBILE DRAWER ================= */}
//       <aside
//         className={`fixed right-0 top-0 z-50 h-screen w-[70vw] max-w-md
//         transform transition-transform duration-300 ease-in-out
//         ${menuOpen ? "translate-x-0" : "translate-x-full"}
//         bg-gradient-to-br from-slate-50 via-white to-indigo-50`}
//       >
//         <div className="px-6 pt-24 pb-10 h-full overflow-y-auto">
//           {/* Mobile Menu Links */}
//           <div className="flex flex-col gap-6">
//             <Link to="/" onClick={closeMenu} className="mobile-link-modern">
//               Home
//             </Link>

//             <Link
//               to="/about-us"
//               onClick={closeMenu}
//               className="mobile-link-modern"
//             >
//               About Us
//             </Link>

//             {/* ===== Services Row ===== */}
//             <div className="flex items-center justify-between">
//               {/* Navigate to /services */}
//               <Link
//                 to="/services"
//                 onClick={closeMenu}
//                 className="mobile-link-modern"
//               >
//                 Services
//               </Link>

//               {/* Dropdown Toggle */}
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setServicesOpen((prev) => !prev);
//                 }}
//                 className="text-gray-700 text-lg"
//               >
//                 <span
//                   className={`inline-block transition-transform ${
//                     servicesOpen ? "rotate-180" : ""
//                   }`}
//                 >
//                   ▾
//                 </span>
//               </button>
//             </div>

//             {/* Services Submenu */}
//             {servicesOpen && (
//               <div className="ml-4 flex flex-col gap-4 animate-fade-in">
//                 <Link
//                   to="/website-development"
//                   onClick={closeMenu}
//                   className="mobile-sublink-modern"
//                 >
//                   Web Design
//                 </Link>
//                 <Link
//                   to="/app-development"
//                   onClick={closeMenu}
//                   className="mobile-sublink-modern"
//                 >
//                   Mobile App Development
//                 </Link>
//                 <Link
//                   to="/ui-ux-design"
//                   onClick={closeMenu}
//                   className="mobile-sublink-modern"
//                 >
//                   UI / UX Design
//                 </Link>
//                 <Link
//                   to="/Seo"
//                   onClick={closeMenu}
//                   className="mobile-sublink-modern"
//                 >
//                   SEO Optimization
//                 </Link>
//                 <Link
//                   to="/services/digital-marketing"
//                   onClick={closeMenu}
//                   className="mobile-sublink-modern"
//                 >
//                   Digital Marketing
//                 </Link>
//               </div>
//             )}

//             <Link
//               to="/workpage"
//               onClick={closeMenu}
//               className="mobile-link-modern"
//             >
//               Our Work
//             </Link>

//             <Link
//               to="/contact-us"
//               onClick={closeMenu}
//               className="mobile-link-modern"
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* CTA */}
//           <button
//             onClick={() => {
//               closeMenu();
//               navigate("/contact-us");
//             }}
//             className="mt-12 text-indigo-600 text-base font-medium"
//           >
//             Get in Touch →
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Header;

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
                  Web Design
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

                <NavLink
                  to="/services/digital-marketing"
                  className="desktop-dd-item"
                  onClick={closeDesktopDropdown}
                >
                  Digital Marketing
                </NavLink>
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
              to="/contact-us"
              className={({ isActive }) =>
                `nav-link relative ${isActive ? "nav-active" : ""}`
              }
            >
              Contact Us
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
                  Web Design
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
                <Link
                  to="/services/digital-marketing"
                  onClick={closeMenu}
                  className="mobile-sublink-modern"
                >
                  Digital Marketing
                </Link>
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
              to="/contact-us"
              onClick={closeMenu}
              className="mobile-link-modern"
            >
              Contact Us
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
