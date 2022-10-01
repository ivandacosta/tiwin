import React from "react";
import { Link } from "react-router-dom";
//style
import "./Category.css";

//images
import Restaurante from "../../assets/restaurante.png";
import Kiosko from "../../assets/kiosko.png";
import Supermercado from "../../assets/supermercado.png";
import Tecnologia from "../../assets/tecnologia.png";
import Donar from "../../assets/donar.png";

const Category = () => {
  return (
    <div className="ContainerCategory">
      <h2>¿Que quieres pedir hoy?</h2>
      <div className="Category">
        <Link to="/restaurantes">
          <img className="CategoryEfect" src={Restaurante} alt="Restaurante" />
        </Link>

        <Link>
          <img className="CategoryEfect" src={Kiosko} alt="Restaurante" />
        </Link>

        <Link>
          <img className="CategoryEfect" src={Supermercado} alt="Restaurante" />
        </Link>

        <div className="selectorHidden">
          <Link>
            <img className="CategoryEfect" src={Tecnologia} alt="Restaurante" />
          </Link>
        </div>

        <div className="selectorHidden">
          <Link>
            <img className="CategoryEfect" src={Donar} alt="Restaurante" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
