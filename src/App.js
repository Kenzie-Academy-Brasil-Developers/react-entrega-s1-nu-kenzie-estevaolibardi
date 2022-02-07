import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import Page1 from "./pages/Page1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/sd" element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;
