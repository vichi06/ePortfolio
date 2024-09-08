import "./index.css";
import logo from "../../assets/logo-egf-small.svg";
import logoRentbuyparis from "../../assets/logo-rentbuyparis.svg";
import Work from "../work";
import { useState } from "react";

const works = [
  {
    company: "EGF",
    position: "web developer",
    years: "2021",
    detail:
      "Mobile application development for a golf company in the south-east of France. It included mobile application design on Figma following the visual identity of the already existing website, and the development of the application front-end and back-end based on their database.\nBoth working in their office and in remote.",
    tech: ["react native", "php"],
    logo: logo,
  },
  {
    company: "RentBuyParis",
    position: "web developer & webdesigner",
    years: "2022",
    detail:
      "Webdesign and fullstack development of a showcase website in the real estate domain. In freelance with a partner for a client, we had phone calls and monthly meetups.",
    tech: ["react", "nodejs"],
    logo: logoRentbuyparis,
  },
];

function Works() {
  const [activeFilter, setActiveFilter] = useState(0);
  const [orderByAscending, setOrderByAscending] = useState(true);
  const [content, setContent] = useState();

  return (
    <div className="Works">
      <div className="Works-Leftside">
        <p>{content ?? ""}</p>
        {/* <div className="Works-Filters">
          <div>
            <button
              className={activeFilter === 0 ? "active" : ""}
              onClick={() => setActiveFilter(0)}
            >
              All projects (10)
            </button>
            <button
              className={activeFilter === 1 ? "active" : ""}
              onClick={() => setActiveFilter(1)}
            >
              Web Design (3)
            </button>
            <button
              className={activeFilter === 2 ? "active" : ""}
              onClick={() => setActiveFilter(2)}
            >
              Web Development (7)
            </button>
            <button
              className={activeFilter === 3 ? "active" : ""}
              onClick={() => setActiveFilter(3)}
            >
              Others
            </button>
          </div>
          <div>
            <button onClick={() => setOrderByAscending(!orderByAscending)}>
              Order by : {orderByAscending ? "Ascending" : "Descending"}
            </button>
          </div>
        </div> */}
      </div>
      <div className="Works-Rightside">
        {works.map((work, index) => (
          <div onClick={() => setContent(work.detail)}>
            <Work work={work} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
