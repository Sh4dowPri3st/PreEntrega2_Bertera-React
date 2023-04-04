import "./App.css";
// COMPONENTS
import React, {useState} from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CardUser from "./components/CardUser/CardUser";
import Footer from "./components/Footer/Footer";
// import { useState } from "react";


function App() {
    
    const [contador,setContador] = useState(0)
    
    const incrementar = () => {
      setContador(contador + 1)
      console.log(contador)
    }

    return(
      <div>
        <NavBar />
        <ItemListContainer title="BILLETERAS DE PAPEL" />
        <div className="UserSection">
          <CardUser 
            name="Billetera" 
            date="Ecologicas de papel" 
            description="Las billeteras de papel son una alternativa ecológica y amigable con el medio ambiente, ya que son biodegradables y reciclables." 
            img="https://i.imgur.com/wBihA3u.png" 
          />
          <CardUser 
            name="Billetera" 
            date="Ecologicas de papel" 
            description="¡son muy resistentes y duraderas! ¡No sacrifiques el estilo por el medio ambiente, elige una billetera de papel!" 
            img="https://i.imgur.com/bPUMKwe.png" 
          />
          <CardUser 
            name="Billetera" 
            date="Ecologicas de papel" 
            description="#ecológicas #sostenibilidad #cuidaelplaneta #alternativasustentable" 
            img="https://i.imgur.com/ucFSOFb.png" 
          />
          <CardUser 
            name="Billetera" 
            date="Ecologicas de papel" 
            description="Somos conscientes de la importancia de cuidar nuestro planeta y queremos contribuir a hacerlo de manera sostenible y responsable." 
            img="https://i.imgur.com/KzU9AvR.png" 
          />
        </div>
        <div>
          <h3>La  cuenta es: {contador}</h3>
          <button onClick={incrementar}>INCREMENTAR</button>
        </div>
        <Footer />
      </div>
  );
}

export default App;
