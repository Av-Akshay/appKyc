import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, ContactUs, Services, SignUp } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
