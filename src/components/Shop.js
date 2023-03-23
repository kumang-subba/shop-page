/* eslint-disable react/prop-types */
import React from "react";
import Product from "./Product";

function Shop({ products, handleClick }) {
  return (
    <div className="shop">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
