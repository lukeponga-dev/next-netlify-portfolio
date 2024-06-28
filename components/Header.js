import React from 'react';
import Image from 'next/image'
const Header = () => {
  return (

    <header>
      <div className='header-image'>
        <Image src='/hero-bg.jpg'
          layout="fill"  // Fill the container
          objectFit="cover" // Cover the area, may crop
          priority       // Prioritize loading for the header
        >
        </Image>
        </div>
      <h1 className='header-title'>Welcome to My Portfolio</h1>
    </header>
  );
}

export default Header;


