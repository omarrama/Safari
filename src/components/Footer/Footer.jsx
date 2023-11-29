import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* support */}
      <div className="footer-section">
        <h3 className="footer-section-title">Support</h3>
        <ul className="footer-list">
          <li className="footer-link">Contact</li>
          <li className="footer-link">Legal Notice</li>
          <li className="footer-link">Privacy Policy</li>
          <li className="footer-link">Sitemap</li>
        </ul>
      </div>
      {/* company */}
      <div className="footer-section">
        <h3 className="footer-section-title">Company</h3>
        <ul className="footer-list">
          <li className="footer-link">About Us</li>
          <li className="footer-link">Careers</li>
          <li className="footer-link">Blog</li>
          <li className="footer-link">Magazine</li>
          <li className="footer-link">Travel Giudes</li>
        </ul>
      </div>
      {/* work with us */}
      <div className="footer-section">
        <h3 className="footer-section-title">Work With Us</h3>
        <ul className="footer-list">
          <li className="footer-link">Become a Supplier</li>
          <li className="footer-link">Become an Affiliate Partner</li>
        </ul>
        <div className="footer-icons">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-linkedin"></i>
        </div>
        <div className="footer-copyright">
          Copyright &copy; 2023 Dubai Safari
        </div>
      </div>
    </footer>
  );
};

export default Footer;
