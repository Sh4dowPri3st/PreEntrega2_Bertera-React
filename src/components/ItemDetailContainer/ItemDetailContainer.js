import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardUser from '../CardUser/CardUser'

const ItemDetailContainer = () => {
    const [user, setUser] = useState({})

    let {id} = useParams()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setUser(json)
        )
    }, [id])




    return (
    <div>
        <CardUser data={user} />
    </div>
    )
}

export default ItemDetailContainer