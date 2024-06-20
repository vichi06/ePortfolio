import "./index.css";
import logo from "../../assets/logo-egf-small.svg";
import Work from "../work";

const works = [
  {
    company: "EGF",
    position: "web developer",
    years: "2021",
    detail: "Dév d'une appm obile",
    tech: ["react native", "php"],
    logo: logo,
  },
];

function Works() {
  return (
    <div className="Works">
      {works.map((work) => (
        <Work work={work} />
      ))}
    </div>
  );
}

export default Works;
