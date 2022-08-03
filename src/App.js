import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import Notice from './components/Notice';
import Footer from './components/Footer';
import Profile from './components/Profile';
//import Home from './components/Home';
import HomeContainer from './containers/HomeContainer';
import NoMatch from './components/NoMatch';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
//import Gallery from './components/pages/Gallery';
import GalleryLight from './components/pages/GalleryLight';
import Notices from './components/pages/Notices';
import Login from './components/Login';
import Login1 from './components/Login1';

const One = () => <h1>One</h1>;
const Two = () => <h1>Two</h1>;

// React Redux Login, Logout, Registration example with Hooks
/* https://www.bezkoder.com/react-hooks-redux-login-registration-example */

const PrivateRoute = ({component: Component, ...rest}) => {
  return (

      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route {...rest} render={props => (
          isLogin() ?
              <Component {...props} />
          : <Redirect to="/login" />
      )} />
  );
};

const isLogin = ()=>{
  const login = localStorage.getItem("isLoggedIn");
  return login;
}
const PublicRoute = ({component: Component, restricted, ...rest}) => {
  return (
      // restricted = false meaning public route
      // restricted = true meaning restricted route
      <Route {...rest} render={props => (
          isLogin() && restricted ?
              <Redirect to="/dashboard" />
          : <Component {...props} />
      )} />
  );
};

const login = localStorage.getItem("isLoggedIn");

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
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login2">
            <Redirect to={{pathname: "/contact", search: "?utm=your+face" }}/>
          </Route>
          

          <Route path="/about">
            <About />
          </Route>

          <PublicRoute restricted={false} component={GalleryLight} path="/gallery" exact />
          <PrivateRoute restricted={true} component={Notices} path="/notices" exact />

          <Route path="/contact">
            <Contact />
          </Route>

          {login ? (
            <>
              <Route path="/notices1">
                <Notices />
              </Route>
              <Route path="/home">
                <Notices />
              </Route>
            </>
          ) : (
            <>
              <Route path="/login">
                <Login />
              </Route><Route path="/login1">
                <Login1 />
              </Route>
            </>
          )}

          
          <Redirect from="/old-path" to="/new-path" />
          <Route path="/new-path">
            <One />
            <Two />
            <h1>{new Date().toLocaleTimeString()}</h1>
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
