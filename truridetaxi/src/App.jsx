import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mainpage from './Components/Mainpage';
import Features from "./Components/Features";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Howitworks from "./Components/Howitworks";
import Testimonials from "./Components/Testimonials";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Gettheapp from "./Components/Gettheapp";

function App() {
  return (
    <BrowserRouter basename="/truride">
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/howitworks" element={<Howitworks />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/gettheapp" element={<Gettheapp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
