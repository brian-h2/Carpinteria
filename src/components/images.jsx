import { useEffect, useState } from 'react';
import { imagesData } from '../services/firebase/firestore';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagesFetch = await imagesData();
      setImages(imagesFetch);
    };

    loadImages();
  }, []);

  console.log(images)

  return (
    <div>
      <h2>Galería de Imágenes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img src={image.url} alt={image.name} style={{ width: '200px', height: 'auto' }} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

//Ver como mostrar las imagenes desde firebase 