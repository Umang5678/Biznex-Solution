import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { GrFormNextLink } from "react-icons/gr";

const ServicesPage = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleMoreClick = (path: string) => {
    navigate(path);
  };

  const detailedServices = [
    {
      title: "Web Design & Development",
      text: `We bring revolution to reality. Transforming your custom business ideas into an innovative next-gen web app in our forte.
      
        With experience in web application development services, Ubyte Solution development team has enough expertise to embody even the most daring ideas into perfect web apps. Our outsourcing team does not just create custom web applications but also solves your business problems. We are ever ready to meet your high expectations and quality standards, find solutions for your business tasks, and offer future product evolution opportunities.`,
      animation:
        "https://lottie.host/30e7511a-690d-4e61-adfc-d7c3d1fef1e8/GT0gLcE1Rm.lottie",
      reverse: true,
      isDotLottie: true,
      link: "/website-development",
    },
    {
      title: "Mobile App Development",
      text: `Our mobile team builds mobile apps for every user, every platform, and every industry. No matter under which niche your project falls, with the help of our experienced mobile app developers, we can deliver you with robust mobile application solutions.We focus on innovation, performance, and security, ensuring that your mobile app delivers a seamless user experience while achieving your business objectives. From concept to deployment, we provide end-to-end mobile app development solutions that drive real results.`,
      animation:
        "https://lottie.host/2f67af33-6fb7-416f-9f63-ab635e80709a/kOPGv7hXdR.lottie",
      reverse: false,
      isDotLottie: true,
      link: "/app-development",
    },
    {
      title: "UI/UX Design",
      text: `Utilizing creative, technology and strategy, we are a multi-disciplinary digital product design

We will design every aspect of your website. Based on your personal feel and business needs we will select the right template for you. These templates are designed by highly experienced and expensive designers.`,
      animation:
        "https://lottie.host/11038d3d-2193-4cfd-bc31-736d092abfba/kIcnaoYRN8.lottie",
      reverse: true,
      isDotLottie: true,
      link: "/graphic-design",
    },
    {
      title: "SEO & Digital Marketing Services",
      text: `In today’s digital world, ranking high on search engines is essential for business success. At Ubyte Solution, we provide expert SEO (Search Engine Optimization) services to help businesses increase their online visibility, attract more customers, and grow their revenue. Our SEO strategies are designed to improve your website’s ranking on Google and other search engines, ensuring that your business stays ahead of the competition.`,
      animation:
        "https://lottie.host/63eeee65-0caf-4b54-9d3a-25c9ba584e1f/AEClhiCC1t.lottie",
      reverse: false,
      isDotLottie: true,
      link: "/seo",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Services | UByte Solution";
  }, []);

  return (
    <>
      <div className="relative overflow-hidden bg-white">
        {/* Soft background like your other pages */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-200/45 blur-3xl" />
          <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-cyan-200/45 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-200/35 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our <span className="text-indigo-600">Services</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-indigo-600" />
          </div>

          {/* Why Choose Section */}
          <motion.section
            className="mt-12 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Why you should choose{" "}
              <span className="text-indigo-600">Ubyte Solution</span>
            </h3>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                {
                  t: "Design Thinking",
                  d: "Solution architects analyze company issues and provide the best solutions.",
                },
                {
                  t: "Domain Expertise",
                  d: "We understand unique sector problems and use design thinking to solve them.",
                },
                {
                  t: "Client Experience",
                  d: "Proven track record with several business engagements and measurable returns.",
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h4 className="text-sm font-semibold text-slate-900">
                    | {x.t}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {x.d}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/contact-us")}
              className="mt-8 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              INQUIRY NOW
            </button>
          </motion.section>

          {/* Detailed Service Sections */}
          <div className="mt-14 space-y-10">
            {detailedServices.map((service, index) => {
              const isExpanded = expanded === index;

              return (
                <motion.div
                  key={index}
                  className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur sm:p-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`grid items-center gap-10 lg:grid-cols-2 ${
                      service.reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* Text */}
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900">
                        {service.title}
                      </h3>

                      {/* Read More/Less */}
                      <p
                        className={`mt-4 text-sm leading-relaxed text-slate-600 sm:text-base ${
                          isExpanded ? "" : "line-clamp-4"
                        }`}
                        style={{ textAlign: "justify" }}
                      >
                        {service.text}
                      </p>

                      <div className="mt-6 flex items-center gap-3">
                        <button
                          onClick={() => handleToggle(index)}
                          className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>

                        <button
                          onClick={() => handleMoreClick(service.link)}
                          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm hover:bg-indigo-700"
                          aria-label="Go to service page"
                        >
                          <GrFormNextLink className="text-2xl" />
                        </button>
                      </div>
                    </div>

                    {/* Lottie */}
                    <div className="flex justify-center">
                      <div className="w-full max-w-md">
                        {service.isDotLottie ? (
                          <DotLottieReact
                            src={service.animation}
                            loop
                            autoplay
                          />
                        ) : (
                          <Lottie
                            animationData={service.animation as any}
                            loop
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicesPage;
