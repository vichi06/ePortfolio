import "./index.css";

import { career } from "./career.ts";
import { useState } from "react";

function Career() {
  const [selectedJob, setSelectedJob] = useState(0);

  const job = career[selectedJob];

  return (
    <div className="Career">
      <div className="Career-month">
        <p>
          {job.startDate
            .toLocaleString("en-US", { month: "long" })
            .split("")
            .map((char, index) => (
              <span key={index}>
                {char}
                <br />
              </span>
            ))}
        </p>
      </div>
      <div
        onClick={() =>
          career[selectedJob - 1] ? setSelectedJob(selectedJob - 1) : {}
        }
      >
        <h1
          style={{
            cursor: career[selectedJob - 1] ? "pointer" : "not-allowed",
          }}
        >
          {career[selectedJob].startDate
            .getFullYear()
            .toString()
            .split("")
            .map((char, index) => (
              <span key={index}>
                {char}
                <br />
              </span>
            ))}
        </h1>
      </div>
      <section className="Career-section">
        <div className="Job-card">
          <h2 className="Job-title">{job.jobTitle}</h2>
          <p className="Job-company">
            <i>{job.company}</i> |{" "}
            <span className="Job-location">{job.location}</span>
          </p>

          <div className="Job-details">
            <p>
              <strong>Employment Type :</strong> {job.employmentType}
            </p>
            <p>
              <strong>Experience Level :</strong> {job.experienceLevel}
            </p>
            <p>
              <strong>Salary :</strong> {job.salaryCompensation}
            </p>
            <p>
              <strong>Technologies used :</strong>{" "}
              {job.technologiesToolsUsed.join(", ")}
            </p>
          </div>

          <div className="Job-summary">
            <p>{job.jobDescription}</p>
          </div>
        </div>
      </section>
      <div
        onClick={() =>
          career[selectedJob + 1] ? setSelectedJob(selectedJob + 1) : {}
        }
      >
        <h1
          style={{
            cursor: career[selectedJob + 1] ? "pointer" : "not-allowed",
          }}
        >
          2<br />0<br />2<br />3<br />
        </h1>
      </div>
      <div>
        <p>
          {job.startDate
            .toLocaleString("en-US", { month: "long" })
            .split("")
            .map((char, index) => (
              <span key={index}>
                {char}
                <br />
              </span>
            ))}
        </p>
      </div>
    </div>
  );
}

export default Career;
