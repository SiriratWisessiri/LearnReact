// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer'
import MainContent from './MainContent';
// import { Container, Row, Col, } from 'reactstrap';
import React, { Fragment } from 'react';


function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
