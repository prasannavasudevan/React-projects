import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Feature from './feature';
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Touch from './Touch';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Jumbotron/>
    <Feature/>
    <Touch/>
    <Footer />
  </React.StrictMode>
);
