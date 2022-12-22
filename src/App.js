import Home from "./components/Home/Home";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/components/Navbar/Navbar.css"
import Footer from "./components/Footer/Footer";

const App = () => {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        updateLoad(false);
      }, 1200);

      return () => clearTimeout(timer);
    }, []);

    return(
      <Router>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  };
  
  export default App