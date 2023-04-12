import './Production.css';
import React, { useState } from 'react';

import notTondu from "../../assets/notTondu.png";
import tondu from "../../assets/tondu.png";

const Production = () => {

  const [imageSrc, setImageSrc] = useState(notTondu);

  const handleClick = () => {
    setImageSrc(imageSrc === notTondu ? tondu : notTondu);
  };
  

  return (
    <div className='tonduFondu'>
      <div className="image-container">
        <img
          className='imagetonduFondu'
          src={imageSrc}
          alt={imageSrc}
          onClick={handleClick}
          style={{
            transition: 'opacity 0.5s ease-in-out',
            opacity: 1,
            maxWidth: '100%',
          }}
        />
      </div>
    </div>
  );
}

export default Production