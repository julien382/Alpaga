import './Galerie.scss'
import alpagaMain from "../../assets/alpagaMountain_cut.png";
import alpagablanc from "../../assets/2alpagablanc.jpg";
import tonte from "../../assets/tonte.jpg";


const Galerie = () => {

  const images = [
    {
      src: alpagaMain,
      alt: 'Image 1',
    },
    {
      src: alpagablanc,
      alt: 'Image 2',
    },
    {
      src: tonte,
      alt: 'Image 3',
    },
    {
      src: alpagaMain,
      alt: 'Image 4',
    },
    {
      src: alpagablanc,
      alt: 'Image 5',
    },
    {
      src: tonte,
      alt: 'Image 6',
    },
    {
      src: alpagaMain,
      alt: 'Image 7',
    },
    {
      src: alpagablanc,
      alt: 'Image 8',
    },
    {
      src: tonte,
      alt: 'Image 9',
    },
    {
      src: alpagaMain,
      alt: 'Image 10',
    },
    {
      src: alpagablanc,
      alt: 'Image 11',
    },
    {
      src: tonte,
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