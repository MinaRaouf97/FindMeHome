
import './App.css';
// import LoginUser from './components/login';
// import RegisterUser from './components/register';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom"; 

import Home from './pages/Home';
import NavBar from './components/Navbar' ;
import LoginUi from './pages/LoginUi';
//import Details from './pages/details';
// import FavFilms from './pages/favouriteFilm';
// import { LanguageContext } from './context/changeLanguage';
// import { useState } from 'react';

// import AllMovies from './pages/allMovies'


function App() {
  // console.log(LanguageContext)

  // // const [contextLang,setContextLang] = useState("en")
  return (

   
    <Router>
      
      <NavBar/> 

      <Switch>
        <Route path={"/"} exact component={Home}></Route>
        <Route path={"/login"} exact component={LoginUi}></Route>

      </Switch>

     

    </Router>
 


  );
}

export default App;
