import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footerContainer}>
      {/* Frame 1 */}
      <div style={styles.frame1}>
        {/* Exclusive Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Exclusive</h3>
          <p style={styles.text}>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. */}
            Subscribe <br></br>
            Get 10% off on first order
          </p>
        </div>

        {/* Support Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Support</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>FAQ</li>
            <li style={styles.listItem}>Help Center</li>
            <li style={styles.listItem}>Privacy Policy</li>
            <li style={styles.listItem}>Terms & Conditions</li>
          </ul>
        </div>

        {/* Account Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Account</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>My Account</li>
            <li style={styles.listItem}>Login / Register</li>
            <li style={styles.listItem}>Cart</li>
            <li style={styles.listItem}>Wishlist</li>
            <li style={styles.listItem}>Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Privacy Policy</li>
            <li style={styles.listItem}>Terms of Use</li>
            <li style={styles.listItem}>FAQ</li>
            <li style={styles.listItem}>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Download App</h3>
          <p style={styles.text}>Save 3$ for new user only</p>
          <div style={styles.appButtons}>
            <button style={styles.appButton}>App Store</button>
            <button style={styles.appButton}>Google Play</button>
          </div>
        </div>
      </div>

      {/* Frame 2 */}
      <div style={styles.frame2}>
        <p style={styles.copyright}>
          Copyright Rimel 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    width: '100%',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: '80px 0 24px 0',
    // position: 'relative',
    bottom: '100%',
    top: '100%'
  } as React.CSSProperties,
  frame1: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1170px',
    margin: '0 auto',
    flexWrap: 'wrap',
    gap: '87px',
  } as React.CSSProperties,
  section: {
    flex: '1',
    maxWidth: '217px', // Adjust for responsiveness
  } as React.CSSProperties,
  heading: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '16px',
  } as React.CSSProperties,
  text: {
    fontSize: '14px',
    lineHeight: '24px',
    opacity: '0.8',
  } as React.CSSProperties,
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  } as React.CSSProperties,
  listItem: {
    fontSize: '14px',
    lineHeight: '24px',
    cursor: 'pointer',
  } as React.CSSProperties,
  appButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  } as React.CSSProperties,
  appButton: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer',
  } as React.CSSProperties,
  frame2: {
    maxWidth: '1440px',
    margin: '0 auto',
    textAlign: 'center',
    opacity: '0.4',
    marginTop: '40px',
  } as React.CSSProperties,
  copyright: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
  } as React.CSSProperties,
};

export default Footer;
