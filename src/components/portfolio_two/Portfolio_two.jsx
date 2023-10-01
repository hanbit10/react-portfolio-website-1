import React from "react";
import "./portfolio_two.css";
import IMG1 from "../../assets/biverse.jpg";
import IMG2 from "../../assets/EveryCent.jpg";
import IMG3 from "../../assets/X-wing.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: IMG1,
    title: "Ongoing Project: Biverse",
    description: "Heeeelo",
    github: "",
    demo: "",
    demoname: "",
  },
  {
    image: IMG2,
    title: "Uni Project: EveryCent",
    description: "Heeeelo",
    github: "https://github.com/hanbit10/fleemarket",
    demo: "",
    demoname: "",
  },
  {
    image: IMG3,
    title: "Minigame Project: X-Wing",
    description: "Heeeelo",
    github: "https://github.com/jonghwanchoi1002/shooting",
    demo: "https://flightshooting.netlify.app/",
    demoname: "Demo Live",
  },
];

const PortfolioTwo = () => {
  return (
    <section id="testimonials">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(
          ({ image, title, description, demo, demoname, github }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="portfolio_description_container">
                  <div>
                    <h3 className="client_name">{title}</h3>
                    <img src={image} alt="Avatar 1" />
                    <a href={github} type="button" className="btn">
                      Github
                    </a>
                    <a href={demo} type="button" className="btn">
                      {demoname}
                    </a>
                  </div>
                  <div>
                    <p className="client_review">{description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default PortfolioTwo;
