import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"

//components
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { UserContext } from './context/UserContext';
import PageNotFound from './components/PageNotFound';
import Footer from './layout/footer';
import Header from './layout/header';

import firebaseconfig from './Config/firebaseconfig';
//init firebase
firebase.initializeApp(firebaseconfig)


const App = () => {
  const [user, setUser] = useState(null)

  return (
   <Router>
    <ToastContainer/>
    <UserContext.Provider value = {{user, setUser}}>
      <Header/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/signin' Component={SignIn}/>
        <Route exact path='/signup' Component={SignUp}/>
        <Route exact path='/*' Component={PageNotFound}/>
      </Routes>
      <Footer/>
    </UserContext.Provider>
   </Router>
  );
}

export default App;
