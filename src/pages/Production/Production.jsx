import './Production.scss';
import React, { useState } from 'react';

import ImageTracker from '../../components/ImageTracker/ImageTracker';

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
      <AccueilType image={tonteDebout} title="Production" texte="Les alpagas sont élevés principalement pour leur laine de grande qualité."> 
      </AccueilType>

      <div className='productionImages'>
        <ImageTracker image={alpagablanc} />
        <ImageTracker image={laine} />
        <ImageTracker image={tonte} />
      </div>

      <div className='part2_production'>
        <div className='flex'>
          <div className='part2_production_paragraphe1'>
             <p><strong>La production</strong> de laine d'alpaga implique généralement la <strong>tonte régulière</strong> des animaux pour récolter leur toison.</p>
          </div>
          <div className='part2_production_paragraphe2'>
             <p><strong>Pulls, écharpes, bonnets</strong>... la laine d'alpaga est un vrai bonheur à porter, en plus d'être <strong>résistante et hypoallergénique</strong>.</p>
          </div>
        </div>
        <div className='flex'>
          <div className='part2_production_paragraphe2'>
             <p>Chaque année, <strong>au printemps</strong>, on tond délicatement sa toison. Après un bon nettoyage, les fibres sont transformées en fils, puis en vêtements et accessoires.</p>
          </div>
          <div className='part2_production_paragraphe2'>
             <p>Avec leur épaisse toison, <strong>ils peuvent souffrir de la chaleur</strong>. <strong>La tonte les libère</strong> de ce poids et leur permet de réguler leur température corporelle plus facilement. Ils sont alors plus à l'aise pour se déplacer et profiter de l'été.</p>
          </div>
        </div>
        <div className='part2_production_paragraphe1'>
             <p>En plus de ses qualités exceptionnelles, la laine d'alpaga est respectueuse de l'environnement. Les alpagas ont un <strong>faible impact écologique</strong> : ils broutent sans abîmer les sols, et leur tonte ne nuit pas à leur bien-être. Opter pour la laine d'alpaga, c'est privilégier une mode éco-responsable et soutenir une production respectueuse des animaux et de la planète.</p>
          </div>
          
      </div>

      <div className='tonduFondu'>
        <h1 className='titleTonduFondu'>Tond l'alpaga :</h1>
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