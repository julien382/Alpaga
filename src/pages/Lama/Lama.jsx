import './Lama.css'
import lamaMain from "../../assets/lama.png";

import truemainAlpaga from "../../assets/mainAlpaga_cut.png";
import truealpaca from "../../assets/alpaca-5564884_1280_preview_rev_1.png";
import truealpaga404 from "../../assets/alpaga404.png";
import falsemainAlpaga from "../../assets/alpagaAlimentation.png";
import falsealpaca from "../../assets/logoAlpaga.png";
import falsealpaga404 from "../../assets/alpagaBrown_cut.png";
import { useEffect, useState } from 'react';
import Accueil from '../../components/Accueil/Accueil';

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

const Lama = () => {

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
        <div className='accueil'>
            <Accueil image={lamaMain} title="Lama" texte="Les lamas sont des mammifères domestiqués. Ils ont été utilisés depuis longtemps pour leur viande, leur laine et leur force de travail. Ils sont appréciés comme animaux de compagnie en raison de leur nature calme et docile."> 
            </Accueil>
            <div className='lamapart2_Accueil'>
                    <p className='lamapart2_ParagrapheTitle'>Bien que le lama et l'alpaga soient tous deux des membres de la famille des camélidés et partagent des similitudes, il existe plusieurs différences entre eux, notamment :</p>
                    <div className='lamapart2_ParagraphePartFusion'>
                        <div className='lamapart2_ParagraphePart1'>
                            <p className='lamapart2_Paragraphe1Part1'>Caractère : Les lamas ont tendance à avoir un caractère plus indépendant et peuvent être plus réservés avec les humains.</p>
                            <p className='lamapart2_Paragraphe2Part1'>Taille : Ils mesurent généralement entre 1,5 et 1,8 mètre de hauteur au garrot et peuvent peser de 130 à 200 kg.</p>
                        </div>
                        <div className='lamapart2_ParagraphePart2'>
                            <p className='lamapart2_Paragraphe1Part2'>Utilisation : Les lamas sont souvent utilisés comme animaux de bât, capables de porter des charges relativement lourdes sur de longues distances. En revanche, les alpagas sont principalement élevés pour leur laine de haute qualité.</p>
                            <p className='lamapart2_Paragraphe2Part2'>La laine de lama est généralement utilisée pour des produits plus grossiers, tels que des tapis ou des cordes.</p>
                        </div>
                    </div>
                    <p className='lamapart2_Paragraphe3'>Élevage : Les lamas sont souvent élevés en petits troupeaux pour leur rôle de bât et de protection. Les alpagas, quant à eux, sont élevés principalement pour leur laine et sont généralement gardés en plus grands groupes.</p>
            </div>
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
        </div>
    )
}

export default Lama