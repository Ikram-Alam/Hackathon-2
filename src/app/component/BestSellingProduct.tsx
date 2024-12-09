// "use client"
// import React from "react";

// const BestSellingProducts: React.FC = () => {
//   return (
//     <div className="best-selling-products">
//       <div className="header">
//         <h2>This Month</h2>
//         <h3>Best Selling Products</h3>
//         <button className="view-all">View All</button>
//       </div>

//       <div className="product-list">
//         <div className="product-card">
//           <img src="Best (4).png" alt="The north coat" className="product-image" />
//           <h3 className="product-title">The north coat</h3>
//           <p className="product-pricing">
//             $260 <span className="original-price">$360</span>
//           </p>
//           <div className="rating">★★★★★ (65)</div>
//         </div>

//         <div className="product-card">
//           <img src="Best (2).png" alt="Gucci duffle bag" className="product-image" />
//           <h3 className="product-title">Gucci duffle bag</h3>
//           <p className="product-pricing">
//             $960 <span className="original-price">$1160</span>
//           </p>
//           <div className="rating">★★★★★ (65)</div>
//         </div>

//         <div className="product-card">
//           <img src="Best (3).png" alt="RGB liquid CPU Cooler" className="product-image" />
//           <h3 className="product-title">RGB liquid CPU Cooler</h3>
//           <p className="product-pricing">
//             $160 <span className="original-price">$170</span>
//           </p>
//           <div className="rating">★★★★★ (65)</div>
//         </div>

//         <div className="product-card">
//           <img src="Best (1).png" alt="Small BookShelf" className="product-image" />
//           <h3 className="product-title">Small BookShelf</h3>
//           <p className="product-pricing">
//             $360
//           </p>
//           <div className="rating">★★★★★ (65)</div>
//         </div>
//       </div>

//       <style jsx>{`
//         .best-selling-products {
//           width: 1170px;
//           height: 518px;
//           margin: auto;
//           background-color: #fff;
//           opacity: 0;
//           display: flex;
//           flex-direction: column;
//           gap: 60px;
//         }

//         .header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .header h2 {
//           color: red;
//           font-size: 16px;
//         }

//         .header h3 {
//           font-size: 24px;
//           font-weight: bold;
//         }

//         .view-all {
//           background-color: #e74c3c;
//           color: white;
//           padding: 10px 20px;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//         }

//         .product-list {
//           display: flex;
//           gap: 60px;
//         }

//         .product-card {
//           width: 270px;
//           height: 350px;
//           background-color: #f9f9f9;
//           padding: 16px;
//           display: flex;
//           flex-direction: column;
//           gap: 16px;
//           opacity: 0;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//         }

//         .product-image {
//           width: 100%;
//           height: auto;
//           border-radius: 4px;
//         }

//         .product-title {
//           font-size: 18px;
//           font-weight: bold;
//         }

//         .product-pricing {
//           font-size: 16px;
//         }

//         .original-price {
//           text-decoration: line-through;
//           color: #888;
//         }

//         .rating {
//           font-size: 14px;
//           color: #f1c40f;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BestSellingProducts;

"use client"
import React from "react";

const BestSellingProducts: React.FC = () => {
  return (
    <div className="best-selling-products">
      <div className="header">
        <h2>This Month</h2>
        <h3>Best Selling Products</h3>
        <button className="view-all">View All</button>
      </div>

      <div className="product-list">
        <div className="product-card">
          <img src="Best (4).png" alt="The north coat" className="product-image" />
          <h3 className="product-title">The north coat</h3>
          <p className="product-pricing">
            $260 <span className="original-price">$360</span>
          </p>
          <div className="rating">★★★★★ (65)</div>
        </div>

        <div className="product-card">
          <img src="Best (2).png" alt="Gucci duffle bag" className="product-image" />
          <h3 className="product-title">Gucci duffle bag</h3>
          <p className="product-pricing">
            $960 <span className="original-price">$1160</span>
          </p>
          <div className="rating">★★★★★ (65)</div>
        </div>

        <div className="product-card">
          <img src="Best (3).png" alt="RGB liquid CPU Cooler" className="product-image" />
          <h3 className="product-title">RGB liquid CPU Cooler</h3>
          <p className="product-pricing">
            $160 <span className="original-price">$170</span>
          </p>
          <div className="rating">★★★★★ (65)</div>
        </div>

        <div className="product-card">
          <img src="Best (1).png" alt="Small BookShelf" className="product-image" />
          <h3 className="product-title">Small BookShelf</h3>
          <p className="product-pricing">
            $360
          </p>
          <div className="rating">★★★★★ (65)</div>
        </div>
      </div>

      <style jsx>{`
        .best-selling-products {
          position: relative;
          width: 1170px;
          height: 518px;
          top: 1868px;
          left: 135px;
          gap: 60px;
          opacity: 1; /* Ensure visibility */
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header h2 {
          color: red;
          font-size: 16px;
        }

        .header h3 {
          font-size: 24px;
          font-weight: bold;
        }

        .view-all {
          background-color: #e74c3c;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .product-list {
          display: flex;
          flex-wrap: nowrap; /* Ensure the products stay in a single line */
          gap: 60px; /* Space between the products */
          overflow-x: auto; /* Allow horizontal scrolling if products overflow */
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
      `}</style>
    </div>
  );
};

export default BestSellingProducts;
