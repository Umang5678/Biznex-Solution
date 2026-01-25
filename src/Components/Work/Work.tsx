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

            <div className="p1">More than 100 finished projects</div>
          </span>
        </div>

        <h2 className="work-heading" style={{ marginTop: "20px" }}>
          Check Out Our Best Design <br /> & Development Works
        </h2>
        <p className="work-subtitle">
          Every element guides users and delivers results. We design websites
          that turn visitors into customers.
        </p>
        <button className="work-button">See Our Work</button>
      </div>
    </section>
  );
};

export default Work;
