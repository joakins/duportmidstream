import React from "react";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import { Error } from "./pages/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./pages/Contact";
import MediaAndNews from "./pages/MediaAndNews";
import MediaNewsDetails from "./pages/MediaNewsDetails ";

AOS.init();

const App = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/ourteam" exact component={OurTeam} />
          <Route path="/media" exact component={MediaAndNews} />
          <Route path="/mediaDetails/:id" exact component={MediaNewsDetails} />
          <Route path="/contact" exact component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
