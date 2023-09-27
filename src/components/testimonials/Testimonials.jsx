import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/hanbitcut.png";
import AVTR2 from "../../assets/1bit logo example.png";
import AVTR3 from "../../assets/0025_23 222.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Hanbit Chang",
    review: "Heeeelo",
  },
  {
    avatar: AVTR2,
    name: "Hanbit Chang",
    review: "Heeeelo",
  },
  {
    avatar: AVTR3,
    name: "Hanbit Chang",
    review: "Heeeelo",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
