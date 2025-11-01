import React from "react";

function Main() {
  return (
    <div className="container" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(to bottom right, #581c87, #111827, #111827)'
    }}>
      <div style={{ textAlign: 'center', padding: '0 24px' }}>
        <h1 style={{ 
          fontSize: '5rem', 
          fontWeight: 'bold', 
          marginBottom: '24px',
          background: 'linear-gradient(to right, #c084fc, #f9a8d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Mahiman Dave
        </h1>
        <p style={{ 
          fontSize: '1.5rem', 
          color: '#d1d5db', 
          marginBottom: '32px' 
        }}>
          Artificial Intelligence and Data Science
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <a 
            href="#history" 
            style={{
              padding: '12px 32px',
              background: '#9333ea',
              color: 'white',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            style={{
              padding: '12px 32px',
              border: '2px solid #9333ea',
              color: 'white',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;