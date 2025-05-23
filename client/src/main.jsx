import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Topics from "./pages/Topics.jsx";
import Forms from "./pages/Forms.jsx";
import FindHelp from "./pages/FindHelp.jsx";
import Registration from "./pages/Registration.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="topics" element={<Topics />} />
          <Route path="forms" element={<Forms />} />
          <Route path="find_help" element={<FindHelp />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
