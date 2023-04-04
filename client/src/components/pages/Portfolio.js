import React from 'react';

export default function Home() {
  return (
    <section id="portfolio" className="content-section">


      <div id="work-title" className="content-title">My Projects</div>
      <div id="work-content" >

        <div className="workapp" >
          <div id="workapp1" className="workapp-child">
            <a href="https://github.com/winglovecola/love-link" target="_blank" rel="noreferrer">
              <div>
                <h2>Love Link</h2>

                <span>Firebase Chat / Virtual AI</span>
              </div>
            </a>
          </div>

          <div id="workapp2" className="workapp-child">
            <a href="https://github.com/winglovecola/vacation-inspiration" target="_blank" rel="noreferrer">
              <div>
                <h2>Vacation Inspriation</h2>

                <span>Google Map API / Open AI (ChatGPT)</span>
              </div>
            </a>
          </div>

          <div id="workapp5" className="workapp-child">
            <a href="https://telemedmd.ca/" target="_blank" rel="noreferrer">
              <div>
                <h2>Telemed MD</h2>

                <span>Ionic / iOS & Android App</span>
              </div>
            </a>
          </div>

          <div id="workapp6" className="workapp-child">

            <a href="https://github.com/winglovecola/oracle" target="_blank" rel="noreferrer">
              <div>
                <h2>Oracle</h2>

                <span>Voice Recognition / Text to Speech</span>
              </div>
            </a>
          </div>

          <div id="workapp7" className="workapp-child">
            <a href="https://github.com/winglovecola/weather-mate" target="_blank" rel="noreferrer">
              <div>
                <h2>Weather Mate</h2>

                <span>HTML / REST Api</span>
              </div>
            </a>
          </div>

          <div id="workapp8" className="workapp-child">
            <a href="https://www.cs.cmu.edu/~efros/courses/LBMV07/Papers/tu-ijcv-05.pdf" target="_blank" rel="noreferrer">
              <div>
                <h2>Witomy</h2>

                <span>Image Parsing / Data Security</span>
              </div>
            </a>
          </div>

          <div id="workapp9" className="workapp-child">
            <a href="https://bootcamp.learn.utoronto.ca/" target="_blank" rel="noreferrer">
              <div>
                <h2>UofT Full Stack Bootcamp</h2>

                <span>JavaScript / React / MERN</span>
              </div>
            </a>
          </div>

        </div>

      </div>

    </section>

  );
}
