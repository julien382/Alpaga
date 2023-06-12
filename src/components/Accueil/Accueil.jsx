import './Accueil.css'

const Accueil = ({image, title, texte}) => {


    return (
        <div className='part1_Accueil'>
                <div className='alpagaMainContainer'>  
                    <img className='alpagaMain' src={image} alt="alpagaMain" />
                </div>
                <div className='partTexteAccueil'>
                    <h1 className='titleAccueil font color1'>{title}</h1>
                    <p className='paragrapheTitleAccueil'>{texte}</p>
                </div>
            </div>
    )
}

export default Accueil