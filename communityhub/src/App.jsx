import { Routes, Route } from "react-router-dom";


import Layout from "./components/Layout";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/Signin";

function App() {
    return (
        <Routes>

            {/* LAYOUT WRAPPER */}
            <Route path="/" element={<Layout />}>
                
                {/* HOME */}
                <Route index element={<Home />} />

                {/* PUBLIC PAGES */}
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:postId" element={<PostDetail />} />
                <Route path="users" element={<Users />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="signin" element={<SignIn />} />
                   <Route path="/" element={<Layout />}>
    <Route index element={<Feed />} />
    <Route path="users" element={<Users />} />
</Route>

                {/* 404 */}
                <Route path="*" element={<NotFound />} />

            </Route>
        </Routes>
    );
}

export default App;