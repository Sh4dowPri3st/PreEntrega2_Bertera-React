import React from "react";
import "./NavBar.css";
import ShoppingCartCheckoutIcon from "../CartWidget/CartWidget" 
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="Navigation">
            <ul className=" listas">
                <li>
                    <h1>I N F L A C I O N </h1>
                </li>
                <li>
                    <Link className="links" to={`/`}>Home</Link>
                </li>
                <li>
                    <Link className="links" to={`/Nosotros`}>Nosotros</Link>
                </li>
                {/* <li>
                    <Link to={`/Productos`}>Productos</Link>
                </li> */}
                <li>
                    <Link className="links" to={`/Contacto`}>Contacto</Link>
                </li>
                <li>
                    <ShoppingCartCheckoutIcon />
                </li>
            </ul>
        </nav>    
    )
}

export default NavBar;
