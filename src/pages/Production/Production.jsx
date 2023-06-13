import './Production.css';
import React, { useState } from 'react';

import ImageTracker from '../../components/ImageTracker/ImageTracker';

import alpagaMain from "../../assets/alpagaAlimentation.png";
import tonteDebout from "../../assets/tonteDebout.png";
import notTondu from "../../assets/notTondu.png";
import tondu from "../../assets/tondu.png";
import laine from "../../assets/laine.jpg";
import alpagablanc from "../../assets/2alpagablanc.jpg";
import tonte from "../../assets/tonte.jpg";
import AccueilType from '../../components/AccueilType/AccueilType';

const Production = () => {

  const [imageSrc, setImageSrc] = useState(notTondu);

  const handleClick = () => {
    setImageSrc(imageSrc === notTondu ? tondu : notTondu);
  };
  

  return (
    <div className='production'>
      <AccueilType image={tonteDebout} title="Prodution" texte="Les alpagas sont élevés principalement pour leur laine de grande qualité."> 
      </AccueilType>
      <div className='productionImages'>
        <ImageTracker image={alpagablanc} />
        <ImageTracker image={laine} />
        <ImageTracker image={tonte} />
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
      
    </div>
  );
}

export default Production