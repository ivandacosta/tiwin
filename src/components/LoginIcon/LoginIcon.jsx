import React from "react";

//icons
import { BiLogIn } from "react-icons/bi";

//style
import "./LoginIcon.css";

export const LoginIcon = () => {
  return (
    <div className="LoginIcon">
      <BiLogIn className="Bilogin" />
      <p>Iniciar sesion</p>
    </div>
  );
};
