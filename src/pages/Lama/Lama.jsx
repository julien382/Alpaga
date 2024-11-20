import './Lama.scss'
import lamaMain from "../../assets/lama/lama.png";

import Accueil from '../../components/Accueil/Accueil';
import GameChoice from '../../components/GameChoice/GameChoice';
import InfosAnimal from '../../components/InfosAnimal/InfosAnimal';


const Lama = () => {

    return (
        <div className='accueil'>
            <Accueil image={lamaMain} title="Lama" texte="Les lamas sont des mammifères domestiqués. Ils ont été utilisés depuis longtemps pour leur viande, leur laine et leur force de travail. Ils sont appréciés comme animaux de compagnie en raison de leur nature calme et docile."> 
            </Accueil>

            <InfosAnimal 
                image={lamaMain}
                text1={<span>Bien que <strong>le lama et l'alpaga</strong> soient tous deux des membres de la famille des camélidés et partagent des similitudes, il existe <strong>plusieurs différences entre eux.</strong></span>}
                text2={<span>Les lamas ont tendance à avoir un caractère plus indépendant et peuvent être <strong>plus réservés avec les humains.</strong></span>}
                text3={<span><strong>La laine de lama</strong> est généralement utilisée pour des produits plus grossiers, tels que <strong>des tapis ou des cordes.</strong></span>}
                textSize={<span>Ils mesurent généralement entre <strong>1,5 et 1,8 mètre</strong> de hauteur <strong>au garrot</strong></span>}
                textPoids={<strong>≃ 130 à 200 kg</strong>}
                textAge={<strong>≃ 20 à 25 ans</strong>}
            />

            <GameChoice></GameChoice>
        </div>
    )
}

export default Lama