import "./index.css";
import EmblaCarousel from "../emblaCarousel/emblaCarousel";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function AboutMe() {
  return (
    <div className="AboutMe">
      <p>
        My name is... already written up there. Born in the south-east of{" "}
        <b>France</b>. Studied in <b>Paris</b>. <i>24</i> years old.
      </p>
      <div>
        <h1>What I am fond of</h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="HowPeopleSeeMe">
        <h1>How people see me</h1>
        <div>
          <div>
            <p>Calm</p>
          </div>
          <div>
            <p>Curious</p>
          </div>
          <div>
            <p>Creative</p>
          </div>
          <div>
            <p>Perseverant</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
