import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import axios from 'axios'
import { createBrowserHistory } from "history";
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Start from './components/Start.js'
import TvShows from './TvShows'
import Movies from './Movies'
import MyStuff from './MyStuff'
import Navbar from './Navbar'
import MovieShow from './MovieShow'
import Login from './components/registration/Login.js'
import Signup from './components/registration/Signup.js'
import {PrivateRoute} from './PrivateRoute'

const URL = "http://localhost:3000/movies"
const customHistory = createBrowserHistory();

export default class App extends React.Component {

  state = {
    movies: [],
    loggedIn: false
  }


  

  render() {
    
    return (
      <Router history={customHistory}>
        <div className="App">
          <Navbar />
          <Route exact path='/start' render={props => (
            <Start {...props}  />
          )} />
          <Route exact path='/login' render={props => (
            <Login {...props}  />
          )} />
          <Route exact path='/signup' render={props => (
            <Signup {...props}  />
          )} />
          <PrivateRoute exact path="/home" component={Home}/>
          {/* <Route exact path="/home" render={(props) => (
            <Home {...props}  />
          )} /> */}
          <Route exact path="/home/:showId" render={(props) => (
            <MovieShow {...props}  />
          )} />
          <PrivateRoute exact path="/tvshows" component={TvShows}/>
          {/* <Route exact path="/tvshows" render={(props) => (
            <TvShows {...props}  />
          )} /> */}
          <Route path="/tvshows/:showId" render={(props) => (
            <MovieShow {...props}  />
          )} />
          <PrivateRoute exact path="/movies" component={Movies}/>
          {/* <PrivateRoute exact path="/movies" render={(props) => (
            <Movies {...props}  />
          )} /> */}
          <Route path="/movies/:showId" render={(props) => (
            <MovieShow {...props}  />
          )} />
          <Route exact path="/mystuff" render={(props) => (
            <MyStuff {...props}  />
          )} />
        </div>
      </Router>
      
      );

  }
}



//<Login />

//<Sign Up />

//<Home /> 
  //<Navbar />
  //<Carousel Container />
      //<Carousel />
          //<Card />

//<TV Show />
    //<Navbar />
    //<Carousel Container />
        //<Carousel />
            //<Card />

//<Movies />
    //<Navbar />
    //<Carousel Container />
        //<Carousel /> 
            //<Card />

//<My Stuff />
    //<Card Container />
        //<Cards />

//<Account />

// fetch('http://localhost:3000/api/v1/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
         
    //   },
    //   body: JSON.stringify({
    //     user: {
    //       username: "MeytonWoods",
    //       password_digest: "Ilovehavemercy2020!",
    //       name: "Meyton Woods",
    //       email: "meytonwoods@gmail.com"
    //     }
    //   })
    // })
    //   .then(r => r.json())
    //   .then(console.log)