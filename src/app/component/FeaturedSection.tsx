"use client";

import React from "react";

const FeaturedSection: React.FC = () => {
  return (
    <div className="featured-section">
      {/* Header */}
      <div className="header">
        <h2 className="featured">Featured</h2>
        <h3 className="new-arrival">New Arrival</h3>
      </div>

      {/* Main Grid */}
      <div className="grid">
        {/* Large Image */}
        <div className="large-card">
          <img src="f1.png" alt="PlayStation 5" className="image" />
          <div className="text">
            <h4>PlayStation 5</h4>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <button>Shop Now</button>
          </div>
        </div>

        {/* Small Cards */}
        <div className="small-cards">
          <div className="small-card">
            <img src="f2.jpg" alt="Women's Collections" className="image" />
            <div className="text">
              <h4>Women's Collections</h4>
              <p>Featured women collections that give you another vibe.</p>
              <button>Shop Now</button>
            </div>
          </div>

          <div className="small-grid">
            <div className="small-card">
              <img src="f3.png" alt="Speakers" className="image" />
              <div className="text">
                <h4>Speakers</h4>
                <p>Amazon wireless speakers</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="small-card">
              <img src="f4.png" alt="Perfume" className="image" />
              <div className="text">
                <h4>Perfume</h4>
                <p>GUCCI INTENSE OUD EDP</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .featured-section {
          width: 1170px;
          height: 768px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 60px;
          opacity: 1;
        }

        .header {
          display: flex;
          flex-direction: column;
        }

        .featured {
          color: red;
          font-size: 16px;
        }

        .new-arrival {
          font-size: 36px;
          font-weight: bold;
        }

        .grid {
          display: flex;
          gap: 20px;
        }

        .large-card {
          flex: 2;
          position: relative;
          overflow: hidden;
        }

        .large-card .image {
          width: 100%;
          height: auto;
          object-fit: cover;
          background-color: black;
        }

        .large-card .text {
          position: absolute;
          bottom: 20px;
          left: 20px;
          color: white;
        }

        .large-card h4 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .large-card button {
          padding: 10px 20px;
          background-color: #e74c3c;
          color: white;
          border: none;
          cursor: pointer;
        }

        .small-cards {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .small-card {
          position: relative;
          overflow: hidden;
        }

        .small-card .image {
          width: 100%;
          height: auto;
          object-fit: cover;
          background-color: black;
        }

        .small-card .text {
          position: absolute;
          bottom: 20px;
          left: 20px;
          color: white;
        }

        .small-grid {
          display: flex;
          gap: 20px;
        }

        .small-grid .small-card {
          flex: 1;
        }

        .small-card h4 {
          font-size: 18px;
          margin-bottom: 5px;
        }

        .small-card button {
          padding: 5px 15px;
          background-color: #e74c3c;
          color: white;
          border: none;
          cursor: pointer;
        }

      `}</style>
    </div>
  );
};

export default FeaturedSection;
