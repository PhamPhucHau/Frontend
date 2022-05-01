//MSSV: 19521485
import React, { useState } from "react";
import MoviesList from './components/movies-list';
import Movies from './components/movies';
import AddReview from './components/add-review';
import Login from './components/login';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);
  async function login(user = null) {
    setUser(user)
  }
  async function logout() {
    setUser(null);
  }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">

        <Navbar.Brand href="#home">Movie Reviews MSSV: 19521485 </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
              <Link to={"/movies"}>Movies</Link>
            </Nav.Link>
            <Nav.Link>
              {
                user ? (
                  <a onClick={logout}>logout User</a>
                ) : (
                  <Link to={"/login"}>Login </Link>
                )
              }
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route  path="/" element={<MoviesList></MoviesList>}/>
        <Route  path="/movies" element={<MoviesList></MoviesList>}/>
        <Route path="/movies/:id/review" element={<AddReview user={user} ></AddReview>}>
        </Route>
        <Route path="/movies/:id/" element={<Movies user={user} ></Movies>}></Route >
        <Route path="/login/" element={<Login user={user} ></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
