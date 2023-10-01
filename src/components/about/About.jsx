import React from "react";
import "./about.css";
import ME from "../../assets/IMG_20220523_171322_730.jpg";
import { TbAward } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <TbAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <BiUser className="about_icon" />
              <h5>User</h5>
              <small>100 People</small>
            </article>
            <article className="about_card">
              <AiOutlineProject className="about_icon" />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            repellendus, magni tempore ipsam molestiae alias cupiditate quo,
            fugit et voluptate omnis quam enim accusamus. Eos ad hic ab maxime
            placeat.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
