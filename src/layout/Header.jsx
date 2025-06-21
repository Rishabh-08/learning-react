import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SquareArrowLeft } from "lucide-react";
import ThemeToggleButton from "../components/ui/ThemeToggleButton";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
