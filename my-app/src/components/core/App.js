import React from 'react';
import '../../../src/App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import Navbar from './Navbar';
import Header from './Header';


const Bgcolor =styled.body`
background-color: #272f41;
`

function App() {
  return (
    
    <Bgcolor className="fluid-container">
        <div className="col col-sm-1 col-lg-1"></div>
        <div className="col col-sm-10 col-lg-10"></div>
        <Navbar />
      <Header />
      <div className="col col-sm-1 col-lg-1"></div>
    </Bgcolor>
  );
}

export default App;
