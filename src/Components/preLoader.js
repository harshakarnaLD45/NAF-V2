import React from 'react';

const Preloader = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontSize: '24px'
    }}>
      Loading...
    </div>
  );
};

export default Preloader;
