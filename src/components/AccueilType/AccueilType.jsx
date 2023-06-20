import './AccueilType.scss'

const AccueilType = ({image, title, texte}) => {


    return (
        <div className='part1_AccueilType'>
                <div className='partTexteAccueilType'>
                    <h1 className='titleAccueilType font'>{title}</h1>
                    <p className='paragrapheTitleAccueilType'>{texte}</p>
                </div>
                <div className='alpagaMainContainerAccueilType'>  
                    <img className='alpagaMainAccueilType' src={image} alt="alpagaMainAccueilType" />
                </div>
            </div>
    )
}

export default AccueilType