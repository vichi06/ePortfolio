import "./index.css";
import { LuExternalLink } from "react-icons/lu";

function Work({ work, index }) {
  return (
    <div className="Work">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="Work-Logo">
          <img src={work.logo} alt="logo" />
        </div>
        {work.link && (
          <a
            className="Work-Link"
            href={work.link}
            target="_blank"
            rel="noreferrer"
          >
            <LuExternalLink size={25}/>
          </a>
        )}
      </div>
      <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <h1 style={{ margin: "10px 0" }}>{work.company}</h1>
      </p>
      <p>{work.position}</p>
      <p>{work.year}</p>
      {work.tech.length !== 0 && (
        <p>
          <i>({work.tech.join(", ")})</i>
        </p>
      )}
    </div>
  );
}

export default Work;
