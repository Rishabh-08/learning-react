import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Waypoints,
  Sparkles,
  Globe,
  SearchCheck,
} from "lucide-react";

const Home = () => (
  <div className="home">
    <div className="hero-section">
      <h2>React Explorer</h2>
      <p>Interactive examples and explanations for modern React development</p>
    </div>
    <div className="card-grid">
      <Link to="/use-state" className="hook-card">
        <div className="card-icon">
          <span className="hook-emoji">
            <Waypoints />
          </span>
        </div>
        <div className="card-content">
          <h3>useState</h3>
          <p>Manage component state with this fundamental React Hook</p>
        </div>
        <div className="card-arrow">
          <ChevronRight />
        </div>
      </Link>
      <Link to="/use-effect" className="hook-card">
        <div className="card-icon">
          <span className="hook-emoji">
            <Sparkles />
          </span>
        </div>
        <div className="card-content">
          <h3>useEffect</h3>
          <p>Handle side effects in your components</p>
        </div>
        <div className="card-arrow">
          <ChevronRight />
        </div>
      </Link>
      <Link to="/use-ref" className="hook-card">
        <div className="card-icon">
          <span className="hook-emoji">
            <SearchCheck />
          </span>
        </div>
        <div className="card-content">
          <h3>useRef</h3>
          <p>Access DOM elements and persist values</p>
        </div>
        <div className="card-arrow">
          <ChevronRight />
        </div>
      </Link>
      <Link to="/" className="hook-card">
        <div className="card-icon">
          <span className="hook-emoji">
            <Globe />
          </span>
        </div>
        <div className="card-content">
          <h3>useContext</h3>
          <p>Share state across your component tree</p>
        </div>
        <div className="card-arrow">
          <ChevronRight />
        </div>
      </Link>
    </div>
  </div>
);

export default Home;
