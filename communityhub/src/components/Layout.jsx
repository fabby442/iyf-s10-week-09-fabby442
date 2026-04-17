import { Outlet, Link, NavLink } from "react-router-dom";

function Layout() {
    return (
        <div>

            {/* NAVBAR */}
            <nav style={{
                display: "flex",
                gap: "15px",
                padding: "10px",
                borderBottom: "1px solid #ddd"
            }}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/create">Create</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            {/* PAGE CONTENT */}
            <main style={{ padding: "20px" }}>
                <Outlet />
            </main>

            {/* FOOTER */}
            <footer style={{
                textAlign: "center",
                padding: "20px",
                borderTop: "1px solid #ddd",
                marginTop: "40px"
            }}>
                © 2026 CommunityHub
            </footer>

        </div>
    );
}

export default Layout;