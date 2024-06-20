import "./App.css";
import Button from "./components/button";
import Category from "./components/category";
import { BsArrowRight } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import Splash from "./components/splash";
import { useState, useEffect } from "react";
import AboutMe from "./components/aboutMe";
import Education from "./components/education";
import Career from "./components/career";
import Works from "./components/works";
import Insights from "./components/insights";

const tabs = [
  {
    id: 1,
    title: "About Me",
    desc: "who I am personnaly regarding hobbits, values and passions",
    component: AboutMe,
  },
  {
    id: 2,
    title: "Education",
    desc: "in what schools have I studies and what diplomas popped up",
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
    desc: "what kind of stuff I realized",
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

  const handleTabSelection = (selectedTabId) => {
    const selected = tabs.find((tab) => tab.id === selectedTabId);
    setSelectedTab(selected);
  };

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
            tab={tab}
            select={() => handleTabSelection(tab.id)}
            close={(event) => {
              event.stopPropagation();
              setSelectedTab(null);
            }}
            closed={selectedTab && selectedTab?.id !== tab.id}
            selected={selectedTab === tab}
            key={index}
          />
        ))}
        {selectedTab && <selectedTab.component />}
        <hr />
        <div className="App-footer" id="footer">
          <div>
            <p>Follow me.</p>
            <div className="link">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/vincent-nguyen-van-nguyen-2a783319b/"
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
