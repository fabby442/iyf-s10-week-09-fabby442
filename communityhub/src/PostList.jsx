import useFetch from './hooks/useFetch';

function PostList() {
    const { data: posts, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    );

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>🔥 POSTS LIST (THIS IS WHAT YOU ARE SEEING)</h2>

            {posts.slice(0, 5).map(post => (
                <div
                    key={post.id}
                    style={{
                        border: '1px solid black',
                        padding: '10px',
                        marginBottom: '10px'
                    }}
                >
                    <h4>TITLE: {post.title}</h4>
                    <p>BODY: {post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;