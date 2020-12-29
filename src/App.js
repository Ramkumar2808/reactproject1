import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import HeroSection from "./Components/Herosection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Work from "./Components/Work/Work";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact component={HeroSection} />
          <Route path="/Work" component={Work} />
          <Route path="/About" component={About} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
