import "./index.css";
import logo from "../../assets/logo-egf-small.svg";
import logoRentbuyparis from "../../assets/logo-rentbuyparis.svg";
import logoAkonsulting from "../../assets/logo-akonsulting.png";
import Work from "../work";
import { useState } from "react";

const works = [
  {
    company: "EGF",
    position: "Fullstack Web Developer & Webdesigner",
    years: 2021,
    detail: (
      <>
        <p>
          <b>Mobile application development</b> for a golf company in the
          south-east of France. It included mobile application design on Figma
          following the visual identity of the already existing website, and the
          development of the application front-end and back-end based on their
          database.
        </p>
        <p>Both working in their office and in remote.</p>
        <p>
          <u>Tools</u> : PostgreSQL, Figma, Postman
        </p>
      </>
    ),
    tech: ["react native", "php"],
    logo: logo,
    link: "",
    category: "dev&design",
  },
  {
    company: "RentBuyParis",
    position: "Fullstack Web developer & Webdesigner",
    years: 2022,
    detail: (
      <>
        <p>
          <b>Webdesign and fullstack development</b> of a showcase website in
          the real estate domain. In freelance with a partner for a client, we
          had phone calls and monthly meetups.
        </p>
        <p>
          <u>Tools</u> : Figma, Heroku, Github, Cloudinary
        </p>
      </>
    ),
    tech: ["react", "nodejs"],
    logo: logoRentbuyparis,
    link: "https://rentbuyparis.vercel.app/",
    category: "dev&design",
  },
  {
    company: "Akonsulting",
    position: "Webdesigner",
    years: 2022,
    detail: (
      <>
        <p>
          <b>Web Design</b> of a showcase site for a freelance in the nuclear.
        </p>

        <p>
          <u>Tools</u> : Figma
        </p>
      </>
    ),
    tech: [],
    logo: logoAkonsulting,
    link: "https://akonsulting.fr/",
    category: "design",
  },
];

function Works() {
  const [activeFilter, setActiveFilter] = useState("");
  const [orderByMostRecent, setOrderByAscending] = useState(true);
  const [content, setContent] = useState();

  return (
    <div className="Works">
      <div className="Works-Leftside">
        <p>{content ?? ""}</p>
        <div className="Works-Filters">
          <div>
            <button
              className={activeFilter === "" ? "active" : ""}
              onClick={() => setActiveFilter("")}
            >
              All projects ({works.length})
            </button>
            <button
              className={activeFilter === "design" ? "active" : ""}
              onClick={() => setActiveFilter("design")}
            >
              Web Design (
              {works.filter((w) => w.category.includes("design")).length})
            </button>
            <button
              className={activeFilter === "dev" ? "active" : ""}
              onClick={() => setActiveFilter("dev")}
            >
              Web Development (
              {works.filter((w) => w.category.includes("dev")).length})
            </button>
          </div>
          <div>
            <button onClick={() => setOrderByAscending(!orderByMostRecent)}>
              Order by date : {orderByMostRecent ? "Most Recent" : "Oldest"}
            </button>
          </div>
        </div>
      </div>
      <div className="Works-Rightside">
        {works
          .filter((w) => w.category.includes(activeFilter))
          .sort((a, b) =>
            !orderByMostRecent ? a.years - b.years : b.years - a.years
          )
          .map((work, index) => (
            <div onClick={() => setContent(work.detail)}>
              <Work work={work} index={index} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Works;
