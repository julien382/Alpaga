import './Galerie.css'
import alpagaMain from "../../assets/alpagaMountain_cut.png";
import alpagablanc from "../../assets/2alpagablanc.jpg";
import tonte from "../../assets/tonte.jpg";

import tonteDebout from "../../assets/tonteDebout.png";
import notTondu from "../../assets/notTondu.png";
import tondu from "../../assets/tondu.png";
import laine from "../../assets/laine.jpg";


const Galerie = () => {

    const images = [
        alpagaMain,
        alpagablanc,
        tonte,
        alpagaMain,
        alpagablanc,
        tonte,
        // Ajoutez d'autres noms d'images ici
      ];

    return (
        <div className="gallery-container">
            <h1>Galerie d'images</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image} alt={`Image ${index + 1}`} />
                </div>
                ))}
            </div>
        </div>
    )
}

export default Galerie