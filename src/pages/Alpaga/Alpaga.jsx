import './Alpaga.scss'
import alpagaMain from "../../assets/mainAlpaga_cut.png";
import cria from "../../assets/cria.jpg";
import crias from "../../assets/crias.jpg";
import Accueil from '../../components/Accueil/Accueil';
import InfosAnimal from '../../components/InfosAnimal/InfosAnimal';


const Alpaga = () => {


    return (
        <div className='accueil'>

            <Accueil image={alpagaMain} title="Alpaga" texte={
                <span>Les alpagas sont des animaux domestiques originaires d'Amérique du Sud, ils sont proches cousins<span className="highlight"> des lamas, des guanacos et des vigognes.</span>
                </span>}> 
            </Accueil>

            <InfosAnimal />

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