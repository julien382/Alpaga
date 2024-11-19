import './InfoVisuel.scss'

const InfoVisuel = ({image, text}) => {


    return (
        <div className='InfoVisuel'>
            <div className='circle'>
                <img className='InfoVisuelImage' src={image} alt="alpagaMain" />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default InfoVisuel