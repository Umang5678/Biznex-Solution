// import "./Footer.css";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";
// import logo from "../../assets/logo10.png";
// import FooterShape from "../../assets/Footerimg.png";

// const Footer = () => {
//   return (
//     <div className="footer-wrapper">
//       <img src={FooterShape} alt="shape" className="footer-shape" />
//       <footer className="footer">
//         <div className="footer-top">
//           <div className="footer-logo">
//             <img src={logo} alt="Infocorpus Logo" />
//             <p>Fueling Your Brand’s Brilliance</p>
//           </div>

//           <div className="footer-links">
//             {[
//               {
//                 title: "Software Engineering",
//                 items: [
//                   "Software Development",
//                   "Web Design",
//                   "Mobile App Development",
//                   "Ui-Ux Design",
//                   "SEO Optimization",
//                   "Digital Marketing Service",
//                 ],
//               },
//               {
//                 title: "Application Development",
//                 items: [
//                   "Web Design",
//                   "Mobile App Development",
//                   "Ui-Ux Design",
//                   "SEO Optimization",
//                   "Digital Marketing Service",
//                 ],
//               },
//               {
//                 title: "Generative AI Solutions",
//                 items: [
//                   "Web Design",
//                   "Mobile App Development",
//                   "Ui-Ux Design",
//                   "SEO Optimization",
//                   "Digital Marketing Service",
//                 ],
//               },
//               {
//                 title: "For Company",
//                 items: [
//                   "Web Design",
//                   "Mobile App Development",
//                   "Ui-Ux Design",
//                   "SEO Optimization",
//                   "Digital Marketing Service",
//                 ],
//               },
//             ].map((column, index) => (
//               <div key={index} className="footer-column">
//                 <h4>{column.title}</h4>
//                 <ul>
//                   {column.items.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <div className="footer-left">
//             <p
//               className="pp
//             "
//             >
//               © 2010–2025 Infocorpus solution Private Limited.
//             </p>
//             <a className="pp2" href="#">
//               Privacy Policy
//             </a>
//             <a className="pp2" href="#">
//               Terms of Service
//             </a>
//           </div>
//           <div className="footer-socials">
//             <a href="#">
//               <FaFacebookF />
//             </a>
//             <a href="#">
//               <FaTwitter />
//             </a>
//             <a href="#">
//               <FaInstagram />
//             </a>
//             <a href="#">
//               <FaLinkedinIn />
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/u-logo.png";

type LinkItem = { label: string; href: string };

const Footer = () => {
  const quickLinks: LinkItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Our Work", href: "/workpage" },
    { label: "Contact", href: "/contact-us" },
  ];

  const services: LinkItem[] = [
    { label: "Web Development", href: "/website-development" },
    { label: "Mobile App Development", href: "/app-development" },
    { label: "UI/UX Design", href: "/ui-ux-design" },
    { label: "SEO Optimization", href: "/Seo" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
  ];

  const company: LinkItem[] = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Support", href: "/support" },
  ];

  const socials = [
    { Icon: FaFacebookF, href: "#", label: "Facebook" },
    { Icon: FaTwitter, href: "#", label: "Twitter" },
    { Icon: FaInstagram, href: "#", label: "Instagram" },
    { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative mt-16 overflow-hidden bg-[#070A12] text-slate-200">
      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="UByte Solutions Logo"
                className="h-11 w-11 rounded-xl border border-white/10 bg-white/5 p-1"
              />
              <p className="text-sm text-slate-300">
                Fueling Your Brand’s Brilliance
              </p>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
              We build premium websites, mobile apps, and digital solutions with
              modern UI/UX, performance, and SEO-first strategy.
            </p>

            {/* Socials (external → keep <a>) */}
            <div className="mt-5 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white"
                >
                  <Icon className="text-base opacity-90 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-8">
            <div className="grid gap-8 sm:grid-cols-3">
              <FooterCol title="Quick Links" items={quickLinks} />
              <FooterCol title="Services" items={services} />
              <FooterCol title="Company" items={company} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 UByte Solutions Private Limited. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/privacy-policy"
              className="transition hover:text-white hover:underline hover:underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="transition hover:text-white hover:underline hover:underline-offset-4"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* ---------------- Footer Column ---------------- */

function FooterCol({ title, items }: { title: string; items: LinkItem[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it.label}>
            <Link
              to={it.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
