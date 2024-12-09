"use client";
import React from "react";

const FlashSales: React.FC = () => {
  return (
    <div className="flash-sales">
      <div className="header">
        <h2>Today's Flash Sales</h2>
        <div className="timer">
          <div>
            <span>03</span>
            <small>Days</small>
          </div>
          <div>
            <span>23</span>
            <small>Hours</small>
          </div>
          <div>
            <span>19</span>
            <small>Minutes</small>
          </div>
          <div>
            <span>56</span>
            <small>Seconds</small>
          </div>
        </div>
      </div>

      <div className="product-list">
        {/* Single Product Card */}
        <div className="product-card">
          <div className="discount-badge">-40%</div>
          <img src="Flash (1).png" alt="HAVIT HV-G92 Gamepad" className="product-image" />
          <h3 className="product-title">HAVIT HV-G92 Gamepad</h3>
          <p className="product-pricing">
            $120 <span className="original-price">$160</span>
          </p>
          <div className="rating">★★★★★ (88)</div>
        </div>

        <div className="product-card">
          <div className="discount-badge">-35%</div>
          <img src="Flash (2).png" alt="AK-900 Wired Keyboard" className="product-image" />
          <h3 className="product-title">AK-900 Wired Keyboard</h3>
          <p className="product-pricing">
            $960 <span className="original-price">$1160</span>
          </p>
          <div className="rating">★★★★☆ (75)</div>
        </div>

        <div className="product-card">
          <div className="discount-badge">-30%</div>
          <img src="Flash (3).png" alt="IPS LCD Gaming Monitor" className="product-image" />
          <h3 className="product-title">IPS LCD Gaming Monitor</h3>
          <p className="product-pricing">
            $370 <span className="original-price">$400</span>
          </p>
          <div className="rating">★★★★★ (99)</div>
        </div>

        <div className="product-card">
          <div className="discount-badge">-25%</div>
          <img src="Flash (4).png" alt="S-Series Comfort Chair" className="product-image" />
          <h3 className="product-title">S-Series Comfort Chair</h3>
          <p className="product-pricing">
            $375 <span className="original-price">$400</span>
          </p>
          <div className="rating">★★★★★ (99)</div>
        </div>
      </div>

      {/* <button className="view-all">View All Products</button> */}

      <style jsx>{`
        .flash-sales {
          width: 1308px;
          height: auto;
          padding: 20px;
          margin: 50px auto 40px auto; /* Add top margin to prevent overlap */
          background-color: #fff;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 24px;
          font-weight: bold;
        }

        .timer {
          display: flex;
          gap: 10px;
          font-size: 14px;
          font-weight: bold;
          justify-content: center;
        }

        .timer div {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 16px;
        }

        .product-list {
          display: flex;
          gap: 40px;
          flex-wrap: wrap; /* Ensure products wrap to the next line if needed */
        }

        .product-card {
          width: 270px;
          height: 350px;
          background-color: #f9f9f9;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .discount-badge {
          background-color: red;
          color: white;
          font-size: 14px;
          padding: 4px 8px;
          border-radius: 4px;
          align-self: flex-start;
        }

        .product-image {
          width: 100%;
          height: auto;
          border-radius: 4px;
        }

        .product-title {
          font-size: 18px;
          font-weight: bold;
        }

        .product-pricing {
          font-size: 16px;
        }

        .original-price {
          text-decoration: line-through;
          color: #888;
        }

        .rating {
          font-size: 14px;
          color: #f1c40f;
        }

        .add-to-cart {
          background-color: black;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .view-all {
          background-color: #e74c3c;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          align-self: center;
        }
      `}</style>
    </div>
  );
};

export default FlashSales;
