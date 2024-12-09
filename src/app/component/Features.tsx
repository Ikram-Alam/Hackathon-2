import React from 'react';

const Features = () => {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '943px',
        height: '161px',
        margin: '50px auto',
        gap: '88px',
      }}
    >
      {/* Frame 1 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '249px',
          height: '161px',
          gap: '24px',
          opacity: 1,
        }}
      >
        <img
          src="Ship.png" // Replace with actual shipping logo URL
          alt="Shipping Logo"
          style={{ width: '50px', height: '50px' }}
        />
        <p style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
          Free and Fast Delivery
        </p>
      </div>

      {/* Frame 2 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '262px',
          height: '161px',
          gap: '24px',
          opacity: 1,
        }}
      >
        <img
          src="Services.png" // Replace with actual headphone logo URL
          alt="Customer Service Logo"
          style={{ width: '50px', height: '50px' }}
        />
        <p style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
          24/7 Customer Service
        </p>
      </div>

      {/* Frame 3 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '256px',
          height: '161px',
          gap: '24px',
          opacity: 1,
        }}
      >
        <img
          src="secure.png" // Replace with actual secure logo URL
          alt="Secure Logo"
          style={{ width: '50px', height: '50px' }}
        />
        <p style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
          Money Back Guarantee
        </p>
      </div>
    </section>
  );
};

export default Features;
