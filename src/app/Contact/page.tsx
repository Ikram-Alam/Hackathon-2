"use client"
import ContactSection from "../component/Contact";
import MainNavbar from "../component/Navbar";


const Contact: React.FC = () => {
  return (
    <>
      <MainNavbar/>
      <div className="contact-container">
        <ContactSection/>
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
