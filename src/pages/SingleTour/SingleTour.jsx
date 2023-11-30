import "./SingleTour.css";
import { Link, useParams } from "react-router-dom";
import { tours } from "../../data";
import Ratings from "../../components/Tours/Ratings";

const SingleTour = () => {
  const { id } = useParams();
  const tour = tours.find((tour) => tour.id === Number(id));

  return (
    <section className="tour">
      <div className="tour-header-wrapper">
        <div className="tour-header">
          <div className="tour-steps">
            <Link to="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>{tour.title}</span>
          </div>
          <div className="tour-category">adventure</div>
          <h1 className="tour-title">Dubai: {tour.title}</h1>
          <div className="tour-info">
            <Ratings rating={tour.rating} reviews={tour.reviews} />
            <i className="bi bi-dot"></i>
            <div className="tour-provider">
              <span>Activity Provider: </span>
              <span className="text-provider-name">John Doe</span>
            </div>
          </div>
        </div>
      </div>
      <div className="tour-wrapper">
        <img
          src={process.env.PUBLIC_URL + tour.image}
          alt={tour.title}
          className="tour-img"
        />
        <div className="tour-details">
          <div className="tour-details-discount">Save up to 35%!</div>
          <div className="tour-details-body">
            <div className="tour-details-booked">Booked 42 times yesterday</div>
            <div className="tour-details-price">
              <div className="tour-details-price-wrapper">
                <b>${tour.priceFrom}</b>
                <span>per person</span>
              </div>
              <button className="tour-details-btn">book now!</button>
            </div>
            <p className="tour-details-reserve">
              <i className="bi bi-calendar-check"></i>
              <span>
                Reserve now and pay later to book your spot and pay nothing
                today!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleTour;
