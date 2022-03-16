import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer bg-primary">
      <p>Developed by Saran Chakravarthi</p>
      <ul className="social-links list">
        <li>
          <a className="link" href="https://github.com/Chakravarthi0">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://www.linkedin.com/in/saran-chakravarthi"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a className="link" href="https://twitter.com/SaranChakravar3">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
