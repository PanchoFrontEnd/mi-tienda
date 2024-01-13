import { useState } from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from './components/Navbar';
import Nosotros from "./components/Nosotros";
import './main.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { CartContext } from "./context/CartContext";
 

function App() {

  const [carrito, setCarrito] = useState([]);

  

  return (
   <div>
  <CartContext.Provider value={ {carrito, setCarrito} }>
    <BrowserRouter>

    <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />
        <Route path="/nosotros" element={<Nosotros />}/>
      </Routes>

    </BrowserRouter>
</CartContext.Provider>
   </div>
  );
}



export default App;


