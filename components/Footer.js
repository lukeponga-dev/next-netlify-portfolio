import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {" "}
        {/* Added footerContent container */}
        <p className={styles.copyright}>&copy; 2024 Lukeponga-dev</p>
      </div>
    </footer>
  );
};

export default Footer;
