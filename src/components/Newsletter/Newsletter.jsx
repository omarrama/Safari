import "./Newsletter.css";
import newsletter from "../../images/newsletter.jpg";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-image-wrapper">
          <img src={newsletter} alt="newsletter" className="newsletter-img" />
        </div>

        <div className="newsletter-content">
          <h2 className="newsletter-content-title">
            Your Dubai itinerary is waiting
          </h2>
          <p className="newsletter-content-description">
            Recieve a curated 48-hour itinerary featuring the most iconic
            experiences in Dubai, straight to your inbox.
          </p>
          <div className="newsletter-content-inputs">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="newsletter-text-input"
            />
            <button className="newsletter-signup-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
