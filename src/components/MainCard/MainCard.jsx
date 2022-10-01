import React from "react";

export function MainCard({ main }) {
  return (
    <div className="MainContainer">
      <div className="MainText">
        <div>
          <h4>{main.title}</h4>
        </div>

        <div className="MainPrice">
          <p>
            <span>{main.off}</span>
          </p>
          <p>
            <span className="SpanColor">Cupon: {main.cupon}</span>
          </p>
        </div>
      </div>

      <div className="MainImage">
        <img src={main.img} alt="no" />
      </div>
    </div>
  );
}
