import "./Work.css";
import { IoIosAddCircle } from "react-icons/io";
import Icon1 from "../../assets/Background+Shadow.png";
import Icon2 from "../../assets/Background+Shadow (1).png";
import Icon3 from "../../assets/Background+Shadow (2).png";
import Icon4 from "../../assets/Background+Shadow (3).png";
import WorkBg from "../../assets/Group 1.svg";

const Work = () => {
  return (
    <section className="work-section">
      <img src={WorkBg} alt="Background" className="work-background-img" />

      <div className="work-icons">
        <img src={Icon1} alt="Stack Icon" className="work-icon top-left" />
        <img src={Icon2} alt="Pen Icon" className="work-icon bottom-left" />
        <img src={Icon3} alt="Star Icon" className="work-icon top-right" />
        <img src={Icon4} alt="Flash Icon" className="work-icon bottom-right" />
      </div>

      <div className="work-content">
        <div className="plus">
          <span className="badge">
            <div>
              <IoIosAddCircle className="badge-icon" />
            </div>

            <div className="p1">More than 50 finished projects</div>
          </span>
        </div>

        <h2 className="work-heading" style={{ marginTop: "20px" }}>
          Check Out Our Best Design <br /> & Development Works
        </h2>
        <p className="work-subtitle">
          Every element guides users and delivers results. We design websites
          that turn visitors into customers.
        </p>
        <button className="bg-indigo-600 text-white px-7 py-3 rounded-lg font-medium text-base transition hover:bg-indigo-500">
          See Our Work
        </button>
      </div>
    </section>
  );
};

export default Work;

// import { IoIosAddCircle } from "react-icons/io";
// import Icon1 from "../../assets/Background+Shadow.png";
// import Icon2 from "../../assets/Background+Shadow (1).png";
// import Icon3 from "../../assets/Background+Shadow (2).png";
// import Icon4 from "../../assets/Background+Shadow (3).png";
// import WorkBg from "../../assets/Group 1.svg";

// const Work = () => {
//   return (
//     <section className="relative overflow-hidden py-16 px-4 text-center">
//       {/* Background */}
//       <img
//         src={WorkBg}
//         alt="Background"
//         className="absolute inset-0 w-full h-full object-cover opacity-95 pointer-events-none"
//       />

//       {/* Floating Icons */}
//       <div className="absolute inset-0 pointer-events-none">
//         <img
//           src={Icon1}
//           alt=""
//           className="absolute top-16 left-[10%] w-20 animate-float"
//         />
//         <img
//           src={Icon2}
//           alt=""
//           className="absolute bottom-24 left-[6%] w-20 animate-float delay-1000"
//         />
//         <img
//           src={Icon3}
//           alt=""
//           className="absolute top-20 right-[10%] w-20 animate-float delay-2000"
//         />
//         <img
//           src={Icon4}
//           alt=""
//           className="absolute bottom-24 right-[6%] w-20 animate-float delay-3000"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-5xl mx-auto animate-fade-up">
//         {/* Badge */}
//         <div className="flex justify-center mb-6">
//           <div
//             className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md
//           transition hover:scale-[1.03] hover:shadow-lg"
//           >
//             <IoIosAddCircle className="text-black text-sm transition-transform group-hover:rotate-90" />
//             <span className="text-sm font-medium text-gray-900">
//               More than 100 finished projects
//             </span>
//           </div>
//         </div>

//         {/* Heading */}
//         <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight">
//           Check Out Our Best Design <br /> & Development Works
//         </h2>

//         {/* Subtitle */}
//         <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
//           Every element guides users and delivers results. We design websites
//           that turn visitors into customers.
//         </p>

//         {/* CTA */}
//         <button
//           className="mt-10 inline-flex items-center gap-2
//           bg-teal-400 text-white
//           px-7 py-3 rounded-xl
//           font-medium text-base
//           transition-all
//           hover:-translate-y-1 hover:shadow-xl"
//         >
//           See Our Work
//           <span className="transition-transform group-hover:translate-x-1">
//             →
//           </span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Work;
