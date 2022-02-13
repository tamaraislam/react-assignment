import React, { useEffect, useState } from 'react';
import Users from '../users/Users';
const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    })
    // console.log(users);
    return (
        <div className='container mt-5'>
            <div className="row">
                {
                    users.map(user => <Users user={user} key={user.id} />)
                }
            </div>
        </div>
    );
};

export default Home;