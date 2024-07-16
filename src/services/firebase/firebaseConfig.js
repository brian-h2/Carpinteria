import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD1Ca0ZxonlT0oGV6wZrXhaGD8TxTdM4yo",
  authDomain: "carpinteria-archivos.firebaseapp.com",
  projectId: "carpinteria-archivos",
  storageBucket: "carpinteria-archivos.appspot.com",
  messagingSenderId: "1031659746343",
  appId: "1:1031659746343:web:1a3664d44e8e744d2b0a02"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Función para listar y obtener URLs de archivos
const listAndGetUrls = async (directoryPath) => {
  const listRef = ref(storage, directoryPath);
  try {
    const res = await listAll(listRef);
    const urls = await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return url;
      })
    );
    return urls;
  } catch (error) {
    console.error("Error al listar y obtener URLs de archivos", error);
    throw error;
  }
};

export { listAndGetUrls };
