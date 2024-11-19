import './Alpaga.scss'
import alpagaMain from "../../assets/mainAlpaga_cut.png";
import alpagaMarron from "../../assets/alpagaMarron.png";
import cria from "../../assets/cria.jpg";
import crias from "../../assets/crias.jpg";
import Accueil from '../../components/Accueil/Accueil';
import InfoVisuel from '../../components/InfoVisuel/InfoVisuel';
import Size from '../../assets/icon/hauteur.png';
import Poids from '../../assets/icon/poids.png';
import Age from '../../assets/icon/age.png';

const Alpaga = () => {


    return (
        <div className='accueil'>

            <Accueil image={alpagaMain} title="Alpaga" texte={
                <span>Les alpagas sont des animaux domestiques originaires d'Amérique du Sud, ils sont proches cousins des lamas,<span className="variationParagrapheAccueil"> des guanacos et des vigognes.</span>
                </span>}> 
            </Accueil>


            
            <div className='part2_Accueil'>
                <div className='part2_mainText'>
                    <p>Les alpagas sont considérés comme une espèce domestique, mais certaines populations d'alpagas sauvages existent toujours dans les régions reculées des Andes. Des efforts de conservation sont déployés pour préserver la diversité génétique de ces populations sauvages.</p>
                </div>
                <div className='part2_containerTextImage'>
                    <div className='part2_imageContainer'>
                        <img className='part2_image' src={alpagaMarron} alt="alpagaMarron" />
                    </div>
                    <div className='part2_paragraphe1'>
                        <p>Leur pelage est dense, soyeux et disponible dans une large gamme de couleurs, notamment le blanc, le noir, le brun, le gris et le beige.</p>
                    </div>
                    <InfoVisuel image={Size} text={<span>Plus petits que les lamas, avec une <strong>hauteur au garrot</strong> allant de 81 à 99 cm environ.</span>}/>

                </div>
                <div className='part2_containerPoidsParagraphe2'>
                    <InfoVisuel image={Poids} text={"≃ 55 à 84 kg"}/>
                    <InfoVisuel image={Age} text={"≃ 15 à 20 ans"}/>
                    <div className='part2_paragraphe2'>
                        <p>Ce sont des animaux dociles et curieux. Ils sont généralement amicaux et s'adaptent facilement à l'élevage.</p>
                    </div>

                </div>
            </div>





            <div className='part3_Accueil'>
                <div className='part3_alpagaImageContainer'>  
                    <img className='part3_alpagaImage' src={crias} alt="alpagaBrown" />
                </div>
                <p className='part3_Paragraphe1'>Un bébé alpaga est appelé un "cria". Ils allaitent leur mère pendant plusieurs mois, dépendant entièrement du lait maternel pour leur nutrition. Ils commencent généralement à consommer progressivement de la végétation solide, comme l'herbe et le foin, autour de 2 à 3 semaines</p>
                <div className='part3_alpagaImageContainer'>
                    <img className='part3_alpagaImage' src={cria} alt="alpagaBrown" />
                </div>
            </div>
            
        </div>
    )
}

export default Alpaga