import './Production.css';
import React, { useState } from 'react';

import ImageTracker from '../../components/ImageTracker/ImageTracker';

import alpagaMain from "../../assets/alpagaAlimentation.png";
import notTondu from "../../assets/notTondu.png";
import tondu from "../../assets/tondu.png";
import alpaga from "../../assets/alpaca-4366367_1280.jpg";
import alpaga2 from "../../assets/alpaca-5564884_1280.jpg";
import alpaga3 from "../../assets/alpaca-gacb7ec03c_1920.jpg";

const Production = () => {

  const [imageSrc, setImageSrc] = useState(notTondu);

  const handleClick = () => {
    setImageSrc(imageSrc === notTondu ? tondu : notTondu);
  };
  

  return (
    <div className='production'>
            <div className='part1_Production'>
                <div className='partTexteProduction'>
                    <h1 className='titleProduction font color1'>Prodution</h1>
                    <p className='paragrapheTitleProduction'>Les alpagas sont des animaux herbivores qui ont besoin d'une alimentation équilibrée et nutritive pour maintenir leur santé et leur bien-être.</p>
                </div>
                <img className='alpagaMainProduction' src={alpagaMain} alt={alpagaMain} />
            </div>
            <div className='part2_production'>
                <p className='part2_production_Paragraphe1'>Les alpagas produisent une laine de haute qualité et recherchée. La laine d'alpaga est appréciée pour sa douceur, sa légèreté et sa chaleur. Elle peut être transformée en fils, en tissus et en produits finis tels que des vêtements, des accessoires et des articles de décoration.</p>
                <p className='part2_production_Paragraphe2'> La production de laine d'alpaga implique généralement la tonte régulière des animaux pour récolter leur toison.</p>
            </div>
            <div className='tonduFondu'>
              <h1 className='titleTonduFondu font color1'>Tond l'alpaga :</h1>
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
            <div className='productionImages'>
              <ImageTracker image={alpaga} />
              <ImageTracker image={alpaga2} />
              <ImageTracker image={alpaga3} />
            </div>
        </div>
  );
}

export default Production