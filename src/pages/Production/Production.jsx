import './Production.css';
import React, { useState } from 'react';
import alpagaMain from "../../assets/alpagaAlimentation.png";
import alpagaBrown from "../../assets/alpagaBrown.png";
import Lama from "../../assets/alpaca-5564884_1280_preview_rev_1.png";
import Lamalogo from "../../assets/logoAlpaga.png";

const images = [
  { src: alpagaMain, alt: 'Lama 1' },
  { src: alpagaBrown, alt: 'Lama 2' },
  { src: Lama, alt: 'Alpaga 1' },
  { src: Lamalogo, alt: 'Alpaga 2' },
];

const Production = () => {

  const [score, setScore] = useState(0);
  const [correctImage, setCorrectImage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  function handleImageClick(image) {
    if (image === correctImage) {
      setScore(score + 1);
    }
    selectRandomImages();
  }

  function selectRandomImages() {
    const alpagaIndex = Math.floor(Math.random() * 2) + 2; // Index of alpaga image
    let lamaIndex = Math.floor(Math.random() * 2); // Index of lama image
    while (lamaIndex === alpagaIndex % 2) {
      lamaIndex = Math.floor(Math.random() * 2);
    }
    setSelectedImage([images[alpagaIndex], images[lamaIndex]]);
    setCorrectImage(alpagaIndex === 2 ? 'alpaga' : 'lama');
  }
  
    return (
      <div className="image-game">
        <h1>Mini jeu d'images</h1>
        <p>Score: {score}</p>
        {selectedImage !== null && (
          <div>
            <p>test</p>
            <img
              src={selectedImage[0].src}
              alt={selectedImage[0].alt}
              onClick={() => handleImageClick('alpaga')}
              className={correctImage === 'alpaga' ? 'selected' : ''}
            />
            <img
              src={selectedImage[1].src}
              alt={selectedImage[1].alt}
              onClick={() => handleImageClick('lama')}
              className={correctImage === 'lama' ? 'selected' : ''}
            />
          </div>
        )}
      </div>
    );
  }

export default Production