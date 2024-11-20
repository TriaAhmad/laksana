import About from "./pages/about";
import Home from "./pages/home";
import Input from "./pages/input";
import Services from "./pages/services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
      <Route path="/services" element={<Services/>}  />
      <Route path="/input" element={<Input/>}  />
    </Routes>
   </Router>
  );
}

export default App;
