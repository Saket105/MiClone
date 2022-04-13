import React from "react";
import "../styles/starProduct.css";


const StarProduct = ({ starProducts }) => {
  return (
    <div className="starProduct">
      <div>
        <a href={starProducts[0].url}>
          {" "}
          <img src={starProducts[0].image} alt="!st product" />
        </a>
      </div>
      <div>
        <a href={starProducts[1].url}>
          <img src={starProducts[1].image} alt="!st product" />
        </a>
        <a href={starProducts[2].url}>
          <img src={starProducts[2].image} alt="!st product" />
        </a>
        <a href={starProducts[3].url}>
          <img src={starProducts[3].image} alt="!st product" />
        </a>
      </div>
    </div>
  );
};

export default StarProduct;
