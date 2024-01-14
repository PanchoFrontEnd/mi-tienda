import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "../firebase/config";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");

  const { categoria } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosRef = collection(db, "productos");

      
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

        const querySnapshot = await getDocs(q);
        setProductos(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      
        if (categoria) {
          setTitulo(`Productos - ${categoria}`);
        } else {
          setTitulo("Productos");
        }
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    obtenerProductos();
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};


export default ItemListContainer;


