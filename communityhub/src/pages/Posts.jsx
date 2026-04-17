import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";
import Button from "../components/shared/Button";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [likes, setLikes] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data.slice(0, 20)));
    }, []);

    const toggleLike = (id) => {
        setLikes(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Posts</h1>

            {/* SEARCH */}
            <input
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    padding: "8px",
                    marginBottom: "10px",
                    width: "100%"
                }}
            />

            {/* POSTS */}
            {filteredPosts.map(post => (
                <Card key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>

                    <Link to={`/posts/${post.id}`}>
                        <Button>View</Button>
                    </Link>

                    <Button onClick={() => toggleLike(post.id)}>
                        {likes[post.id] ? "❤️ Liked" : "🤍 Like"}
                    </Button>
                </Card>
            ))}
        </div>
    );
}

export default Posts;