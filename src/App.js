import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Traffik from "./pages/TraffikPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/traffic-information" element={<Traffik />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
