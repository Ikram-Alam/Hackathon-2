// import React from "react";

// const HeroSection: React.FC = () => {
//   return (
//     <div style={styles.heroContainer}>
//       {/* Categories Section */}
//       <div style={styles.categoriesContainer}>
//         <ul style={styles.categoriesList}>
//           <li style={styles.categoryItem}>Electronics</li>
//           <br/>
//           <li style={styles.categoryItem}>Fashion</li>
//           <br/>
//           <li style={styles.categoryItem}>Home Appliances</li>
//           <br/>
//           <li style={styles.categoryItem}>Beauty & Health</li>
//           <br/>
//           <li style={styles.categoryItem}>Sports</li>
//           <br/>
//           <li style={styles.categoryItem}>Toys</li>
//           <br/>
//           <li style={styles.categoryItem}>Automobile</li>
//           <br/>
//           <li style={styles.categoryItem}>Groceries</li>
//         </ul>
//       </div>

//       {/* Banner Section */}
//       <div style={styles.bannerContainer}>
//         <div style={styles.textContainer}>
//           <div style={styles.logoSection}>
//             <img
//               src="apple.png" // Replace with your image path
//               alt="Apple Logo"
//               style={styles.logoImage}
//             />
//             <p style={styles.subtitle}>iPhone 14 Series</p>
//           </div>
//           <h1 style={styles.heading}>Up to 10% off Voucher</h1>
//           <a href="#" style={styles.shopNowLink}>
//             Shop Now →
//           </a>
//         </div>
//         <div style={styles.imageContainer}>
//           <img
//             src="banner.jpg" // Replace with your image path
//             alt="iPhone 14 Banner"
//             style={styles.bannerImage}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   heroContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     width: "1109px", // Total width for both categories and banner
//     height: "344px",
//     position: "absolute",
//     top: "182px",
//     left: "135px",
//     backgroundColor: "#FFFFFF",
//   } as React.CSSProperties,

//   /* Categories Section */
//   categoriesContainer: {
//     width: "217px",
//     height: "344px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "16px",
//   } as React.CSSProperties,
//   categoriesList: {
//     listStyleType: "none",
//     margin: 0,
//     padding: 0,
//   } as React.CSSProperties,
//   categoryItem: {
//     fontFamily: "Poppins, sans-serif",
//     fontSize: "16px",
//     fontWeight: "400",
//     color: "#000000",
//     lineHeight: "24px",
//     cursor: "pointer",
//     transition: "color 0.3s",
//   } as React.CSSProperties,

//   /* Banner Section */
//   bannerContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "892px",
//     height: "344px",
//     backgroundColor: "#000000",
//     borderRadius: "8px",
//     overflow: "hidden",
//   } as React.CSSProperties,
//   textContainer: {
//     padding: "40px",
//     color: "#FFFFFF",
//     maxWidth: "50%",
//   } as React.CSSProperties,
//   logoSection: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "16px",
//   } as React.CSSProperties,
//   logoImage: {
//     width: "24px",
//     height: "24px",
//     marginRight: "8px",
//   } as React.CSSProperties,
//   subtitle: {
//     fontFamily: "Poppins, sans-serif",
//     fontSize: "16px",
//     fontWeight: "400",
//     color: "#FAFAFA",
//   } as React.CSSProperties,
//   heading: {
//     fontFamily: "Inter, sans-serif",
//     fontSize: "48px",
//     fontWeight: "600",
//     lineHeight: "60px",
//     color: "#FAFAFA",
//     marginBottom: "24px",
//   } as React.CSSProperties,
//   shopNowLink: {
//     display: "inline-block",
//     fontFamily: "Poppins, sans-serif",
//     fontSize: "16px",
//     fontWeight: "600",
//     textDecoration: "none",
//     color: "#FFFFFF",
//     // backgroundColor: "#FF0000",
//     padding: "10px 20px",
//     borderRadius: "4px",
//   } as React.CSSProperties,
//   imageContainer: {
//     width: "50%",
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   } as React.CSSProperties,
//   bannerImage: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   } as React.CSSProperties,
// };

// export default HeroSection;

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div style={styles.heroContainer}>
      {/* Categories Section */}
      <div style={styles.categoriesContainer}>
        <ul style={styles.categoriesList}>
          <li style={styles.categoryItem}>Electronics</li>
          <li style={styles.categoryItem}>Fashion</li>
          <li style={styles.categoryItem}>Home Appliances</li>
          <li style={styles.categoryItem}>Beauty & Health</li>
          <li style={styles.categoryItem}>Sports</li>
          <li style={styles.categoryItem}>Toys</li>
          <li style={styles.categoryItem}>Automobile</li>
          <li style={styles.categoryItem}>Groceries</li>
        </ul>
      </div>

      {/* Banner Section */}
      <div style={styles.bannerContainer}>
        <div style={styles.textContainer}>
          <div style={styles.logoSection}>
            <img
              src="apple.png" // Replace with your image path
              alt="Apple Logo"
              style={styles.logoImage}
            />
            <p style={styles.subtitle}>iPhone 14 Series</p>
          </div>
          <h1 style={styles.heading}>Up to 10% off Voucher</h1>
          <a href="#" style={styles.shopNowLink}>
            Shop Now →
          </a>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="banner.jpg" // Replace with your image path
            alt="iPhone 14 Banner"
            style={styles.bannerImage}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    position: "relative",
    width: "100%",
    height: "344px", // Full height for both sections
    backgroundColor: "#FFFFFF",
    display: "flex", // Ensure that both categories and banner are aligned horizontally
    alignItems: "center", // Vertically center the contents
    justifyContent: "space-between", // Space between categories and banner
  } as React.CSSProperties,

  /* Categories Section */
  categoriesContainer: {
    width: "217px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    opacity: 1, // Set opacity to 1 to make it visible
  } as React.CSSProperties,

  categoriesList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  } as React.CSSProperties,

  categoryItem: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "16px",
    fontWeight: "400",
    color: "#000000",
    lineHeight: "24px",
    cursor: "pointer",
    transition: "color 0.3s",
    padding: "8px 0", // Space between categories
  } as React.CSSProperties,

  /* Banner Section */
  bannerContainer: {
    width: "892px",
    height: "344px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: "8px",
    overflow: "hidden",
    opacity: 1, // Set opacity to 1 to make it visible
  } as React.CSSProperties,

  textContainer: {
    padding: "40px",
    color: "#FFFFFF",
    maxWidth: "50%",
  } as React.CSSProperties,

  logoSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  } as React.CSSProperties,

  logoImage: {
    width: "24px",
    height: "24px",
    marginRight: "8px",
  } as React.CSSProperties,

  subtitle: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "16px",
    fontWeight: "400",
    color: "#FAFAFA",
  } as React.CSSProperties,

  heading: {
    fontFamily: "Inter, sans-serif",
    fontSize: "48px",
    fontWeight: "600",
    lineHeight: "60px",
    color: "#FAFAFA",
    marginBottom: "24px",
  } as React.CSSProperties,

  shopNowLink: {
    display: "inline-block",
    fontFamily: "Poppins, sans-serif",
    fontSize: "16px",
    fontWeight: "600",
    textDecoration: "none",
    color: "#FFFFFF",
    padding: "10px 20px",
    borderRadius: "4px",
  } as React.CSSProperties,

  imageContainer: {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties,

  bannerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  } as React.CSSProperties,
};

export default HeroSection;
