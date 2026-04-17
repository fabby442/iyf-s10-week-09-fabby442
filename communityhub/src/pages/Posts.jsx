import { useEffect, useState } from "react";
import Card from "../components/shared/Card";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                const enhanced = data.slice(0, 10).map(post => ({
                    ...post,
                    likes: 0,
                    image: `https://picsum.photos/seed/${post.id}/600/350`,
                    user: {
                        name: `User ${post.userId}`,
                        avatar: `https://i.pravatar.cc/150?img=${post.userId}`
                    },
                    comments: [],
                    hashtags: ["#react", "#webdev", "#community"]
                }));

                setPosts(enhanced);
            });
    }, []);

    const handleLike = (id) => {
        setPosts(prev =>
            prev.map(post =>
                post.id === id
                    ? { ...post, likes: post.likes + 1 }
                    : post
            )
        );
    };

    const handleComment = (id, text) => {
        if (!text) return;

        setPosts(prev =>
            prev.map(post =>
                post.id === id
                    ? { ...post, comments: [...post.comments, text] }
                    : post
            )
        );
    };

    const filtered = posts.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>

            <h2>📱 Social Feed</h2>

            <input
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ddd"
                }}
            />

            {filtered.map(post => (
                <Card
                    key={post.id}
                    post={post}
                    onLike={handleLike}
                    onComment={handleComment}
                />
            ))}
        </div>
    );
}

export default Posts;