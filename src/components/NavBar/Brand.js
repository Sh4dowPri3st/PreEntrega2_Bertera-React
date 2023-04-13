import React from 'react'
import "./Brand.css";
import img from "./logoFondoBlanco.png"
import { Link } from 'react-router-dom';

const Brand = ({title}) => {
    return (
        <div className="contenedorHeader">
            <Link className='aaa' to={'/'} >
                <img src={img} alt="logo" className="logo"/>
            </Link>
            <h3 className="titulo" > {title}</h3>
        </div>
    
    
    
    
    )
};

export default Brand
