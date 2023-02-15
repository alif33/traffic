import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Trafik";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/enroll/register" element={<EnrollSchool />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
