import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Forms from "./pages/Forms";

function App() {
  return (
    <BrowserRouter>
      <nav className="fixed left-0 top-0 w-screen z-10 p-4 bg-white flex gap-8 shadow items-center">
        <Link to="/" className="flex items-center gap-2 text-blue-600 text-3xl font-[Merriweather] font-bold hover:underline">
          <img src="/app-icon.svg" alt="App Icon" className="h-8 w-8 -translate-y-1" />
          Welcome to America
        </Link>
        <Link to="/topics" className="text-blue-600 hover:underline text-xl font-[Merriweather] font-bold">
          Topics
        </Link>
        <Link to="/forms" className="text-blue-600 hover:underline text-xl font-[Merriweather] font-bold">
          Forms
        </Link>
      </nav>
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
