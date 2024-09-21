import { useEffect, useState } from "react";

import "./index.css";

import Work from "../work";
import { works } from "./works";

function Works() {
  const [activeFilter, setActiveFilter] = useState("");
  const [orderByMostRecent, setOrderByAscending] = useState(true);
  const [selectedWork, setSelectedWork] = useState();

  useEffect(() => {
    if (!selectedWork?.category.includes(activeFilter)) setSelectedWork();
  }, [activeFilter, selectedWork?.category]);

  return (
    <div className="Works">
      <div className="Works-Leftside">
        <p>
          {selectedWork?.detail ?? (
            <p>
              <i style={{ color: "grey" }}>Click on a project.</i>
            </p>
          )}
        </p>
        <div className="Works-Filters">
          <div>
            <button
              className={activeFilter === "" ? "active" : ""}
              onClick={() => setActiveFilter("")}
            >
              All projects ({works.length})
            </button>
            <button
              className={activeFilter === "design" ? "active" : ""}
              onClick={() => setActiveFilter("design")}
            >
              Web Design (
              {works.filter((w) => w.category.includes("design")).length})
            </button>
            <button
              className={activeFilter === "dev" ? "active" : ""}
              onClick={() => setActiveFilter("dev")}
            >
              Web Development (
              {works.filter((w) => w.category.includes("dev")).length})
            </button>
          </div>
          <div>
            <button onClick={() => setOrderByAscending(!orderByMostRecent)}>
              Order by date : {orderByMostRecent ? "Most Recent" : "Oldest"}
            </button>
          </div>
        </div>
      </div>
      <div className="Works-Rightside">
        {works
          .filter((w) => w.category.includes(activeFilter))
          .sort((a, b) =>
            !orderByMostRecent ? a.years - b.years : b.years - a.years
          )
          .map((work) => (
            <div onClick={() => setSelectedWork(work)}>
              <Work work={work} selected={selectedWork === work} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Works;
