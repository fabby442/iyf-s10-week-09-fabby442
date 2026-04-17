import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.slice(0, 10)));
    }, []);

    return (
        <div>
            <h1>Posts</h1>

            {posts.map(post => (
                <div key={post.id} style={{ marginBottom: '10px' }}>
                    <Link to={`/posts/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Posts;