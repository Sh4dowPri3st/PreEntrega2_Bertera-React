import React, { useEffect, useState } from 'react';
// import CardUser from '../CardUser/CardUser';
import "./CardList.css";
import CardApi from '../CardApi/CardApi';

const CardList = () => {

    const [users, setUsers]= useState([]);

    // console.log(users)

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, []);

    return (
        <div className="Cards-List">
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <CardApi data={user} />
                    </div>
                );
            })}
        </div>
    );
};

export default CardList;