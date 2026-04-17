import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div style={{ fontFamily: 'Arial' }}>

            {/* NAVIGATION */}
            <nav style={{
                display: 'flex',
                gap: '15px',
                padding: '15px',
                background: '#f4f4f4'
            }}>
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            {/* PAGE CONTENT */}
            <main style={{ padding: '20px' }}>
                <Outlet />
            </main>

            {/* FOOTER */}
            <footer style={{
                textAlign: 'center',
                padding: '15px',
                marginTop: '30px',
                borderTop: '1px solid #ddd'
            }}>
                <p>© 2026 CommunityHub</p>
            </footer>

        </div>
    );
}

export default Layout;