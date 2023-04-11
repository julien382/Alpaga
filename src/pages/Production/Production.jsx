import './Production.css';
import React, { useState } from 'react';
import alpagaMain from "../../assets/mainAlpaga.png";
import alpagaBrown from "../../assets/alpaca-5564884_1280_preview_rev_1.png";

const images = [
  { src: alpagaMain, isCorrect: true },
  { src: alpagaBrown, isCorrect: false },
];

const Production = () => {

  const [score, setScore] = useState(0);

  const handleImageClick = (image) => {
    if (image.isCorrect) {
      setScore(score + 1);
    }
  };
  
  return (
    <div className='gameContainer'>
      <p className='scoreBoardWin'>Score: {score}</p>
      <p className='scoreBoardLoose'>Score: {score}</p>
      <div className='picturesGame'>
        {images.map((image) => (
          <img
            className='pictureGame'
            key={image.src}
            src={image.src}
            alt={image.src}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default Production