import { useState } from "react";

function Card({ post, onLike, onComment }) {
    const [comment, setComment] = useState("");

    return (
        <div style={{
            background: "white",
            borderRadius: "12px",
            marginBottom: "20px",
            border: "1px solid #e6e6e6",
            overflow: "hidden"
        }}>

            {/* USER HEADER */}
            <div style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                gap: "10px"
            }}>
                <img
                    src={post.user.avatar}
                    style={{ width: 35, height: 35, borderRadius: "50%" }}
                />
                <strong>{post.user.name}</strong>
            </div>

            {/* IMAGE */}
            <img
                src={post.image}
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
            />

            {/* CONTENT */}
            <div style={{ padding: "10px" }}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>

                <div style={{ color: "#1da1f2", fontSize: "13px" }}>
                    {post.hashtags.map((tag, i) => (
                        <span key={i} style={{ marginRight: "6px" }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* ACTIONS */}
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderTop: "1px solid #eee"
            }}>
                <button onClick={() => onLike(post.id)}>
                    ❤️ {post.likes}
                </button>

                <button>
                    🔁 Repost
                </button>
            </div>

            {/* COMMENTS */}
            <div style={{ padding: "10px" }}>
                <input
                    placeholder="Add comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "6px"
                    }}
                />

                <button
                    onClick={() => {
                        onComment(post.id, comment);
                        setComment("");
                    }}
                >
                    Comment
                </button>

                {post.comments.map((c, i) => (
                    <p key={i} style={{ fontSize: "12px" }}>
                        💬 {c}
                    </p>
                ))}
            </div>

        </div>
    );
}

export default Card;