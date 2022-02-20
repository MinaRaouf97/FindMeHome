import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import LoginUser from './components/login';
// import RegisterUser from './components/register';
import './index.css';

import React from 'react';
import PhotosSlider from './components/PhotosSlider'
import PropertyInfo from './components/PropertyInfo'
import Description from './components/Description'
import Maps from './components/Maps'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import NavBar from './components/Navbar';
import PropInfo from './pages/PropInfo';
import LoginUi from './pages/LoginUi';
import Form from './src/pages/Form';

//import Details from './pages/details';
// import FavFilms from './pages/favouriteFilm';
// import { LanguageContext } from './context/changeLanguage';
// import { useState } from 'react';

// import AllMovies from './pages/allMovies'


export default function App() {
  // console.log(LanguageContext)

  // // const [contextLang,setContextLang] = useState("en")
  return (


    <Router>

      <NavBar />

      {/* <Maps /> */}

      <Switch>
        <Route path={"/"} exact component={Home}></Route>
        <Route path={"/login"} exact component={LoginUi}></Route>
        <Route path={"/PropInfo"} exact component={PropInfo}></Route>
        <Route path={"/addprop"} exact component={Form}></Route>

      </Switch>



    </Router>



  );
}

