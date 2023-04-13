import React, { useEffect, useState } from 'react'
import CardUser from '../CardUser/CardUser'
import "./ItemListContainer.css"
import {Link} from "react-router-dom"

const ItemListContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setUsers(json)
        )
    }, [])


    return (
        <div className='ItemList' >
            <h1>PRODUCTOS: </h1>
            {users.map((user)=>{
            return(
                <div key={(user.id)} > 
                    <Link to={`/item/${user.id}`}>
                        <CardUser data={user}/>
                    </Link>
                </div>
                )
            })}
        </div>

    )
}

export default ItemListContainer