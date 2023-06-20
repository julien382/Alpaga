import './Galerie.scss'
import damian from "../../assets/damian-barczak-XIDi_OUMU-I-unsplash.jpg";
import josiah from "../../assets/josiah-farrow-mYxtYpSJvbw-unsplash.jpg";
import pexels from "../../assets/pexels-ali-atakan-açıkbaş-10595504.jpg";
import istockphoto from "../../assets/istockphoto-640829652-612x612.jpg";
import istockphoto2 from "../../assets/istockphoto-160558081-612x612.jpg";
import pexels2 from "../../assets/pexels-ali-atakan-açıkbaş-10595518.jpg";
import alpaca from "../../assets/alpaca-gb3f7779e3_1920.jpg";
import pexels3 from "../../assets/pexels-paige-thompson-13990654.jpg";
import alpaca2 from "../../assets/alpaca-4366367_1280.jpg";
import arne from "../../assets/arne-verbist-JfR2z3v7w0M-unsplash.jpg";
import crias from "../../assets/crias.jpg";
import pexels4 from "../../assets/pexels-ali-atakan-açıkbaş-10595510.jpg";

const Galerie = () => {

  const images = [
    {
      src: damian,
      alt: 'Image 1',
    },
    {
      src: josiah,
      alt: 'Image 2',
    },
    {
      src: pexels,
      alt: 'Image 3',
    },
    {
      src: istockphoto,
      alt: 'Image 4',
    },
    {
      src: istockphoto2,
      alt: 'Image 5',
    },
    {
      src: pexels2,
      alt: 'Image 6',
    },
    {
      src: alpaca,
      alt: 'Image 7',
    },
    {
      src: pexels3,
      alt: 'Image 8',
    },
    {
      src: alpaca2,
      alt: 'Image 9',
    },
    {
      src: arne,
      alt: 'Image 10',
    },
    {
      src: crias,
      alt: 'Image 11',
    },
    {
      src: pexels4,
      alt: 'Image 12',
    },
  ];

    return (
      <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <div className="square-crop">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
            />
          </div>
        </div>
      ))}
    </div>
    )
}

export default Galerie