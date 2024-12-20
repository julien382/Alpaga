import './Alimentation.scss'
import alpagaMain from "../../assets/alpagaAlimentation.png";
import AccueilType from '../../components/AccueilType/AccueilType';

const Alimentation = () => {


    return (
        <div className='alimentation'>
            <AccueilType image={alpagaMain} title="Alimentation" texte="Les alpagas sont des animaux herbivores qui ont besoin d'une alimentation équilibrée et nutritive pour maintenir leur santé et leur bien-être."> 
            </AccueilType>
            <div className='part2_alimentation'>
                <div className='part2_alimentation_paragraphe1'>
                    <p><strong>L’herbe</strong> est leur <strong>aliment principal.</strong> Ils adorent brouter dans les prairies</p>
                </div>
                <div className='part2_alimentation_paragraphe2'>
                    <p><strong>Le foin est un complément important</strong>, surtout en hiver ou lorsque l'herbe est moins abondante. Des compléments minéraux et vitaminés peuvent être nécessaires pour assurer un apport équilibré en nutriments.</p>
                </div>

            </div>
        </div>
    )
}

export default Alimentation