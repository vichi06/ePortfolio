import "./index.css";
import EmblaCarousel from "../emblaCarousel/emblaCarousel";
import { useState } from "react";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function AboutMe() {
  const [openQualities, setOpenQualities] = useState(true);
  const [openLimits, setOpenLimits] = useState(true);

  return (
    <div className="AboutMe">
      <p>
        Born in the south-east of <b>France</b>. Studied in <b>Paris</b>.{" "}
        <i>24</i> years old.
      </p>
      <div>
        <h1>What I am fond of</h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="HowPeopleSeeMe">
        <h1>How people and tests see me</h1>
        <div>
          <div>
            <h3
              style={{ backgroundColor: "#76A380" }}
              // onClick={() => setOpenQualities(!openQualities)}
            >
              Qualities
            </h3>
            <div className={openQualities ? "active" : ""}>
              <p>Cooperative,</p>
              <p>Thoughtful,</p>
              <p>Intuitive,</p>
              <p>Independant,</p>
              <p>Creative</p>
            </div>
          </div>
          <div>
            <h3
              style={{ backgroundColor: "#B15555" }}
              // onClick={() => setOpenLimits(!openLimits)}
            >
              Limits
            </h3>
            <div className={openLimits ? "active" : ""}>
              <p>Reserved,</p>
              <p>Hesitant,</p>
              <p>Distant,</p>
              <p>Rigid,</p>
              <p>Fussy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="WhatBooksILiked">
        <h1 style={{ marginTop: 30, marginBottom: 0 }}>
          What books I liked the most
        </h1>
        <p>
          Le Maître et Marguerite, <i>Mikhail Boulgakov</i>
        </p>
        <p>
          Dans les forêts de Sibérie, <i>Sylvain Tesson</i>
        </p>
        <p>
          Sapiens, <i>Yuval Noah Harari</i>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
