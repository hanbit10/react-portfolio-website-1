import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/1bit logo example.png";
import IMG2 from "../../assets/0004_2.jpg";
import IMG3 from "../../assets/0025_23 222.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "1Bit",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "1Bit",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "1Bit",
    github: "https://github.com",
    demo: "",
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
