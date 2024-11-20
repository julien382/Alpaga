import './Alpaga.scss'
import alpagaMain from "../../assets/mainAlpaga_cut.png";
import cria from "../../assets/cria.jpg";
import crias from "../../assets/crias.jpg";
import Accueil from '../../components/Accueil/Accueil';
import InfosAnimal from '../../components/InfosAnimal/InfosAnimal';
import alpagaMarron from "../../assets/alpagaMarron.png";


const Alpaga = () => {


    return (
        <div className='accueil'>

            <Accueil image={alpagaMain} title="Alpaga" texte={
                <span>Les alpagas sont des animaux domestiques originaires d'Amérique du Sud, ils sont proches cousins<span className="highlight"> des lamas, des guanacos et des vigognes.</span>
                </span>}> 
            </Accueil>

            <InfosAnimal 
                image={alpagaMarron}
                text1={<span>Les alpagas sont considérés comme <strong>une espèce domestique</strong>, mais certaines populations d'alpagas sauvages existent toujours dans les régions reculées des Andes. Des efforts de conservation sont déployés pour préserver la diversité génétique de ces populations sauvages.</span>}
                text2={<span><strong>Leur pelage</strong> est dense, soyeux et disponible dans une large gamme de couleurs, notamment <strong>le blanc, le noir, le brun, le gris et le beige.</strong></span>}
                text3={<span>Ce sont <strong>des animaux dociles et curieux.</strong> Ils sont généralement <strong>amicaux</strong> et s'adaptent facilement à l'élevage.</span>}
                textSize={<span>Plus petits que les lamas, avec une <strong>hauteur au garrot</strong> allant de <strong>81 à 99 cm</strong> environ.</span>}
                textPoids={<strong>≃ 55 à 84 kg</strong>}
                textAge={<strong>≃ 15 à 20 ans</strong>}
            />

            <div className='part3_Accueil'>
                <div className='part3_alpagaImageContainer'>  
                    <img className='part3_alpagaImage' src={crias} alt="alpagaBrown" />
                </div>
                <div className='part3_Paragraphe1Container'>
                    <p className='part3_Paragraphe1'><span className="highlight">Un bébé alpaga est appelé un "cria".</span> Ils allaitent leur mère pendant plusieurs mois, dépendant entièrement du lait maternel pour leur nutrition. Ils commencent généralement à consommer progressivement de la végétation solide, comme l'herbe et le foin, autour de 2 à 3 semaines</p>
                </div>
                <div className='part3_alpagaImageContainer'>
                    <img className='part3_alpagaImage' src={cria} alt="alpagaBrown" />
                </div>
            </div>
            
        </div>
    )
}

export default Alpaga