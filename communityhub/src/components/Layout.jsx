import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
    const linkStyle = ({ isActive }) => ({
        color: isActive ? 'red' : 'black',
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: 'none'
    });

    return (
        <div>
            <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                <nav style={{ display: 'flex', gap: '15px' }}>
                    <NavLink to="/" style={linkStyle}>
                        Home
                    </NavLink>

                    <NavLink to="/posts" style={linkStyle}>
                        Posts
                    </NavLink>

                    <NavLink to="/about" style={linkStyle}>
                        About
                    </NavLink>
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