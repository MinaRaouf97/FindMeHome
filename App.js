import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import LoginUser from './components/login';
// import RegisterUser from './components/register';
import './index.css';

import React from 'react';
import PhotosSlider from './Components/PhotosSlider'
import PropertyInfo from './Components/PropertyInfo'
import Description from './Components/Description'
import Maps from './Components/Maps'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import NavBar from './components/Navbar';

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
      <PhotosSlider />
      <PropertyInfo />
      <Description />
      {/* <Maps /> */}

      <Switch>
        <Route path={"/"} exact component={Home}></Route>

      </Switch>



    </Router>



  );
}

