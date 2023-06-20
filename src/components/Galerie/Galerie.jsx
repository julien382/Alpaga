import './Galerie.scss'
import alpagaMain from "../../assets/alpagaMountain_cut.png";
import alpagablanc from "../../assets/2alpagablanc.jpg";
import tonte from "../../assets/tonte.jpg";


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
            <div className="image-grid">
                {images.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image} alt={`alpaga ${index + 1}`} />
                </div>
                ))}
            </div>
        </div>
    )
}

export default Galerie