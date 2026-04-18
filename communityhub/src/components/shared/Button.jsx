function Button({ children, onClick, type = "button" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            style={{
                padding: "8px 12px",
                marginRight: "8px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }}
        >
            {children}
        </button>
    );
}

<button onClick={() => followUser(post.userId)}>
    Follow
</button>

export default Button;