import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me at</p>
      <a href="mailto:lukeponga9@gmail.com" className={styles.emailButton}>lukeponga9@gmail.com</a>
      <p>Let's connect on social media:</p>
      <ul className={styles.socialIcons}>
        <li>
          <a href="https://twitter.com/gilchrist_luke" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className={styles.iconTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lukeponga/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className={styles.iconLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/gilchrist.luke/" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.iconInstagram} />
          </a>
        </li>
        <li>
          <a href="https://github.com/lukeponga-dev" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} size="2x" className={styles.iconGithub} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
