import React from 'react'

const Person = ({name, age, email, isMarried, children}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <p>{email}</p>
            <p>{isMarried.toString()}</p>
            {children.map((child, idx) => {
                return <li key={idx}>{child}</li>
            })}
        </div>
    )
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    children: PropTypes.arrayOf(PropTypes.string),
}


export default Person