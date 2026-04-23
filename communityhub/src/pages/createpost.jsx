import { useState } from "react";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [posts, setPosts] = useState([]);

    const handleImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImage(file);

            // Create preview URL
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            title,
            body,
            image: preview || "https://picsum.photos/500/300"
        };

        setPosts([newPost, ...posts]);

        setTitle("");
        setBody("");
        setImage(null);
        setPreview(null);
    };

    return (
        <div>
            <h2>📸 Create Post (Instagram Style)</h2>

            <form onSubmit={handleSubmit} style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxWidth: "400px"
            }}>

                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Caption..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                {/* IMAGE UPLOAD */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                />

                {/* PREVIEW */}
                {preview && (
                    <img
                        src={preview}
                        alt="preview"
                        style={{
                            width: "100%",
                            borderRadius: "10px"
                        }}
                    />
                )}

                <button type="submit">
                    Post 📤
                </button>
            </form>

            <hr />

            <h3>Your Posts</h3>

            {posts.map(post => (
                <div key={post.id} style={{
                    border: "1px solid #ddd",
                    marginTop: "10px",
                    padding: "10px",
                    borderRadius: "10px"
                }}>
                    <img
                        src={post.image}
                        style={{ width: "100%", borderRadius: "10px" }}
                    />
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default CreatePost;