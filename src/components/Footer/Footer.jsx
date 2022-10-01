import React from "react";

//logo
import Logo from "../../assets/logo.png";

//icons
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

//Style
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div>
        <div className="FooLogo">
          <h3>
            <img src={Logo} alt="" /> Tiwin
          </h3>
        </div>

        <div>
          <p>Cumplimos 5 Años</p>
          <p>Pedi desde tu casa sin moverte</p>
        </div>
      </div>

      <div>
        <div className="FooLocation">
          <h3>Oficinas en Palermo Soho</h3>
          <p>Gurruchaga 2000</p>
        </div>
      </div>

      <div>
        <div className="Social">
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
      </div>
    </footer>
  );
}
