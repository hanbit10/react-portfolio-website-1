import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/biverse.jpg";
import IMG2 from "../../assets/EveryCent.jpg";
import IMG3 from "../../assets/X-wing.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Ongoing Project: Biverse",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "Uni Project: EveryCent",
    github: "https://github.com/hanbit10/fleemarket",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "Minigame Project: X-Wing",
    github: "https://github.com/jonghwanchoi1002/shooting",
    demo: "https://flightshooting.netlify.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
