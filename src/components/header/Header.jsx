import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/hanbitcut.png";
import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Hanbit Chang</h1>
        <h className="text-light">Master Informatik at RWTH</h>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
