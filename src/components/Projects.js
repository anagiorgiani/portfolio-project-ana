import React from "react";
import github from "../images/github.png";

export const Projects = () => {
  return (
    <div className="container" id="projects">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <a
              href="https://github.com/anagiorgiani/Projects-Trybe"
              target="_blank"
              rel="noreferrer"
            >
              <img className="profile-img" src={ github } alt="author..." />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Projetos</h1>
          <p>
            Durante o curso desenvolvi projetos bacanudos, utilizando
            tecnologias e ferramentas incriveis, e no final do módulo de
            Front-end um app de receitas maraaaavilhosooo, ficou curioso(a)?
            Clique no gatinho e se surpreenda!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
