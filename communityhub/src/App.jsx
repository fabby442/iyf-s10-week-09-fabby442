import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import Contact from './pages/Contact';
import PostDetail from './pages/PostDetail';
import NotFound from './pages/NotFound';
import CreatePost from './pages/CreatePost';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:postId" element={<PostDetail />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
                <Route path="create" element={<CreatePost />} />
            </Route>
        </Routes>
    );
}

export default App;