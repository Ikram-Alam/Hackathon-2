import React from 'react';

const ThinNavbar: React.FC = () => {
  return (
    <div style={styles.navbar}>
      {/* Center Content */}
      <div style={styles.centerContent}>
        Summer sale for all swim suit and free express delivery -50%!{' '}
        <a href="/shop" style={styles.link}>
          Shop Now
        </a>
      </div>

      {/* Language Selector */}
      <div style={styles.languageSelector}>
        <span style={styles.languageText}>English</span>
        <span style={styles.arrowDown}>▼</span>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    // width: '1440px',
    height: '48px',
    padding: '12px 136px 12px 445px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000000',
    color: '#ffffff',
    opacity: 1, // Changed from 0 to 1 to make it visible
  } as React.CSSProperties,
  centerContent: {
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#ffffff',
  } as React.CSSProperties,
  link: {
    color: '#ffffff',
    textDecoration: 'underline',
    cursor: 'pointer',
  } as React.CSSProperties,
  languageSelector: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  } as React.CSSProperties,
  languageText: {
    marginRight: '4px',
  } as React.CSSProperties,
  arrowDown: {
    fontSize: '12px',
  } as React.CSSProperties,
};

export default ThinNavbar;


// import React from 'react';

// const ThinNavbar: React.FC = () => {
//   return (
//     <div style={styles.navbar}>
//       {/* Center Content */}
//       <div style={styles.centerContent}>
//         Summer sale for all swim suits and free express delivery -50%!{' '}
//         <a href="/shop" style={styles.link}>
//           Shop Now
//         </a>
//       </div>

//       {/* Language Selector */}
//       <div style={styles.languageSelector}>
//         <span style={styles.languageText}>English</span>
//         <span style={styles.arrowDown}>▼</span>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   navbar: {
//     width: '100%', // Set the width as per the given requirement
//     height: '48px',  // Set the height as per the given requirement
//     padding: '12px 136px 12px 445px', // Apply the padding as per the given requirement
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#000000',
//     color: '#ffffff',
//     opacity: 1, // Ensure the navbar is visible
//     gap: '0px', // Set gap to 0px as requested
//   } as React.CSSProperties,
//   centerContent: {
//     textAlign: 'center',
//     fontSize: '14px',
//     lineHeight: '24px',
//     color: '#ffffff',
//   } as React.CSSProperties,
//   link: {
//     color: '#ffffff',
//     textDecoration: 'underline',
//     cursor: 'pointer',
//   } as React.CSSProperties,
//   languageSelector: {
//     display: 'flex',
//     alignItems: 'center',
//     cursor: 'pointer',
//   } as React.CSSProperties,
//   languageText: {
//     marginRight: '4px',
//   } as React.CSSProperties,
//   arrowDown: {
//     fontSize: '12px',
//   } as React.CSSProperties,
// };

// export default ThinNavbar;
