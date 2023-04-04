import React from 'react'
import "./CartWidget.css";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CartWidget  = () => {
    return (
    <div>
        <ShoppingCartCheckoutIcon sx={{ fontSize: 35, color: "#FFAAA5" }} />
        <span className="nCarrito" >3</span>
    </div>
    )
}

export default CartWidget 