import './AccueilType.css'

const AccueilType = ({image, title, texte}) => {


    return (
        <div className='part1_AccueilType'>
                <div className='partTexteAccueilType'>
                    <h1 className='titleAccueilType font color1'>{title}</h1>
                    <p className='paragrapheTitleAccueilType'>{texte}</p>
                </div>
                <div className='alpagaMainContainerAccueilType'>  
                    <img className='alpagaMainAccueilType' src={image} alt="alpagaMainAccueilType" />
                </div>
            </div>
    )
}

export default AccueilType