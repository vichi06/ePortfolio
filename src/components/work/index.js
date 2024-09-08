import "./index.css";

function Work({ work, index }) {
  return (
    <div className="Work">
      <div className="Work-Logo">
        <img src={work.logo} alt="logo" />
      </div>
      <h1>{work.company}</h1>
      <p>{work.position}</p>
      <p>{work.year}</p>
      <p>Techs : {work.tech.join(", ")}</p>
    </div>
  );
}

export default Work;
