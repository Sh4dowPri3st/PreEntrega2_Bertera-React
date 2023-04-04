import React from "react";
import "./NavBar.css";
import ShoppingCartCheckoutIcon from "../CartWidget/CartWidget" 

const NavBar = () => {
    return (
        <nav className="Navigation">
            <ul className="List-ul">
                <li>
                    <h1>I N F L A C I O N </h1>
                </li>
                <li>
                    <a href="https://www.instagram.com/inflacion.billeterasdepapel/" 
                    >Home</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/inflacion.billeterasdepapel/">Nosotros</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/inflacion.billeterasdepapel/">Contacto</a>
                </li>
                <li>
                    <ShoppingCartCheckoutIcon />
                </li>
            </ul>
        </nav>    
    )
}

export default NavBar;
