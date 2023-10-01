import React from "react";
import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div>
      <div className="header_socials">
        <a href="https://linkedin.com" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank">
          <BsGithub />
        </a>
        <a href="https://dribbble.com" target="_blank">
          <BsDribbble />
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
