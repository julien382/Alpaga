import InfoVisuel from '../InfoVisuel/InfoVisuel'
import './InfosAnimal.scss'
import alpagaMarron from "../../assets/alpagaMarron.png";
import Size from '../../assets/icon/hauteur.png';
import Poids from '../../assets/icon/poids.png';
import Age from '../../assets/icon/age.png';


const InfosAnimal = ({image, text}) => {


    return (
        <div className='part2_Accueil'>
                <div className='part2_mainText'>
                    <p>Les alpagas sont considérés comme <strong>une espèce domestique</strong>, mais certaines populations d'alpagas sauvages existent toujours dans les régions reculées des Andes. Des efforts de conservation sont déployés pour préserver la diversité génétique de ces populations sauvages.</p>
                </div>
                <div className='part2_containerTextImage'>
                    <div className='part2_imageContainer'>
                        <img className='part2_image' src={alpagaMarron} alt="alpagaMarron" />
                    </div>
                    <div className='part2_paragraphe1'>
                        <p><strong>Leur pelage</strong> est dense, soyeux et disponible dans une large gamme de couleurs, notamment <strong>le blanc, le noir, le brun, le gris et le beige.</strong></p>
                    </div>
                    <InfoVisuel image={Size} text={<span>Plus petits que les lamas, avec une <strong>hauteur au garrot</strong> allant de <strong>81 à 99 cm</strong> environ.</span>}/>

                </div>
                <div className='part2_containerPoidsParagraphe2'>
                    <InfoVisuel image={Poids} text={<strong>≃ 55 à 84 kg</strong>}/>
                    <InfoVisuel image={Age} text={<strong>≃ 15 à 20 ans</strong>}/>
                    <div className='part2_paragraphe2'>
                        <p>Ce sont <strong>des animaux dociles et curieux.</strong> Ils sont généralement <strong>amicaux</strong> et s'adaptent facilement à l'élevage.</p>
                    </div>

                </div>
            </div>
        
    )
}

export default InfosAnimal