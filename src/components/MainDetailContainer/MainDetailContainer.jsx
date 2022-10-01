import React from "react";

//products
import mainProducts from "../../products/main";

//component card
import { MainCard } from "../MainCard/MainCard";

//style
import "./MainDetailContainer.css";
import { useState } from "react";
import { useEffect } from "react";

const MainDetailContainer = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mainProducts);
      }, 2000);
    });
    getData.then((res) => setProducts(res));
  }, []);
  return (
    <div className="MainDetailText">
      <h2>¿Querias promociones?</h2>
      <div className="MainDetailContainer">
        {Products.map((main) => {
          return <MainCard main={main} />;
        })}
      </div>
    </div>
  );
};

export default MainDetailContainer;
