import "./Banner.css";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <img src={banner} alt="Sky Scrapper" className="banner-img" />
        <div className="banner-title-wrapper">
          <h1 className="banner-title">Dubai is waiting for you!</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
