import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [postId]);

    if (loading) return <p>Loading post...</p>;
    if (!post) return <p>Post not found</p>;

    return (
        <div>
            <Link to="/posts">← Back to Posts</Link>

            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default PostDetail;