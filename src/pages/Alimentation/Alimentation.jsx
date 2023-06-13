import './Alimentation.css'
import alpagaMain from "../../assets/alpagaAlimentation.png";
import AccueilType from '../../components/AccueilType/AccueilType';

const Alimentation = () => {


    return (
        <div className='alimentation'>
            <AccueilType image={alpagaMain} title="Alimentation" texte="Les alpagas sont des animaux herbivores qui ont besoin d'une alimentation équilibrée et nutritive pour maintenir leur santé et leur bien-être."> 
            </AccueilType>
            <div className='part2_alimentation'>
                <p className='part2_alimentation_Paragraphe1'>Le foin ou la paille de qualité supérieure sont la base de leur alimentation, avec une consommation quotidienne d'environ 2 à 3% de leur poids corporel. L'accès à de l'eau propre et fraîche en permanence est également essentiel.</p>
                <p className='part2_alimentation_Paragraphe2'>En plus du foin, les alpagas peuvent être nourris avec des aliments commerciaux pour alpagas, des suppléments minéraux, des vitamines, des légumes, des fruits et des herbes.</p>
                <p className='part2_alimentation_Paragraphe3'>Il est important de surveiller attentivement l'état de santé des alpagas et d'adapter leur régime alimentaire en conséquence pour prévenir les problèmes de santé courants.</p>
            </div>
        </div>
    )
}

export default Alimentation