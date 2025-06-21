import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="app-footer">
    <div className="footer-content">
      <div className="creator-info">
        <span>Built with</span>
        <Heart size={16} className="heart-icon" />
        <span>
          by <strong>Rishabh Jamnal</strong>
        </span>
      </div>
      <div className="footer-links">
        <a
          href="https://react.dev/blog/2023/03/16/introducing-react-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Docs
        </a>
        <span className="separator">•</span>
        <a
          href="https://github.com/Rishabh-08"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Reactverse</p>
    </div>
  </footer>
);

export default Footer;
