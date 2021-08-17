import React from "react";
import javascript from "../images/javascript.png";
import node from "../images/node.jpg";
import css from "../images/css.png";
import html from "../images/html5.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import jest from "../images/jest.png";
import git from "../images/git.png";
import mongo from "../images/mongo.png";
import sql from "../images/sql.png";
import mona from "../images/lovelace.jpg";

export const Technology = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <a href="https://pt.wikipedia.org/wiki/Ada_Lovelace" target="blank">
              <img className="profile-img" src={ mona } alt="author..." />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Tecnologias</h1>

          <div class="container">
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div class="col">
                <div>
                  <img className="img" src={ javascript } alt="logo javascript" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="es6" src={ node } alt="logo es6" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="css" src={ css } alt="logo css" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="html" src={ html } alt="logo html" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="react" src={ react } alt="logo react" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="redux" src={ redux } alt="logo redux" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="jest" src={ jest } alt="logo jest" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="git" src={ git } alt="logo git" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="mongo" src={ mongo } alt="logo mongo" />
                </div>
              </div>
              <div class="col">
                <div>
                  <img className="sql" src={ sql } alt="logo sql" />
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
