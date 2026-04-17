import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPost() {
            try {
                setLoading(true);

                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${postId}`
                );

                const data = await res.json();
                setPost(data);

            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [postId]);

    if (loading) return <p>Loading...</p>;
    if (!post) return <p>No post found</p>;

    return (
        <div>
            <Link to="/posts">← Back to Posts</Link>

            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default PostDetail;