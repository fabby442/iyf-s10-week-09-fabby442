import { Outlet, NavLink } from "react-router-dom";

function Layout() {
    return (
        <div style={{
            display: "flex",
            minHeight: "100vh",
            background: "#fafafa",
            fontFamily: "Arial"
        }}>

            {/* LEFT SIDEBAR */}
            <aside style={{
                width: "220px",
                background: "white",
                borderRight: "1px solid #ddd",
                padding: "20px"
            }}>
                <h2>tenda</h2>

                <nav style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginTop: "20px"
                }}>
                    <NavLink to="/">🏠 home</NavLink>
                    <NavLink to="/posts">📰 Feed</NavLink>
                    <NavLink to="/create">➕ Create</NavLink>
                    <NavLink to="/about">ℹ️ friends</NavLink>
                    <NavLink to="/contact">📩 Contact</NavLink>
                </nav>
            </aside>

            {/* CENTER FEED */}
            <main style={{
                flex: 1,
                maxWidth: "650px",
                margin: "0 auto",
                padding: "20px"
            }}>
                <Outlet />
            </main>

            {/* RIGHT TRENDING */}
            <aside style={{
                width: "250px",
                background: "white",
                borderLeft: "1px solid #ddd",
                padding: "20px"
            }}>
                <h3>🔥 Trending</h3>
                <p style={{ color: "#1da1f2" }}>#react</p>
                <p style={{ color: "#1da1f2" }}>#webdev</p>
                <p style={{ color: "#1da1f2" }}>#community</p>
                <p style={{ color: "#1da1f2" }}>#javascript</p>
            </aside>

        </div>
    );
}

export default Layout;