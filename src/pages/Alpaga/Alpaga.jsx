import './Alpaga.css'
import alpagaMain from "../../assets/mainAlpaga.png";
import alpagaBrown from "../../assets/alpagaBrown.png";

const Alpaga = () => {


    return (
        <div className='accueil'>
            <div className='part1_Accueil'>
                <img className='alpagaMain' src={alpagaMain} alt="alpagaMain" />
                <div className='partTexteAccueil'>
                    <h1 className='titleAccueil font color1'>Alpaga</h1>
                    <p className='paragrapheTitleAccueil'> Les alpagas sont des animaux domestiques originaires d'Amérique du Sud, ils sont proches cousins des lamas, <span className='font color2'>des guanacos et des vigognes.</span></p>
                </div>
            </div>
            <div className='part2_Accueil'>
                <div className='part2_textContainer'>
                    <p className='part2_Paragraphe1'>Les alpagas ont une silhouette élégante et gracile. Ils sont plus petits que les lamas, avec une hauteur au garrot allant de 81 à 99 cm environ. Leur pelage est dense, soyeux et disponible dans une large gamme de couleurs, notamment le blanc, le noir, le brun, le gris et le beige.</p>
                    <p className='part2_Paragraphe2'>Les alpagas sont des animaux dociles et curieux. Ils sont généralement amicaux et s'adaptent facilement à l'élevage.</p>
                    <p className='part2_Paragraphe3'>Les alpagas sont considérés comme une espèce domestique, mais certaines populations d'alpagas sauvages existent toujours dans les régions reculées des Andes. Des efforts de conservation sont déployés pour préserver la diversité génétique de ces populations sauvages.</p>
                </div>
                <div className='part2_imageTextContainer'>
                    <p className='part2_Paragraphe4'>La durée de vie moyenne d'un alpaga est d'environ 15 à 20 ans</p>
                    <img className='part2_alpagaImage' src={alpagaBrown} alt="alpagaBrown" />
                    <p className='part2_Paragraphe5'> En général, les alpagas adultes pèsent entre 55 et 84 kg, avec une moyenne d'environ 65 kg pour les femelles et 75 kg pour les mâles.</p>
                </div>
            </div>
            <div className='part3_Accueil'>
                <img className='part2_alpagaImage' src={alpagaBrown} alt="alpagaBrown" />
                <p className='part3_Paragraphe1'>Un bébé alpaga est appelé un "cria". Ils allaitent leur mère pendant plusieurs mois, dépendant entièrement du lait maternel pour leur nutrition. Ils commencent généralement à consommer progressivement de la végétation solide, comme l'herbe et le foin, autour de 2 à 3 semaines</p>
                <img className='part2_alpagaImage' src={alpagaBrown} alt="alpagaBrown" />
            </div>
            
        </div>
    )
}

export default Alpaga