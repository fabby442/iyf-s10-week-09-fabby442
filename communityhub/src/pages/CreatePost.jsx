import { useState } from "react";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [posts, setPosts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            title,
            body
        };

        setPosts([newPost, ...posts]);

        setTitle("");
        setBody("");
    };

    return (
        <div>
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ display: "block", marginBottom: "10px", padding: "8px" }}
                />

                <textarea
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    style={{ display: "block", marginBottom: "10px", padding: "8px" }}
                />

                <button type="submit">Post</button>
            </form>

            <hr />

            <h2>Local Posts</h2>

            {posts.map(post => (
                <div key={post.id} style={{ border: "1px solid #ddd", padding: "10px", marginTop: "10px" }}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default CreatePost;