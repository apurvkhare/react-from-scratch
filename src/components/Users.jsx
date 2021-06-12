import axios from 'axios'
import React, { useState } from 'react'
import 'regenerator-runtime/runtime'
import User from './User'

const Users = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        console.log('Fetch users function called')
        const result = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        )
        setUsers(result.data)
    }

    React.useEffect(fetchUsers, [])

    return (
        <div>
            <h1>Users Component</h1>
            <div>
                {users &&
                    users.length !== 0 &&
                    users.map(user => (
                        <User
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            website={user.website}
                        />
                    ))}
            </div>
        </div>
    )
}

// index: 0, 1, 2, 3
// id: 0, 1, 3, 4

export default Users
