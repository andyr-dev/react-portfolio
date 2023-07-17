import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <span>
    <ul className="social-media-list">
      <li>
      
        <a href="https://github.com/andyr-dev" className="contact-icon" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/andyr-dev/" target="_blank" className="contact-icon" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
          <i className="fa fa-codepen" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank" className="contact-icon" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faStackOverflow} />
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </span>
  );
}
