import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostDetail from "./pages/PostDetail";
import Users from "./pages/Users";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import { isLoggedIn } from "./utils/auth";

// 🔐 Protected Route Wrapper (clean + reusable)
const ProtectedRoute = ({ children }) => {
    return isLoggedIn() ? children : <Navigate to="/login" replace />;
};

function App() {
    return (
        <Routes>

            {/* PUBLIC ROUTES */}
            <Route path="/login" element={<Login />} />

            {/* APP LAYOUT */}
            <Route path="/" element={<Layout />}>
                
                {/* PUBLIC HOME */}
                <Route index element={<Home />} />

                {/* PROTECTED ROUTES */}
                <Route
                    path="posts"
                    element={
                        <ProtectedRoute>
                            <Posts />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="posts/:postId"
                    element={
                        <ProtectedRoute>
                            <PostDetail />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="users"
                    element={
                        <ProtectedRoute>
                            <Users />
                        </ProtectedRoute>
                    }
                />

                {/* PUBLIC PAGES */}
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />

            </Route>
        </Routes>
    );
}

export default App;