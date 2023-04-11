import './Production.css';
import React, { useState } from 'react';

import notTondu from "../../assets/notTondu.png";
import tondu from "../../assets/tondu.png";

const Production = () => {

  const [isFaded, setIsFaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(notTondu);

  const handleClick = () => {
    setIsFaded(true);
    setTimeout(() => {
      if (currentImage === notTondu) {
        setCurrentImage(tondu);
      } else {
        setCurrentImage(notTondu);
      }
      setIsFaded(false);
    }, 500);
  };
  

  return (
    <div className="image-container">
      <img
        src={currentImage}
        alt={currentImage}
        className={`image ${isFaded ? 'fade-out' : 'fade-in'}`}
        onClick={handleClick}
      />
    </div>
  );
}

export default Production