// import Link from "next/link";
// import MainNavbar from "../component/Navbar";

// const NotFoundPage: React.FC = () => {
//   return (
//     <>
//         <MainNavbar/>
//     <div className="error-container">

//       <h1 className="error-title">404</h1>
//       <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
//       <Link href="/" className="home-link">
//         Go Back to Home
//       </Link>
      

//       <style jsx>{`
//         .error-container {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           min-height: 100vh;
//           background-color: #f9f9f9;
//           text-align: center;
//           padding: 20px;
//         }

//         .error-title {
//           font-size: 6rem;
//           font-weight: 700;
//           color: #e74c3c;
//           margin-bottom: 20px;
//         }

//         .error-message {
//           font-size: 1.5rem;
//           color: #555;
//           margin-bottom: 30px;
//         }

//         .home-link {
//           font-size: 1.2rem;
//           color: white;
//           background-color: #3498db;
//           padding: 10px 20px;
//           border-radius: 5px;
//           text-decoration: none;
//           transition: background-color 0.3s ease;
//         }

//         .home-link:hover {
//           background-color: #2980b9;
//         }
//       `}</style>
//     </div>
//     </>
//   );
// };

// export default NotFoundPage;
// Adjust the path based on your file structure
import Link from "next/link";
import MainNavbar from "../component/Navbar";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <MainNavbar/>
      <div className="error-container">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/" className="home-link">
          Go Back to Home
        </Link>

        <style jsx>{`
          .error-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 80vh; /* Adjusted to account for the Navbar */
            background-color: #f9f9f9;
            text-align: center;
            padding: 20px;
          }

          .error-title {
            font-size: 6rem;
            font-weight: 700;
            color: #e74c3c;
            margin-bottom: 20px;
          }

          .error-message {
            font-size: 1.5rem;
            color: #555;
            margin-bottom: 30px;
          }

          .home-link {
            font-size: 1.2rem;
            color: white;
            background-color: #3498db;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s ease;
          }

          .home-link:hover {
            background-color: #2980b9;
          }
        `}</style>
      </div>
    </>
  );
};

export default NotFoundPage;
