import React from "react";

const BrowseByCategory: React.FC = () => {
  const categories = [
    { name: "Phones", icon: "../../CellPhone.png" }, // Replace with actual image URL
    { name: "Computers", icon: "../../Computer.png" },
    { name: "SmartWatch", icon: "../../SmartWatch.png" },
    { name: "Camera", icon: "../../Camera.png" },
    { name: "HeadPhones", icon: "../../Headphone.png" },
    { name: "Gaming", icon: "../../Gamepad.png" },
  ];

  return (
    <section style={styles.container}>
      <h4 style={styles.title}>Categories</h4>
      <h2 style={styles.heading}>Browse By Category</h2>
      <div style={styles.categories}>
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              ...styles.categoryCard,
              ...(category.name === "Camera" ? styles.activeCategory : {}),
            }}
          >
            <div style={styles.iconContainer}>
              <img
                src={category.icon}
                alt={category.name}
                style={styles.icon}
              />
            </div>
            <p style={styles.categoryName}>{category.name}</p>
          </div>
        ))}
      </div>
      <div style={styles.navigation}>
        <button style={styles.navButton}>←</button>
        <button style={styles.navButton}>→</button>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "1170px",
    margin: "0 auto",
    marginTop: "60px",
    gap: "60px",
    position: "relative",
  },
  title: {
    color: "#FF3D00",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  categories: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  categoryCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "180px",
    height: "120px",
    border: "1px solid #E0E0E0",
    borderRadius: "10px",
    backgroundColor: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  activeCategory: {
    backgroundColor: "#FF3D00",
    color: "#fff",
  },
  iconContainer: {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
  },
  icon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  categoryName: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  navigation: {
    position: "absolute",
    top: "10%",
    right: "0",
    transform: "translateY(-50%)",
    display: "flex",
    gap: "10px",
  },
  navButton: {
    width: "40px",
    height: "40px",
    backgroundColor: "#fff",
    border: "1px solid #E0E0E0",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};

export default BrowseByCategory;
