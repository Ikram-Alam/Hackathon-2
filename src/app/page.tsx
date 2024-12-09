// import MusicExperience from "./component/BestProduct";
// import ImageComponent from "./component/BestProduct";
// import BrowseByCategory from "./component/Category";
// import Features from "./component/Features";
// import FlashSales from "./component/FlashSales";
// import HeroSection from "./component/HeroSection";
// import Line from "./component/Line";
// import Navbar from "./component/Navbar";
// import Product from "./component/Product";

// export default function Home() {
//   return (
//     <>
//     {/* <Navbar/>
//     <HeroSection/> */}
//       <div style={styles.appContainer}>
//       {/* Navbar */}
//       <Navbar />
//       {/* Main Content */}
//       <main style={styles.mainContent}>
//         <HeroSection />
        
//       </main>
//     </div>
//     <FlashSales/>
//     <Line/>
//     <BrowseByCategory/>
//     <Product/>
//     <MusicExperience/>
//     <Features/>
    
    
//     </>
//   );
// }
// const styles = {
//   appContainer: {
//     display: "flex",
//     flexDirection: "column",
//     minHeight: "100vh", // Full height of the viewport
//   } as React.CSSProperties,

//   mainContent: {
//     flex: 1, // Pushes the footer to the bottom if content is short
//     padding: "20px",
//   } as React.CSSProperties,
// };
import MusicExperience from "./component/BestProduct";
import BestSellingProducts from "./component/BestSellingProduct";
import BrowseByCategory from "./component/Category";
import ContactSection from "./component/Contact";
import FeaturedSection from "./component/FeaturedSection";
import Features from "./component/Features";
import FlashSales from "./component/FlashSales";
import HeroSection from "./component/HeroSection";
import Line from "./component/Line";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import LandingPage from "./component/Sign_up";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div style={styles.mainContainer}>
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <HeroSection />
        </section>

        {/* Flash Sales */}
        <section style={styles.flashSalesSection}>
          <FlashSales />
        </section>

        {/* Line */}
        <section style={styles.lineSection}>
          <Line />
        </section>

        {/* Browse by Category */}
        <section style={styles.section}>
          <BrowseByCategory />
        </section>

        {/* Browse by BestSellingProduct */}
        {/* <section style={styles.BestSellingProducts}>
          <BestSellingProducts/>
        </section> */}

        {/* Product Section */}
        <section style={styles.section}>
          <Product />
        </section>

        {/* Music Experience Section */}
        <section style={styles.section}>
          <MusicExperience />
        </section>
        <FeaturedSection/>
        {/* Features Section */}
        <section style={styles.section}>
          <Features />
        </section>
      </div>
    </>
  );
}

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px", // Consistent spacing between sections
    padding: "20px",
    backgroundColor: "#f8f8f8", // Light background for better contrast
    margin: "0 auto", // Ensure centering of all content in the container
  } as React.CSSProperties,

  heroSection: {
    width: "100%",
    maxWidth: "1170px",
    margin: "0 auto",
    marginTop: "80px", // Add margin top to push the HeroSection below the Navbar
    marginBottom: "60px", // Ensure space after HeroSection to avoid overlap with FlashSales
    paddingBottom: "20px", // Padding to separate content inside HeroSection
  } as React.CSSProperties,

  flashSalesSection: {
    width: "100%",
    maxWidth: "1170px",
    margin: "0 auto",
    paddingTop: "20px", // Ensure padding from top to prevent overlap with previous section
    paddingBottom: "40px", // Add padding to bottom to avoid overlap with next section
  } as React.CSSProperties,

  section: {
    width: "100%",
    maxWidth: "1170px", // Consistent maximum width for sections
    margin: "0 auto",
    paddingTop: "40px", // Add padding to top to prevent overlap with the section above
    paddingBottom: "40px", // Add padding to bottom to create space below the section
  } as React.CSSProperties,

  lineSection: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px", // Ensure space after the line to avoid overlap with next section
  } as React.CSSProperties,

  BestSellingProducts: {
    width: "100%",
    maxWidth: "1170px",
    margin: "0 auto",
    paddingTop: "40px", // Add padding to top to prevent overlap with the section above
    paddingBottom: "40px", // Add padding to bottom to create space below the section
  } as React.CSSProperties,
};
