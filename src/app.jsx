import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import About from "./views/About/About.jsx";
import Contact from "./views/Contact/Contact.jsx";
import OurService from "./views/OutService/OurService.jsx";
import NotFound from "./views/NotFound/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <h1>My React App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<OurService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;