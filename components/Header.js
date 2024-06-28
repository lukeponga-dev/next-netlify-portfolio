import React from 'react';
import Image from 'next/image'
// Header.js
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-image']}>
        {/* Image content */}
         <Image src='/hero-bg.jpg'
          layout="fill"  // Fill the container
          objectFit="cover" // Cover the area, may crop
          priority       // Prioritize loading for the header
         >
        </Image>

      </div>
      <h1 className={styles['header-title']}>Welcome to My Portfolio</h1>
      {/* other content */}
    </header>
  );
}
export default Header;
