import './GameChoice.css'
import { useEffect, useState } from 'react';

import truemainAlpaga from "../../assets/2alpagablanc.jpg";
import truealpacamange from "../../assets/alpaca-4366367_1280.jpg";
import truealpacamain from "../../assets/alpaca-5564884_1280_preview_rev_1.png";
import truealpacapetit from "../../assets/alpaca-gacb7ec03c_1920.jpg";
import truealpaga404 from "../../assets/alpaga404.png";
import truealpagaMarron from "../../assets/alpagaMarron.png";
import truealpagaMountain_cut from "../../assets/alpagaMountain_cut.png";
import truecria from "../../assets/cria.jpg";
import truecrias from "../../assets/crias.jpg";
import truehuacaya from "../../assets/huacaya.png";
import truemainAlpaga_cut from "../../assets/mainAlpaga_cut.png";
import truenotTondu from "../../assets/notTondu.png";
import truesuri_reverse_cut from "../../assets/suri_reverse_cut.png";
import truetonte from "../../assets/tonte.jpg";
import truetonteDebout from "../../assets/tonteDebout.png";
import truepetitmarron from "../../assets/alpaca-gb3f7779e3_1920.jpg";
import truearne from "../../assets/arne-verbist-JfR2z3v7w0M-unsplash.jpg";
import truedamian from "../../assets/damian-barczak-XIDi_OUMU-I-unsplash.jpg";
import trueistockphoto from "../../assets/istockphoto-160558081-612x612.jpg";
import trueistockphoto2 from "../../assets/istockphoto-640829652-612x612.jpg";
import truejosiah from "../../assets/josiah-farrow-mYxtYpSJvbw-unsplash.jpg";
import truenadira from "../../assets/nadira-dean-nklvlXm5RU0-unsplash.jpg";
import truepexels from "../../assets/pexels-ali-atakan-açıkbaş-10595504.jpg";
import truepexels2 from "../../assets/pexels-ali-atakan-açıkbaş-10595518.jpg";
import truepexels3 from "../../assets/pexels-ali-atakan-açıkbaş-10595518.jpg";

import falsemainAlpaga from "../../assets/lama/lama.png";

const allImagesTrue = [
    { src: truemainAlpaga, isCorrect: true},
    { src: truealpacamange, isCorrect: true},
    { src: truealpacamain, isCorrect: true},
    { src: truealpacapetit, isCorrect: true},
    { src: truealpaga404, isCorrect: true},
    { src: truealpagaMarron, isCorrect: true},
    { src: truealpagaMountain_cut, isCorrect: true},
    { src: truecria, isCorrect: true},
    { src: truecrias, isCorrect: true},
    { src: truehuacaya, isCorrect: true},
    { src: truemainAlpaga_cut, isCorrect: true},
    { src: truenotTondu, isCorrect: true},
    { src: truesuri_reverse_cut, isCorrect: true},
    { src: truetonte, isCorrect: true},
    { src: truetonteDebout, isCorrect: true},
    { src: truealpaga404, isCorrect: true},
    { src: truepetitmarron, isCorrect: true},
    { src: truearne, isCorrect: true},
    { src: truedamian, isCorrect: true},
    { src: trueistockphoto, isCorrect: true},
    { src: trueistockphoto2, isCorrect: true},
    { src: truejosiah, isCorrect: true},
    { src: truenadira, isCorrect: true},
    { src: truepexels, isCorrect: true},
    { src: truepexels2, isCorrect: true},
    { src: truepexels3, isCorrect: true}
  ];
  
  const allImagesFalse = [
    { src: falsemainAlpaga, isCorrect: false}
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
                </div>
            </div>
    )
}

export default GameChoice