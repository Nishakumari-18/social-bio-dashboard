import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}
