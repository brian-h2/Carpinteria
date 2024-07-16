import { useEffect, useState } from 'react';
import { listAndGetUrls  } from '../services/firebase/firebaseConfig';

const ImageGallery = () => {
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const urls = await listAndGetUrls('imagenes');
        setImageUrl(urls);
      } catch (error) {
        console.error("Error al obtener las URLs de las imágenes", error);
      }
    };

    fetchImages();
  }, []);


  return (
    <div>
     {imageUrl.length > 0 ? (
        imageUrl.map((url, index) => (
          <img key={index} src={url} alt={`Imagen ${index + 1}`} />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ImageGallery;
