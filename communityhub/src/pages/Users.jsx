import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);

    // FETCH USERS FROM BACKEND
    useEffect(() => {
        fetch("http://localhost:5000/api/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    // FOLLOW FUNCTION
    const followUser = async (targetUserId) => {
        const currentUser = JSON.parse(localStorage.getItem("user"));

        await fetch(
            `http://localhost:5000/api/users/${targetUserId}/follow`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: currentUser._id
                })
            }
        );

        alert("Followed!");
    };

    return (
        <div>
            <h2>👥 Users</h2>

            {users.map(user => (
                <div key={user._id} style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    marginBottom: "10px"
                }}>
                    <p>{user.username}</p>

                    <button onClick={() => followUser(user._id)}>
                        Follow
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Users;