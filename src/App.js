import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
