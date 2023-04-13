import React from 'react'
import './Home.css'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const home = () => {
    return (
        <>
        <div className="homeDiv">
                <h1 > ¿CONOCES NUESTRAS PRODUCTOS?</h1>
                <div className="gifff" >
                    {/* <iframe title="donBilletin" className="gifff" src="https://giphy.com/embed/KiGMzfSIrNf0s" width="398" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
                    <img src='giphy.gif' alt='dinero'></img>
                </div>
                <h2> ¡SON BARATOS, SIMPLES Y TIENEN MUCHO STYLE!</h2>
        </div>
        <ItemListContainer/>

        </>
    )
}

export default home