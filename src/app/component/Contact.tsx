"use client";

import React from "react";

const ContactSection: React.FC = () => {
  return (
    <div className="contact-section">
      {/* Left Contact Details */}
      <div className="contact-info">
        <div className="info-box">
          <div className="icon red">
            <span role="img" aria-label="phone">
              📞
            </span>
          </div>
          <h3>Call To Us</h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
        <hr />
        <div className="info-box">
          <div className="icon red">
            <span role="img" aria-label="mail">
              ✉️
            </span>
          </div>
          <h3>Write To Us</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>

      {/* Right Form */}
      <div className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Your Name *" className="form-input" />
          <input type="email" placeholder="Your Email *" className="form-input" />
          <input type="text" placeholder="Your Phone *" className="form-input" />
        </div>
        <textarea
          placeholder="Your Message"
          className="form-textarea"
        ></textarea>
        <button className="send-button">Send Message</button>
      </div>

      {/* CSS */}
      <style jsx>{`
        .contact-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 30px;
          width: 100%;
          max-width: 1200px;
          margin: auto;
          padding: 40px;
          box-sizing: border-box;
        }

        .contact-info {
          flex: 1;
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .info-box {
          margin-bottom: 20px;
        }

        .icon {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .red {
          color: #e74c3c;
        }

        h3 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        p {
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
        }

        hr {
          border: none;
          border-top: 1px solid #ccc;
          margin: 20px 0;
        }

        .contact-form {
          flex: 2;
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-input {
          flex: 1;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
        }

        .form-textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
          min-height: 150px;
          margin-bottom: 20px;
          resize: none;
        }

        .send-button {
          background: #e74c3c;
          color: #fff;
          padding: 12px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.3s;
        }

        .send-button:hover {
          background: #c0392b;
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
