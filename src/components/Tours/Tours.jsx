import "./Tours.css";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";

const Tours = ({ tours }) => {
  return (
    <div className="tour-list">
      {tours.map((tour) => {
        return (
          <div className="tour-card" key={tour.id}>
            <img
              src={process.env.PUBLIC_URL + tour.image}
              alt={tour.title}
              title={tour.title}
              className="tour-card-img"
            />
            <span className="tour-card-label">adventure</span>
            <div className="tour-card-body">
              <div className="tour-card-title">{tour.title}</div>
              <div className="tour-card-duration">
                <span>{tour.duration}</span>
                <i className="bi bi-dot"></i>
                <span>Pickup Available</span>
              </div>
              <Ratings rating={tour.rating} reviews={tour.reviews} />
              <div className="tour-card-price">
                <strong>From ${tour.priceFrom} </strong>
                <span>per person</span>
              </div>
              <Link to={`/tour/${tour.id}`} className="tour-card-btn">See More</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
