import './Accueil.css'
import alpagaMain from "../../assets/mainAlpaga.png";

const Accueil = () => {


    return (
        <div className='accueil'>
            <div className='part1Accueil'>
                <img className='alpagaMain' src={alpagaMain} alt="alpagaMain" />
                <div className='partTexteAccueil'>
                    <h1 className='titleAccueil font color1'>Alpaga</h1>
                    <p className='paragrapheTitleAccueil'>Les alpagas sont des animaux domestiques originaires des Andes du Sud-Amérique, ils sont proches cousins des lamas, <span className='font color2'>des guanacos et des vigognes.</span></p>
                </div>
            </div>
            <div className='part2Accueil'>
                
            </div>
            <div className='part3Accueil'>
                
            </div>
            
        </div>
    )
}

export default Accueil