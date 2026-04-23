import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Users</h2>

            {users.length === 0 ? (
                <p>No users found</p>
            ) : (
                users.map(user => (
                    <div key={user._id}>
                        <p>{user.username || user.email}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Users;