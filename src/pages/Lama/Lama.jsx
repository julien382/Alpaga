import './Lama.css'
import lamaMain from "../../assets/lama.png";

import Accueil from '../../components/Accueil/Accueil';
import GameChoice from '../../components/GameChoice/GameChoice';


const Lama = () => {

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
            <GameChoice></GameChoice>
        </div>
    )
}

export default Lama