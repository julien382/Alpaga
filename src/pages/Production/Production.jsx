import './Production.css';
import React, { useState } from 'react';

import alpagaMain from "../../assets/alpagaAlimentation.png";
import notTondu from "../../assets/notTondu.png";
import tondu from "../../assets/tondu.png";

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
                <p className='part2_production_Paragraphe1'>Le foin ou la paille de qualité supérieure sont la base de leur alimentation, avec une consommation quotidienne d'environ 2 à 3% de leur poids corporel. L'accès à de l'eau propre et fraîche en permanence est également essentiel.</p>
                <p className='part2_production_Paragraphe2'>En plus du foin, les alpagas peuvent être nourris avec des aliments commerciaux pour alpagas, des suppléments minéraux, des vitamines, des légumes, des fruits et des herbes.</p>
                <p className='part2_production_Paragraphe3'>Il est important de surveiller attentivement l'état de santé des alpagas et d'adapter leur régime alimentaire en conséquence pour prévenir les problèmes de santé courants.</p>
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
              <div className='productionImageContainer'>
                <img className='productionImage' src={notTondu} alt={notTondu} />
              </div>
              <div className='productionImageContainer'>
                <img className='productionImage' src={notTondu} alt={notTondu} />
              </div>
              <div className='productionImageContainer'>
                <img className='productionImage' src={notTondu} alt={notTondu} />
              </div>
            </div>
        </div>
  );
}

export default Production