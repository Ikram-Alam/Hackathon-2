"use client"

import MainNavbar from "../component/Navbar";
import ContactComponent from "../component/Sign_up";


const Contact: React.FC = () => {
  return (
    <>
      <MainNavbar/>
      <div className="contact-container">
        <ContactComponent/>
      </div>

      <style jsx>{`
        .contact-container {
          margin-top: 80px; /* Adjust this value to match your navbar height */
          padding: 20px;
        }
      `}</style>
    </>
  );
};

export default Contact;
