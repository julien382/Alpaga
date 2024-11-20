import InfoVisuel from '../InfoVisuel/InfoVisuel'
import './InfosAnimal.scss'
import Size from '../../assets/icon/hauteur.png';
import Poids from '../../assets/icon/poids.png';
import Age from '../../assets/icon/age.png';


const InfosAnimal = ({image, text1, text2, text3, textSize, textPoids, textAge}) => {


    return (
        <div className='part2_Accueil'>
                <div className='part2_mainText'>
                    <p>{text1}</p>
                </div>
                <div className='part2_containerTextImage'>
                    <div className='part2_imageContainer'>
                        <img className='part2_image' src={image} alt="alpagaMarron" />
                    </div>
                    <div className='part2_paragraphe1'>
                        <p>{text2}</p>
                    </div>
                    <InfoVisuel image={Size} text={textSize}/>

                </div>
                <div className='part2_containerPoidsParagraphe2'>
                    <InfoVisuel image={Poids} text={textPoids}/>
                    <InfoVisuel image={Age} text={textAge}/>
                    <div className='part2_paragraphe2'>
                        <p>{text3}</p>
                    </div>

                </div>
            </div>
        
    )
}

export default InfosAnimal