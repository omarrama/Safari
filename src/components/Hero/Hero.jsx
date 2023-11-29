import { useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const wrapperRef = useRef(null);

  function onFocus() {
    wrapperRef.current.style.border = "2px dotted rgb(245, 70, 10)";
  }

  function onBlur() {
    wrapperRef.current.style.border = "none";
  }
  return (
    <div className="hero">
      <div className="search-wrapper">
        <div ref={wrapperRef} className="hero-search">
          <div className="input-wrapper">
            <i className="bi bi-search hero-search-icon"></i>
            <input
              onFocus={() => onFocus()}
              onBlur={() => onBlur()}
              className="hero-search-input"
              type="search"
              placeholder="Find your next adventure"
            />
          </div>
          <button className="hero-search-btn">Search</button>
        </div>
      </div>

      <div className="hero-title">
        <h1>Desert Safaris</h1>
        <h3>
          in <span className="dubai">Dubai</span>
        </h3>
      </div>
    </div>
  );
};

export default Hero;
