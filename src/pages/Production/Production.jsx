import './Production.css';
import React, { useEffect, useState } from 'react';
import mainAlpaga from "../../assets/mainAlpaga.png";
import alpaca from "../../assets/alpaca-5564884_1280_preview_rev_1.png";
import alpaga404 from "../../assets/alpaga404.png";
import alpagaAlimentation from "../../assets/alpagaAlimentation.png";
import logoAlpaga from "../../assets/logoAlpaga.png";
import alpagaBrown from "../../assets/alpagaBrown.png";

const allImages = [
  { src: mainAlpaga, isCorrect: true },
  { src: alpaca, isCorrect: false },
  { src: alpaga404, isCorrect: true },
  { src: alpagaAlimentation, isCorrect: false },
  { src: logoAlpaga, isCorrect: true },
  { src: alpagaBrown, isCorrect: false },
];

const Production = () => {

  const [scoreWin, setScoreWin] = useState(0);
  const [scoreLoose, setScoreLoose] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  const handleImageClick = (image) => {
    if (image.isCorrect) {
      setScoreWin(scoreWin + 1);
      const newImages = generateImages();
      setCurrentImages(newImages);
    }
    else{
      setScoreLoose(scoreLoose + 1);
      const newImages = generateImages();
      setCurrentImages(newImages);
    }
  };

  // Générer un tableau de deux images aléatoires à partir du tableau de toutes les images possibles
  const generateImages = () => {
    const correctImage = allImages.find(image => image.isCorrect);
    const incorrectImages = allImages.filter(image => !image.isCorrect).sort(() => 0.5 - Math.random()).slice(0, 1);
    const selectedImages = [correctImage, ...incorrectImages].sort(() => 0.5 - Math.random());
    return selectedImages;
  };

  // Initialiser le jeu avec un premier tableau d'images
  useEffect(() => {
    const newImages = generateImages();
    setCurrentImages(newImages);
  }, []);
  
  return (
    <div className='gameContainer'>
      <div className='containerScoreBoard'>
        <p className='scoreBoardWin font'>V: {scoreWin}</p>
        <p className='titleGame font'>Trouve l'alpaga:</p>
        <p className='scoreBoardLoose font'>X: {scoreLoose}</p>
      </div>
      <div className='picturesGame'>
        {currentImages.map((image) => (
          <img
            className='pictureGame'
            key={image.src}
            src={image.src}
            alt={image.src}
            onClick={() => handleImageClick(image)}
          />
        ))}
        {currentImages.map((image) => (
          <p>{image.isCorrect.toString()}</p>
        ))}
      </div>
    </div>
  );
}

export default Production