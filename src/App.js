import { useEffect, useState } from "react";

import { BsArrowRight } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";

import Button from "./components/button";
import Category from "./components/category";
import Splash from "./components/splash";
import AboutMe from "./components/aboutMe";
import Education from "./components/education";
import Career from "./components/career";
import Works from "./components/works";
import Insights from "./components/insights";

import "./App.css";

const tabs = [
  {
    id: 1,
    title: "About Me",
    desc: "who I am personally regarding hobbits, values and passions",
    component: AboutMe,
  },
  {
    id: 2,
    title: "Education",
    desc: "in what schools I have studies and what diplomas popped up",
    component: Education,
  },
  {
    id: 3,
    title: "Career",
    desc: "how I entered the world of work",
    component: Career,
  },
  {
    id: 4,
    title: "Works",
    desc: "what stuff I developed in freelance",
    component: Works,
  },
  {
    id: 5,
    title: "Insights",
    desc: "why people like me or not",
    component: Insights,
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [showContent, setShowContent] = useState(false);

  const handleTabSelection = (index) => {
    setShowContent(false);
    setSelectedTab(index === selectedTab ? null : index);
  };

  useEffect(() => {
    if (selectedTab !== null)
      setTimeout(() => {
        setShowContent(true);
      }, 200);
  }, [selectedTab]);

  const ComponentToRender =
    selectedTab !== null ? tabs[selectedTab].component : null;

  if (isLoading) return <Splash setIsLoading={setIsLoading} />;
  else
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <p>
              Vincent <strong>NGUYEN VAN NGUYEN</strong>
            </p>
          </div>
          <div>
            <a href="#footer">
              <Button>
                <p>Let's talk</p>
                <BsArrowRight size={20} />
              </Button>
            </a>
          </div>
        </div>
        <hr />
        {tabs.map((tab, index) => (
          <Category
            key={index}
            tab={tab}
            onClick={() => handleTabSelection(index)}
            isHidden={selectedTab !== null && selectedTab !== index}
            isSelected={selectedTab === index}
          />
        ))}
        <div
          className="App-component"
          style={{
            transform: `translateY(${
              selectedTab === null || !showContent ? "-5%" : 0
            })`,
            opacity: selectedTab === null || !showContent ? 0 : 1,
          }}
        >
          {showContent && selectedTab !== null ? <ComponentToRender /> : ""}
        </div>
        <hr />
        <div className="App-footer" id="footer">
          <div>
            <p>Follow me.</p>
            <div className="link">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/vincent-nguyen-van-nguyen-2a783319b/"
                rel="noreferrer"
              >
                LINKEDIN
              </a>
              <MdArrowOutward size={20} />
            </div>
          </div>
          <div>
            <p>Stay connected w/ me.</p>
            <div className="link">
              <a href="mailto:vincent.n@hotmail.fr">vincent.n@hotmail.fr</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
