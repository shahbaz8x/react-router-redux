import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import Notice from './components/Notice';
import Footer from './components/Footer';
//import Home from './components/Home';
import HomeContainer from './containers/HomeContainer';
import NoMatch from './components/NoMatch';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

const One = () => <h1>One</h1>;
const Two = () => <h1>Two</h1>;

function App() {
  return (
    <React.Fragment>
      <Router>
        <HeaderContainer />
        <Notice data={{title:'Holiday', message:'Tomorrow will be holiday.',date_time:'2020-01-20 11:00:10'}} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>


          <Route exact path="/">
            <HomeContainer />
          </Route>

          <Route path="/about-us">
            <Redirect to="/about" />
          </Route>
          <Route path="/login">
            <Redirect to={{pathname: "/contact", search: "?utm=your+face" }}/>
          </Route>
          

          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          
          <Redirect from="/old-path" to="/new-path" />
          <Route path="/new-path">
            <One />
            <Two />
          </Route>

          <Route path="/users/profile/:id">
            <One />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
    </React.Fragment>
  );
}


export default App;
