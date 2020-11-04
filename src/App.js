import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Menus from "./components/Menu";
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Container>
        <Row>
          <Col md={4}>
            <h3> </h3> <Menus />{" "}
          </Col>
          <Col md={8}>
            <h3> </h3>  
            <Route path="/" component={Home} exact />
            <Route path="/add-course" component={AddCOurse} exact />
            <Route path="/View-Course" component={AllCourse} exact />
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
