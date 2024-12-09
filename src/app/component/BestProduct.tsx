import React from "react";

const MusicExperience: React.FC = () => {
  return (
    <section style={styles.musicExperience}>
      <div style={styles.content}>
        <h4 style={styles.category}>Categories</h4>
        <h1 style={styles.heading}>Enhance Your Music Experience</h1>
        <div style={styles.timer}>
          <div style={styles.timeBox}>
            <span style={styles.timeValue}>23</span>
            <p style={styles.timeLabel}>Hours</p>
          </div>
          <div style={styles.timeBox}>
            <span style={styles.timeValue}>05</span>
            <p style={styles.timeLabel}>Days</p>
          </div>
          <div style={styles.timeBox}>
            <span style={styles.timeValue}>59</span>
            <p style={styles.timeLabel}>Minutes</p>
          </div>
          <div style={styles.timeBox}>
            <span style={styles.timeValue}>35</span>
            <p style={styles.timeLabel}>Seconds</p>
          </div>
        </div>
        <button style={styles.buyNow}>Buy Now!</button>
      </div>
      <div style={styles.imageContainer}>
        <img src="./mic.png" alt="Music Speaker" style={styles.image} />
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  musicExperience: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "1170px",
    height: "500px",
    backgroundColor: "#000",
    margin: "50px auto",
    borderRadius: "10px",
    overflow: "hidden",
  },
  content: {
    color: "#fff",
    paddingLeft: "50px",
  },
  category: {
    color: "#00ff00",
    fontSize: "16px",
    marginBottom: "10px",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  timer: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  timeBox: {
    textAlign: "center",
    color: "#fff",
    fontSize: "14px",
  },
  timeValue: {
    display: "block",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  timeLabel: {
    fontSize: "14px",
  },
  buyNow: {
    backgroundColor: "#00ff00",
    color: "#000",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buyNowHover: {
    backgroundColor: "#008000",
    color: "#fff",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: "auto",
    height: "100%",
    objectFit: "contain",
  },
};

export default MusicExperience;
