import React from 'react'

const User = ({name, email, website}) => {

    const userStyle={
        border: '2px solid black',
        margin: '10px'
    }

    return (
        <div style={userStyle}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
    )
}

export default User
