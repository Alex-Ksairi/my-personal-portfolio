import React from "react";

// importing route
import { Switch, Route } from "react-router-dom";

// importing pages
import Home from "./pages/home/Home";
import ContactMe from "./pages/contact-me/ContactMe";
import ErrorPage from "./pages/errorPage/ErrorPage";

// importing the components
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Cookies from "./components/cookies/Cookies";

import './styles/App.scss';


function App() {

  return (
    <div className=''>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact-me" component={ContactMe}/>
        <Route component={ErrorPage}/>
      </Switch>
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;
