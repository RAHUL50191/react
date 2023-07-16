import React from "react";
import ReactDOM from "react-dom/client";
import FRUITS from "./component/fruits";
import TODO from "./component/todo";
import TICTACTOE from "./component/Tictactoe";
import TASK from "./component/Task";
import SL from "./component/SnakeLadder";
import CHESS from "./component/chess/Chess";
// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <main>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link as={Link} to="/todo">
              <li>Todo</li>
            </Nav.Link>
            <Nav.Link as={Link} to="/fruits">
              <li>fruit generator</li>
            </Nav.Link>
            <Nav.Link as={Link} to="/task">
              <li>Task</li>
            </Nav.Link>
            <Nav.Link as={Link} to="/tictactoe">
              <li>Tic Tac Toe</li>
            </Nav.Link>
            <Nav.Link as={Link} to="/chess">
              <li>Chess</li>
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/snakeladder">
             <li>SnakeLadder</li> 
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/todo" exact element={<TODO />} />
        <Route path="/fruits" exact element={<FRUITS />} />
        <Route path="/task" exact element={<TASK />} />
        <Route path="/tictactoe" exact element={<TICTACTOE />} />
        <Route path="/chess" exact element={<CHESS className="no-bootstrap-styles" />} />
        <Route path="/snakeladder" exact element={<SL />} />
      </Routes>
    </main>
  </Router>

  // <>
  //   <TODO />
  //   <ANIMAL />
  //   <TASK />
  //   <TICTACTOE />
  //   <SL players={4} />//underdev
  //   <CHESS />
  // </>
);
