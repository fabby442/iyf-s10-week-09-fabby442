import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                <nav style={{ display: 'flex', gap: '10px' }}>
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>

            <main style={{ padding: '20px' }}>
                <Outlet />
            </main>

            <footer style={{ padding: '10px', borderTop: '1px solid #ccc' }}>
                <p>© 2026 CommunityHub</p>
            </footer>
        </div>
    );
}

export default Layout;