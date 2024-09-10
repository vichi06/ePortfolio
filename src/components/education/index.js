import { useState } from "react";

import "./index.css";

import civ from "../../assets/logo-CIV.jpg";
import descartes from "../../assets/descartes.jpg";
import efrei from "../../assets/efrei.jpg";
import { GiDiploma } from "react-icons/gi";
import { BsStars } from "react-icons/bs";

const education = [
  {
    beginningYear: 2011,
    finishingYear: 2015,
    name: "Collège Internationnal de Valbonne",
    city: "Sophia-Antipolis",
    diploma: "Brevet des Collèges - mention très bien",
    logo: civ,
    details: [],
  },
  {
    beginningYear: 2015,
    finishingYear: 2018,
    name: "Lycée Internationnal de Valbonne",
    city: "Sophia-Antipolis",
    diploma: "International Scientific Baccalauréat - mention bien",
    logo: civ,
    details: [],
  },
  {
    beginningYear: 2018,
    finishingYear: 2020,
    name: "IUT Paris Descartes",
    city: "Paris 16",
    diploma: "DUT Informatique",
    logo: descartes,
    details: [
      "End of studies intership with a researcher of the ENS working on cognitive sciences. Development of a web experience (spaceship game) to collect sensitivity results from patients.",
    ],
  },
  {
    beginningYear: 2020,
    finishingYear: 2023,
    name: "EFREI Paris",
    city: "Villejuif",
    diploma: "Engineer Diploma, CTI Certified",
    logo: efrei,
    details: [
      "From October 2023 - March 2024, University exchange with the Nagoya Institute of Technology in Japan for a 6 months research on Artificial Intelligence.",
    ],
  },
];

function Education() {
  return (
    <div className="Education">
      {education.map((e) => (
        <div className="Education-Section">
          <div className="Education-Vertical-Line">
            <div />
          </div>
          <div>
            <div className="Education-Circle">
              <div />
            </div>
            <h2>{e.name}</h2>
          </div>
          <div>
            <p>
              {e.city}, {e.beginningYear} - {e.finishingYear}
            </p>
          </div>
          <div style={{ gap: 10 }}>
            <GiDiploma size={30} />
            <p>{e.diploma}</p>
          </div>
          {e.details.map((d) => (
            <div>
              <div className="Education-Circle" style={{ padding: "5px 0" }}>
                <div style={{ width: "80%", height: "80%" }} />
                <BsStars style={{ position: "absolute" }} color="white" size={10} />
              </div>
              <p style={{ width: "fit-content" }}>{d}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Education;
