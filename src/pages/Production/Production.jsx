import './Production.css';
import React, { useState } from 'react';
import alpagaMain from "../../assets/mainAlpaga.png";
import alpagaBrown from "../../assets/alpaca-5564884_1280_preview_rev_1.png";

const images = [
  { src: alpagaMain, isCorrect: true },
  { src: alpagaBrown, isCorrect: false },
];

const Production = () => {

  const [scoreWin, setScoreWin] = useState(0);
  const [scoreLoose, setScoreLoose] = useState(0);

  const handleImageClick = (image) => {
    if (image.isCorrect) {
      setScoreWin(scoreWin + 1);
    }
    else{
      setScoreLoose(scoreLoose + 1);
    }
  };
  
  return (
    <div className='gameContainer'>
      <div className='containerScoreBoard'>
        <p className='scoreBoardWin font'>V: {scoreWin}</p>
        <p className='titleGame font'>Trouve l'alpaga:</p>
        <p className='scoreBoardLoose font'>X: {scoreLoose}</p>
      </div>
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