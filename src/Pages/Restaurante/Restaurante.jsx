import React, { useState } from "react";
import { useEffect } from "react";

import { Restaurantes } from "../../products/restaurantes";

export const Restaurante = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Restaurantes);
      }, 2000);
    });
    getData.then((res) => setProducts(res));
  });

  return (
    <div>
      {Products.map((prod) => {
        return;
      })}
    </div>
  );
};
