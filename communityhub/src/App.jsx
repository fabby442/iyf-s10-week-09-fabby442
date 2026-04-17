import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';

function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;