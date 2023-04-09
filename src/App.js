import "./App.css";
// COMPONENTS
import React, {useEffect, useState} from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CardUser from "./components/CardUser/CardUser";
import Footer from "./components/Footer/Footer";
// import CardList from "./components/CardList/CardList";
import CardList from "./components/CardList/CardList";
import DigiCard from "./components/DigiCard/DigiCard";
// import { useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import Person from "./components/Person/Person";

function App() {
    //contador ejemplo del useState
    const [contador,setContador] = useState(0)
    
    const incrementar = () => {
      setContador(contador + 1)
      console.log(contador)
    }
// probando una api de digimon
    console.log(process.env.REACT_APP_API_KEY)
    const [digis, setDigis] = useState([]);
      
    //oculta info sensible  
    const API_KEY = process.env.REACT_APP_API_KEY //  
    
    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://digimon-api.vercel.app/api/${API_KEY}`)
            .then((response) => response.json())
            .then((json) => setDigis(json));
        
            // setIsLoading(false)
        setTimeout(() => {setIsLoading(false)
        }, 500)
        

}, [API_KEY]);
    //
    //probando poner el spinner asincronico
    const[isLoading, setIsLoading] = useState(false)


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
        
      <Person 
        name={"Lautaro Bertera"}
        age={32}
        email={"tuhermana@gmail.com"}
        isMarried={false}
        children={["Guachin", "Lana"]}
      />

        <Footer />
        
        {isLoading ? <Spinner/> :   <CardList/> }
        
      
            
        <div className="Cards-List">
            {digis.map((digi) => {
                return (
                  <div key={digi.id}>
                    <DigiCard datita={digi}/>
                  </div>
                );
            })}
        </div>
      </div>
  );
}

export default App;
