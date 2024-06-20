import "./index.css";
import logo from "../../assets/logo-egf-small.svg";
import { useState } from "react";

function Work() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="Work" onClick={() => setOpened(!opened)}>
      {opened ? (
        <div className="Work-opened">
          <h1>EGF Ecole du golf français</h1>
          <h3>Développeur Fullstack & Webdesigner</h3>
          <h3>2021-2023</h3>
          <p>
            Développement d'une application mobile accompagnant leur site
            officiel web.
          </p>
          <p>Techs : ReactNative, php, Figma</p>
        </div>
      ) : (
        <div className="Work-closed">
          <img src={logo} alt="logo" />
        </div>
      )}
    </div>
  );
}

export default Work;
