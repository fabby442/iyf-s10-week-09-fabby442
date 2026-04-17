function Card({ children }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "10px",
                backgroundColor: "#fff"
            }}
        >
            {children}
        </div>
    );
}

export default Card;