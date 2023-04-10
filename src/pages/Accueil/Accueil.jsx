import './Accueil.css'
import alpagaMain from "../../assets/mainAlpaga.png";
import alpagaBrown from "../../assets/alpagaBrown.png";

const Accueil = () => {


    return (
        <div className='accueil'>
            <div className='part1_Accueil'>
                <img className='alpagaMain' src={alpagaMain} alt="alpagaMain" />
                <div className='partTexteAccueil'>
                    <h1 className='titleAccueil font color1'>Alpaga</h1>
                    <p className='paragrapheTitleAccueil'>Les alpagas sont des animaux domestiques originaires des Andes du Sud-Amérique, ils sont proches cousins des lamas, <span className='font color2'>des guanacos et des vigognes.</span></p>
                </div>
            </div>
            <div className='part2_Accueil'>
                <div className='part2_textContainer'>
                    <p className='part2_Paragraphe1'>Les alpagas ont été domestiqués il y a environ 6 000 ans par les peuples indigènes des Andes.</p>
                    <p className='part2_Paragraphe2'>Les alpagas ont été domestiqués il y a environ 6 000 ans par les peuples indigènes des Andes. </p>
                    <p className='part2_Paragraphe3'>Il y a beaucoup d'autres aspects intéressants à raconter sur les alpagas, ceci n'est qu'un exemple. Il existe de nombreux aspects intéressants à raconter sur l'histoire, les caractéristiques, les avantages écologiques, les différentes races, la domestication, l'élevage, l'utilisation de leur laine, leur viande, leur lait et bien plus encore.</p>
                </div>
                <img className='part2_alpagaImage' src={alpagaBrown} alt="alpagaBrown" />
            </div>
            <div className='part3_Accueil'>
                <p className='part3_Paragraphe1'>Les alpagas sont des animaux domestiques originaires des Andes du Sud-Amérique, ils sont proches cousins des lamas, des guanacos et des vigognes.</p>
                <p className='part3_Paragraphe2'>Les alpagas sont des animaux domestiques originaires des Andes du Sud-Amérique, ils sont proches cousins des lamas, des guanacos et des vigognes.</p>
                <p className='part3_Paragraphe3'>Les alpagas sont des animaux domestiques originaires des Andes du Sud-Amérique, ils sont proches cousins des lamas, des guanacos et des vigognes.</p>
            </div>
            
        </div>
    )
}

export default Accueil