import { useEffect } from "react";
import { useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import {doc, getDoc} from "firebase/firestore"; 
import { db } from "../firebase/config";


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const obtenerItem = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          
          setItem({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.error("El documento no existe");
          
        }
      } catch (error) {
        console.error("Error al obtener el item:", error);
        
      }
    };

    if (id) {
     
      obtenerItem();
    }

  }, [id]);

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  );
};


export default ItemDetailContainer
