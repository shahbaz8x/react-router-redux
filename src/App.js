import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import NoMatch from './NoMatch';
import Navigation from './Navigation';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about-us">
              <Redirect to="/about" />
            </Route>

            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        
        <Footer />
    </Router>
  );
}

export default App;
