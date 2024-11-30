import React from "react";
import "./ProductGrid.css";

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className={`product-image ${
              product.title === "Compressed Salt" ? "compressed-salt" : ""
            }`}
          />
          <div className="product-details">
            <h3>{product.title}</h3>
            <p>{product.size}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
