import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Menus from './components/Menu';

function App() {
  return (
    <div className="App">

       <Header /> 
       <Container>
       <Row>
         <Col md={4}><h3>  </h3> <Menus /> </Col>
         <Col md={8}><h3> </h3> <Home /></Col>
       </Row>
       </Container>
        
       
      
    </div> 
  );
}

export default App;
