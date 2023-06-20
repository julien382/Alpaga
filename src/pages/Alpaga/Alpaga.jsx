import './Alpaga.scss'
import alpagaMain from "../../assets/mainAlpaga_cut.png";
import alpagaBrown from "../../assets/alpagaBrown_cut.png";
import cria from "../../assets/cria.jpg";
import crias from "../../assets/crias.jpg";
import Accueil from '../../components/Accueil/Accueil';

const Alpaga = () => {


    return (
        <div className='accueil'>

            <Accueil image={alpagaMain} title="Alpaga" texte={
                <span>Les alpagas sont des animaux domestiques originaires d'Amérique du Sud, ils sont proches cousins des lamas,<span className="variationParagrapheAccueil"> des guanacos et des vigognes.</span>
                </span>}> 
            </Accueil>
            
            <div className='part2_Accueil'>
                <div className='part2_textContainer'>
                    <p className='part2_Paragraphe1'>Les alpagas ont une silhouette élégante et gracile. Ils sont plus petits que les lamas, avec une hauteur au garrot allant de 81 à 99 cm environ. Leur pelage est dense, soyeux et disponible dans une large gamme de couleurs, notamment le blanc, le noir, le brun, le gris et le beige.</p>
                    <div className='part2_ParagrapheRow'>
                        <p className='part2_Paragraphe2'>Les alpagas sont des animaux dociles et curieux. Ils sont généralement amicaux et s'adaptent facilement à l'élevage.</p>
                        <p className='part2_Paragraphe4'>La durée de vie moyenne d'un alpaga est d'environ 15 à 20 ans</p>
                    </div>
                    <p className='part2_Paragraphe3'>Les alpagas sont considérés comme une espèce domestique, mais certaines populations d'alpagas sauvages existent toujours dans les régions reculées des Andes. Des efforts de conservation sont déployés pour préserver la diversité génétique de ces populations sauvages.</p>
                </div>
                <div className='part2_imageTextContainer'>
                    <div className='part2_alpagaImageContainer'>
                        <img className='part2_alpagaImage' src={alpagaBrown} alt="alpagaBrown" />
                    </div>
                    <p className='part2_Paragraphe5'> En général, les alpagas adultes pèsent entre 55 et 84 kg, avec une moyenne d'environ 65 kg pour les femelles et 75 kg pour les mâles.</p>
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