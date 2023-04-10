import './Alimentation.css'
import alpagaMain from "../../assets/alpagaAlimentation.png";
import alpagaBrown from "../../assets/alpagaBrown.png";

const Alimentation = () => {


    return (
        <div className='alimentation'>
            <div className='part1_Alimentation'>
                <div className='partTexteAlimentation'>
                    <h1 className='titleAlimentation font color1'>Alimentation</h1>
                    <p className='paragrapheTitleAlimentation'>Les alpagas sont des animaux herbivores qui ont besoin d'une alimentation équilibrée et nutritive pour maintenir leur santé et leur bien-être.</p>
                </div>
                <img className='alpagaMainAlimentation' src={alpagaMain} alt="alpagaMain" />
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

export default Alimentation