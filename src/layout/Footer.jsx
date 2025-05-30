import React from 'react';

const Footer = () => (
  <footer className="app-footer">
    <p>© {new Date().getFullYear()} React Hooks Demo</p>
    <div className="footer-links">
      <a
        href="https://reactjs.org/docs/hooks-intro.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Docs
      </a>
      <span className="separator">•</span>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  </footer>
);

export default Footer;
