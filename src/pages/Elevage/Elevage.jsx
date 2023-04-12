import './Elevage.css'
import alpagaMain from "../../assets/alpaca-4366367_1280.jpg";
import alpagaLogo from "../../assets/logoAlpaga.png";

import ImageTracker from '../../components/ImageTracker/ImageTracker';

const Elevage = () => {
    

    return (
        <div className='elevage'>
            <ImageTracker image={alpagaMain} />
            <ImageTracker image={alpagaLogo} />

        </div>
    )
}

export default Elevage