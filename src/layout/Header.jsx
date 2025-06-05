import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SquareArrowLeft, SunMoon } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="app-header">
      <div className="header-content">
        {!isHomePage ? (
          <button className="back-button" onClick={() => navigate(-1)}>
            <SquareArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        ) : (
          <h1 className="site-title">Reactverse</h1>
        )}
        <div className="theme-switch">
          <span className="theme-icon">
            <SunMoon />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
