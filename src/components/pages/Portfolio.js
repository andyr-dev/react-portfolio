import React from "react";

export default function Portfolio() {
  return (
    <>
      <section id="projectsContainer">
        <div>
          <div>
            <a href="https://jate-texteditor1-5f61b91974cb.herokuapp.com/">
              <img
                id="grayscale"
                className="project"
                src="images/jate.png"
                alt="JATE"
              />
            </a>

            <a
              className="repoLinks"
              href="https://github.com/andyr-dev/Just-Another-Text-Editor"
            >
              {" "}
              JATE Repo{" "}
            </a>
          </div>
          <div>
            <a href="https://jbarberisv.github.io/Beatview/">
              <img
                id="grayscale"
                className="project"
                src="./images/Maimusic.png"
                alt="Maimusic"
              />
            </a>

            <a
              className="repoLinks"
              href="https://github.com/jbarberisv/Beatview"
            >
              {" "}
              MaiMusic Repo{" "}
            </a>
          </div>
          <div>
            <a href="http://stark-harbor-37192.herokuapp.com/">
              <img
                id="grayscale"
                className="project"
                src="./images/PawsitiveConnections.png"
                alt="PawsitiveConnections"
              />
            </a>
            <a
              className="repoLinks"
              href="https://github.com/JTruehitt/Pawsitive_Connections"
            >
              {" "}
              Pawsitive Connections Repo{" "}
            </a>
          </div>

          <div>
            <a href="https://andyr-dev.github.io/weather-app/">
              <img
                id="grayscale"
                className="project"
                src="./images/Weather App.png"
                alt="Weather App"
              />
            </a>

            <a
              className="repoLinks"
              href="https://github.com/andyr-dev/weather-app"
            >
              {" "}
              Weather App Repo{" "}
            </a>
          </div>

          <div>
            <a href="https://andyr-dev.github.io/day-planner/">
              <img
                id="grayscale"
                className="project"
                src="./images/Work Day Scheduler.png"
                alt="Work Day Scheduler"
              />
            </a>

            <a
              className="repoLinks"
              href="https://github.com/andyr-dev/day-planner"
            >
              {" "}
              Work Day Scheduler Repo{" "}
            </a>
          </div>
          <div>
            <a href=" https://express-notes-taker-app.herokuapp.com/">
              <img
                id="grayscale"
                className="project"
                src="./images/Note Taker.png"
                alt="Note Taker"
              />
            </a>

            <a
              className="repoLinks"
              href="https://github.com/andyr-dev/express-notes-app"
            >
              {" "}
              Note Taker Repo{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
