import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@components/Contact';
const Contact = () => {
  // display my email address lUKEPONGA9@GMAIL.COM
  // and my social media links with some icons
  // have the email a button that opens the email client
  // have the social media links open in a new tab
return (
  <section className="contact-section">
    <h2>Contact Me</h2>
   
    <p>Feel free to reach out to me at </p>
    <a href="mailto:lukeponga9@gmail.com">lukeponga9@gmail.com</a>
    <p>Let's connect on social media:</p>
<ul className="social-icons">
  <li>
    <a href="https://twitter.com/gilchrist_luke" target="_blank" rel="noopener noreferrer"/>
      <FontAwesomeIcon icon={faTwitter} size="1x" style={{ color: 'blue' }} />
    
  </li>
  <li>
    <a href="https://www.linkedin.com/in/lukeponga/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} size="1x" style={{ color: 'blue' }} />
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/gilchrist.luke/" target='_blank' rel='noopener noreferrer'>
      <FontAwesomeIcon icon={faInstagram} size="1x" style={{ color: 'blue' }} />
    </a>
  </li>
  <li>
    <a href="https://github.com/lukeponga-dev" target='_blank' rel='noopener noreferrer'>
      <FontAwesomeIcon icon={faGithub} size="1x" style={{ color: 'blue' }} />
    </a>
  </li>
</ul>
</section>
);
}
export default Contact;