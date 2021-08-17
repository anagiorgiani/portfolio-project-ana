import React from "react";
import author from "../images/me.jpg";

const AboutMe = () => {
  return (
    <div className="container" id="about">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={ author } alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Sobre Mim</h1>
          <p>
            Olá! Eu sou Ana Carolina Giorgiani, estudante de desenvolvimento web
            na Trybe, em formação de desenvolvimento Fullstack. Estou em
            aprimoramento de tecnologias em Front-end como React, Redux, React
            Testing Library, metodologias ágeis como Kanbam e Scrum, voltadas a
            Back-end como SQL, MongoDB, NodeJs, dominando o uso de bancos de
            dados e a construção de APIs com testes automatizados. Formada em
            enfermagem, em transição de carreira, apaixonada por tencologia onde
            busco me aprimorar e desenvolver minhas Soft Skils e Hard Skiils.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
