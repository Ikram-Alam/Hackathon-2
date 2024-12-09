import React from 'react';

const MainNavbar: React.FC = () => {
  return (
    <div style={styles.mainContainer}>
      <nav style={styles.navbar}>
        {/* Left: Website Name */}
        <div style={styles.left}>
        <a href="/" style={styles.link}>
          <span style={styles.webName}>Exclusive</span>
        </a>
        </div>

        {/* Center: Links */}
        <div style={styles.center}>
          <a href="/" style={styles.link}>
            Home
          </a>
          <a href="Contact" style={styles.link}>
            Contact
          </a>
          <a href="Contact" style={styles.link}>
            About
          </a>
          <a href="SignUp" style={styles.link}>
            Sign Up
          </a>
        </div>

        {/* Right: Search Bar + Icons */}
        <div style={styles.right}>
          <input
            type="text"
            placeholder="Search"
            style={styles.searchBar}
          />
                    <a href="404" style={styles.link}>
          <span style={styles.icon}>❤️</span> {/* Heart Icon */}
          <span style={styles.icon}>🛒</span> {/* Cart Icon */}
          </a>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  mainContainer: {
    width: '100%',
    padding: '10px 20px',
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
  } as React.CSSProperties,
  navbar: {
    maxWidth: '1170px',
    top: '50px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap', // Enables responsiveness
    width: '1440px',
    height: '0px', // Matches your requirement
    position: 'relative',
    gap: '0px',
    opacity: 1, // Changed from 0 to 1 to make visible


  } as React.CSSProperties,
  left: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties,
  webName: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000000',
  } as React.CSSProperties,
  center: {
    flex: '2',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap', // Wraps links on smaller screens
  } as React.CSSProperties,
  right: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '10px',
    flexWrap: 'wrap', // Allows icons to wrap on smaller screens
  } as React.CSSProperties,
  searchBar: {
    width: '200px',
    height: '30px',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  } as React.CSSProperties,
  icon: {
    fontSize: '20px',
    cursor: 'pointer',
  } as React.CSSProperties,
  link: {
    fontSize: '16px',
    textDecoration: 'none',
    color: '#000000',
    cursor: 'pointer',
  } as React.CSSProperties,
};

export default MainNavbar;

// import React from 'react';

// const MainNavbar: React.FC = () => {
//   return (
//     <div style={styles.mainContainer}>
//       <nav style={styles.navbar}>
//         {/* Left: Website Name */}
//         <div style={styles.left}>
//           <span style={styles.webName}>Exclusive</span>
//         </div>

//         {/* Center: Links */}
//         <div style={styles.center}>
//           <a href="/" style={styles.link}>
//             Home
//           </a>
//           <a href="/contact" style={styles.link}>
//             Contact
//           </a>
//           <a href="/about" style={styles.link}>
//             About
//           </a>
//           <a href="/signup" style={styles.link}>
//             Sign Up
//           </a>
//         </div>

//         {/* Right: Search Bar + Icons */}
//         <div style={styles.right}>
//           <input
//             type="text"
//             placeholder="Search"
//             style={styles.searchBar}
//           />
//           <span style={styles.icon}>❤️</span> {/* Heart Icon */}
//           <span style={styles.icon}>🛒</span> {/* Cart Icon */}
//         </div>
//       </nav>
//     </div>
//   );
// };

// const styles = {
//   mainContainer: {
//     width: '100%',
//     padding: '10px 20px',
//     boxSizing: 'border-box',
//     backgroundColor: '#ffffff',
//   } as React.CSSProperties,

//   navbar: {
//     position: 'absolute',
//     top: '88px',
//     left: '135px',
//     width: '1170px', // As per the given width (Hug 1,170px)
//     height: '38px', // As per the given height (Hug 38px)
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     gap: '148px', // Adjust gap between items
//     opacity: 1, // Ensure it's visible
//     boxSizing: 'border-box', // To ensure padding doesn’t affect the size
//   } as React.CSSProperties,

  
//   left: {
//     flex: '1',
//     display: 'flex',
//     alignItems: 'center',
//   } as React.CSSProperties,

//   webName: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#000000',
//   } as React.CSSProperties,

//   center: {
//     flex: '2',
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '20px',
//     flexWrap: 'wrap', // Wraps links on smaller screens
//   } as React.CSSProperties,

//   right: {
//     flex: '1',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     gap: '10px',
//     flexWrap: 'wrap', // Allows icons to wrap on smaller screens
//   } as React.CSSProperties,

//   searchBar: {
//     width: '200px',
//     height: '30px',
//     padding: '5px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//   } as React.CSSProperties,

//   icon: {
//     fontSize: '20px',
//     cursor: 'pointer',
//   } as React.CSSProperties,

//   link: {
//     fontSize: '16px',
//     textDecoration: 'none',
//     color: '#000000',
//     cursor: 'pointer',
//   } as React.CSSProperties,
// };



// export default MainNavbar;
