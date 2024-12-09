"use client"
import React from "react";

const Products = () => {
  return (
    <>
      <style jsx>{`
        .container {
          width: 1170px;
          margin: 0 auto;
          padding: 20px;
        }

        .heading {
          text-align: center;
          font-size: 24px;
          margin-bottom: 40px;
        }

        .productsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 16px;
        }

        .productCard {
          width: 270px;
          height: 322px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .productImage {
          width: 100%;
          height: 150px;
          object-fit: contain;
          margin-bottom: 16px;
        }

        .productDetails {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }

        .productName {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .productPrice {
          font-size: 14px;
          color: #333;
          margin-bottom: 8px;
        }

        .rating {
          display: flex;
          gap: 2px;
          margin-top: 8px;
        }

        .star {
          font-size: 14px;
          color: #ff9800;
        }

        .star.empty {
          color: #e0e0e0;
        }

        .addToCart {
          margin-top: 16px;
          background-color: black;
          color: white;
          border: none;
          padding: 8px 12px;
          cursor: pointer;
          border-radius: 4px;
          font-size: 14px;
        }

        .newBadge {
          position: absolute;
          top: 16px;
          left: 16px;
          background-color: green;
          color: white;
          font-size: 12px;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .viewAllButton {
          display: block;
          margin: 40px auto;
          background-color: red;
          color: white;
          border: none;
          padding: 12px 20px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 4px;
        }
      `}</style>
      <div className="container">
        <h2 className="heading">Explore Our Products</h2>
        <div className="productsGrid">
          {[
            { name: "Breed Dry Dog Food", price: "$100", rating: 3, image: "Cart (7).png" },
            { name: "CANON EOS DSLR Camera", price: "$360", rating: 5, image: "Cart (1).png", isFeatured: true },
            { name: "ASUS FHD Gaming Laptop", price: "$700", rating: 4, image: "Cart (2).png" },
            { name: "Curology Product Set", price: "$500", rating: 4, image: "Cart.jpg" },
            { name: "Kids Electric Car", price: "$960", rating: 5, image: "Cart (3).png", isNew: true },
            { name: "Jr. Zoom Soccer Cleats", price: "$1160", rating: 2, image: "Cart (4).png", isNew: true },
            { name: "GP11 Shooter USB Gamepad", price: "$660", rating: 3, image: "Cart (5).png", isNew: true },
            { name: "Quilted Satin Jacket", price: "$660", rating: 4, image: "Cart (6).png" },
          ].map((product, index) => (
            <div key={index} className="productCard">
              {product.isNew && <span className="newBadge">NEW</span>}
              <img src={product.image} alt={product.name} className="productImage" />
              <div className="productDetails">
                <h3 className="productName">{product.name}</h3>
                <p className="productPrice">{product.price}</p>
                <div className="rating">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className={`star ${i < product.rating ? "" : "empty"}`}>
                        ★
                      </span>
                    ))}
                </div>
              </div>
              {/* {product.isFeatured && <button className="addToCart">Add To Cart</button>} */}
            </div>
          ))}
        </div>
        <button className="viewAllButton">View All Products</button>
      </div>
    </>
  );
};

export default Products;
