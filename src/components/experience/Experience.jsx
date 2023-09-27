import React from "react";
import "./experience.css";
import { BsCheckCircleFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsCheckCircleFill className="experience_details-icon" />
              <div>
                <h4>HTML/CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className="experience_details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className="experience_details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* End of Frontend */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsCheckCircleFill className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className="experience_details-icon" />
              <div>
                <h4>Dafny</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className="experience_details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
