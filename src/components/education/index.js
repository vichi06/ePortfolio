import { useState } from "react";

import "./index.css";

import civ from "../../assets/logo-CIV.jpg";
import descartes from "../../assets/descartes.jpg";
import efrei from "../../assets/efrei.jpg";

const education = [
  {
    beginningYear: 2011,
    finishingYear: 2015,
    name: "Collège Internationnal de Valbonne",
    city: "Sophia-Antipolis",
    diploma: "Brevet des Collèges",
    logo: civ,
  },
  {
    beginningYear: 2015,
    finishingYear: 2018,
    name: "Lycée Internationnal de Valbonne",
    city: "Sophia-Antipolis",
    diploma: "Baccalauréat",
    logo: civ,
  },
  {
    beginningYear: 2018,
    finishingYear: 2020,
    name: "IUT Paris Descartes",
    city: "Paris 16",
    diploma: "DUT Informatique",
    logo: descartes,
  },
  {
    beginningYear: 2020,
    finishingYear: 2023,
    name: "EFREI Paris",
    city: "Villejuif",
    diploma: "Diplôme d'ingénieur",
    logo: efrei,
  },
];

function Education() {
  const [periodChosen, setPeriodChosen] = useState(0);

  return (
    <table className="Education">
      <thead className="Education-header">
        <tr>
          <th scope="col">Années</th>
          <th scope="col">Nom de l'institut</th>
          <th scope="col">Diplôme</th>
        </tr>
      </thead>
      <tbody>
        {education.map((value, index) => (
          <tr
            className={index === periodChosen ? "selected" : ""}
            onMouseOver={() => setPeriodChosen(index)}
          >
            <th scope="row">
              {value.beginningYear} - {value.finishingYear}
            </th>
            <td
              style={{
                display: "flex",
                justifyContent: "end",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div>
                {value.name}
                <br />
                <i>{value.city}</i>
              </div>
              <div>
                <img
                  src={value.logo}
                  alt="logo"
                  style={{ height: 50, width: 50, objectFit: "contain" }}
                />
              </div>
            </td>
            <td>{value.diploma}</td>
            <div></div>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Education;
