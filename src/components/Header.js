import React from 'react';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <h1>Admin Dashboard</h1>
      <button
        onClick={() => setDarkMode(prev => !prev)}
        style={{
          padding: '10px 18px',
          background: darkMode
            ? 'linear-gradient(135deg, #444, #222)'
            : 'linear-gradient(135deg, #fff, #ddd)',
          color: darkMode ? '#fff' : '#111',
          border: 'none',
          borderRadius: '25px',
          boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'all 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}

export default Header;
