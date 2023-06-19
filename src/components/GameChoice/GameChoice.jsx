import './GameChoice.css'

import truemainAlpaga from "../../assets/mainAlpaga_cut.png";
import truealpaca from "../../assets/alpaca-5564884_1280_preview_rev_1.png";
import truealpaga404 from "../../assets/alpaga404.png";
import falsemainAlpaga from "../../assets/alpagaAlimentation.png";
import falsealpaca from "../../assets/logoAlpaga.png";
import falsealpaga404 from "../../assets/alpagaBrown_cut.png";
import { useEffect, useState } from 'react';

const allImagesTrue = [
    { src: truemainAlpaga, isCorrect: true},
    { src: truealpaca, isCorrect: true},
    { src: truealpaga404, isCorrect: true},
  ];
  
  const allImagesFalse = [
    { src: falsemainAlpaga, isCorrect: false},
    { src: falsealpaca, isCorrect: false},
    { src: falsealpaga404, isCorrect: false},
  ];

const GameChoice = () => {

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
        const correctImage = allImagesTrue[Math.floor(Math.random() * allImagesTrue.length)];
        const incorrectImage = allImagesFalse[Math.floor(Math.random() * allImagesFalse.length)];
        const selectedImages = [correctImage, incorrectImage].sort(() => 0.5 - Math.random());
        return selectedImages;
    };

    // Initialiser le jeu avec un premier tableau d'images
    useEffect(() => {
        const newImages = generateImages();
        setCurrentImages(newImages);
    }, []);


    return (
        <div className='gameChoice'>
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
    )
}

export default GameChoice