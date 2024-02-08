import React from "react";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="d-none d-md-block pt-4 px-4">
        <img src={process.env.PUBLIC_URL + "/assets/me.jpg"} alt="Me" />
        <p className="mt-4 info">
          I'm <strong>Aaron Barlas Labini</strong>, a graduating student taking
          up BS Information Technology at Bicol University. Currently doing my
          OJT at the Department of Information and Communications Technology (
          <b>DICT</b>
          ). I created this blog to share my experiences, insights, and
          reflections on my OJT journey, as well as to showcase some of the
          projects and tasks that I've been working on.
        </p>
        <div className="row">
          <div className="col-3">
            <a
              href="https://www.facebook.com/aaronSagittaire/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bi bi-facebook fs-4"></span>
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.linkedin.com/in/aaron-labini-101164241/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bi bi-linkedin fs-4"></span>
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://github.com/sagitace"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bi bi-github fs-4"></span>
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.instagram.com/sagitace/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bi bi-instagram fs-4"></span>
            </a>
          </div>
        </div>
        <div className="mt-3">
          <a href="mailto:aaronbarlas.labini@gmail.com">
            aaronbarlas.labini@gmail.com
          </a>{" "}
          <br />
          <a href="tel:+639318924911">09318924911</a>
        </div>
      </div>
      <div className="d-md-none">
        <div className="row p-4 mb-5">
          <div className="col-4">
            {" "}
            <img src={process.env.PUBLIC_URL + "/assets/me.jpg"} alt="Me" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-12">
                I'm <strong>Aaron Barlas Labini</strong>, a graduating student
                taking up BS Information Technology at Bicol University.
                Currently doing my OJT at the Department of Information and
                Communications Technology (<b>DICT</b>
                ).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
