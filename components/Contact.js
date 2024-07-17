import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me at</p>
      <a href="mailto:lukeponga9@gmail.com" className={styles.emailButton}>
        lukeponga9@gmail.com
      </a>
      <p>Let's connect on social media:</p>
      <div className={styles.socialIcons}>
        <a
          href="https://twitter.com/gilchrist_luke"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faTwitter} size="sm" /> {/* Add size="sm" */}
        </a>
        <a
          href="https://www.linkedin.com/in/lukeponga/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faLinkedin} size="sm" /> {/* Add size="sm" */}
        </a>
        <a
          href="https://www.instagram.com/lukeponga/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faInstagram} size="sm" /> {/* Add size="sm" */}
        </a>
        <a
          href="https://github.com/lukeponga"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faGithub} size="sm" /> {/* Add size="sm" */}
        </a>
      </div>
    </section>
  );
};

export default Contact;
