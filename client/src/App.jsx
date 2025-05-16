import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Topics from './pages/Topics';

function App() {
  return (
    <BrowserRouter>
      <nav className="fixed left-0 top-0 w-screen z-10 p-4 bg-white flex gap-4 shadow">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/topics" className="text-blue-600 hover:underline">Topics</Link>
      </nav>
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
