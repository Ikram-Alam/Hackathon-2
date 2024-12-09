// "use client";

// import React from "react";

// const LandingPage: React.FC = () => {
//   return (
//     <div className="landing-container">
//       {/* Left Section */}
//       <div className="image-section">
//         <img
//           src="si1.png"
//           alt="Cart and Phone"
//           className="responsive-image"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="account-section">
//         <button className="create-account-button">Create Account</button>
//         <div className="google-icon">
//           <img
//             src="/path-to-image/google-icon.png"
//             alt="Google Icon"
//             className="google-logo"
//           />
//         </div>
//       </div>

//       {/* CSS */}
//       <style jsx>{`
//         .landing-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           min-height: 100vh;
//           background: black;
//         }

//         .image-section {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: #eaf9ff; /* Light blue background */
//         }

//         .responsive-image {
//           max-width: 80%;
//           height: auto;
//         }

//         .account-section {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           padding: 20px;
//           background: black;
//         }

//         .create-account-button {
//           background: #e74c3c; /* Red */
//           color: white;
//           font-size: 18px;
//           padding: 12px 24px;
//           border: none;
//           border-radius: 4px;
//           margin-bottom: 20px;
//           cursor: pointer;
//           transition: background 0.3s;
//         }

//         .create-account-button:hover {
//           background: #c0392b; /* Darker red */
//         }

//         .google-icon {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .google-logo {
//           width: 40px;
//           height: 40px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LandingPage;





// "use client";

// import React from "react";

// const ContactComponent: React.FC = () => {
//   return (
//     <div className="contact-container">
//       {/* Left Section */}
//       <div className="image-section">
//         <img src="si1.png" alt="Phone and Shopping Cart" className="main-image" />
//       </div>

//       {/* Right Section */}
//       <div className="form-section">
//         <button className="create-account-button">Create Account</button>
//         <div className="google-logo">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
//             alt="Google Icon"
//             className="google-icon"
//           />
//         </div>
//       </div>

//       <style jsx>{`
//         .contact-container {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           height: 100vh;
//           background-color: white;
//         }

//         .image-section {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background-color: white; /* Light blue background */
//         }

//         .main-image {
//           max-width: 80%;
//           height: auto;
//         }

//         .form-section {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           background-color: #000; /* Black background */
//           padding: 20px;
//         }

//         .create-account-button {
//           background-color: #e74c3c; /* Red button */
//           color: white;
//           font-size: 18px;
//           padding: 15px 30px;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           margin-bottom: 20px;
//           transition: background-color 0.3s ease;
//         }

//         .create-account-button:hover {
//           background-color: #c0392b; /* Darker red */
//         }

//         .google-logo {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .google-icon {
//           width: 40px;
//           height: 40px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactComponent;










"use client";

import React from "react";

const ContactComponent: React.FC = () => {
  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="image-section">
        <img src="si1.png" alt="Phone and Shopping Cart" className="main-image" />
      </div>

      {/* Right Section */}
      <div className="form-section">
        <h1 className="title">Create Account</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Your Name"
            className="input-field"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            className="input-field"
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <div className="google-signin">
          <p>or sign in with</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Icon"
            className="google-icon"
          />
        </div>
      </div>

      <style jsx>{`
        .contact-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100vh;
          background-color: white;
        }

        .image-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white; /* Light blue background */
        }

        .main-image {
          max-width: 80%;
          height: auto;
        }

        .form-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: grey; /* Black background */
          padding: 20px;
          color: #fff; /* White text */
        }

        .title {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #fff;
        }

        .form {
          width: 80%;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .input-field {
          width: 100%;
          padding: 10px 15px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
        }

        .input-field:focus {
          border-color: #e74c3c; /* Red border on focus */
        }

        .submit-button {
          background-color: #e74c3c; /* Red button */
          color: white;
          font-size: 18px;
          padding: 12px 30px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #c0392b; /* Darker red */
        }

        .google-signin {
          margin-top: 20px;
          text-align: center;
        }

        .google-icon {
          width: 40px;
          height: 40px;
          cursor: pointer;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default ContactComponent;
