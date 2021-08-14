import React from "react";
import javascript from "../javas.png";
import es6 from "../ES6.png";
import css from "../css1.png";
import html from "../html5.png";
import react from "../react1.png";
import redux from "../reduux.png";
import jest from "../jest2.png";
import git from "../git.png";
import mongo from "../mongo2.png";
import sql from "../sql.png";
import mona from "../lovelace.jpg";
import "../App2.css";

export const Technology = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <a
              href="https://pt.wikipedia.org/wiki/Ada_Lovelace"
              target="_blank"
            >
              <img className="profile-img" src={mona} alt="author..." />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Tecnologias</h1>

          <div class="container">
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div class="col">
                <div>
                  <img className="img" src={javascript} alt="logo javascript" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="es6" src={es6} alt="logo es6" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="css" src={css} alt="logo css" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="html" src={html} alt="logo html" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="react" src={react} alt="logo react" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="redux" src={redux} alt="logo redux" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="jest" src={jest} alt="logo jest" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="git" src={git} alt="logo git" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="mongo" src={mongo} alt="logo mongo" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="sql" src={sql} alt="logo sql" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
