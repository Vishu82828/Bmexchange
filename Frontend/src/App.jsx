import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ScrollToTop from "./components/ScrollToTop";
import "./Styles/App.css";
import Navbar from "./components/Navbar/navbar.component";
import Footer from "./components/Footer/footer.component";

import ContactUs from "./Pages/ContactUs";
import CryptoExchange from "./Pages/CryptoExchange";
import HowItWork from "./Pages/HowItWork";
import WhyUs from "./Pages/WhyUs";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div className="overlay"></div>
        <div className="image">
          <DotLottieReact
            src="https://lottie.host/5245a403-d853-4285-9318-3b056675b1cb/pLoBQuXoNa.lottie"
            loop
            autoplay
          />
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/crypto" element={<CryptoExchange />} />
          <Route path="/howitwork" element={<HowItWork />} />
          <Route path="/whyus" element={<WhyUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
