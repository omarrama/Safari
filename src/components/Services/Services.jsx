import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="service-item">
        <i className="bi bi-card-image service-icon"></i>
        <span>Adventures</span>
      </div>
      <div className="service-item">
        <i className="bi bi-people-fill service-icon"></i>
        <span>Family tours</span>
      </div>
      <div className="service-item">
        <i className="bi bi-building service-icon"></i>
        <span>City cards</span>
      </div>
      <div className="service-item">
        <i className="bi bi-globe service-icon"></i>
        <span>Multi-day trips</span>
      </div>
    </div>
  );
};

export default Services;
