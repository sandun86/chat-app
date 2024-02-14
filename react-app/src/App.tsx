import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/Login";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const logout = () => {
    localStorage.clear();
    window.location.replace("/login")
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Chat APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link className={token ? "d-none" : ""} href="/login">
              Login
            </Nav.Link>
            <Nav.Link
              className={!token ? "d-none" : ""}
              onClick={logout}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home nameProp="Name" />} />
          {!token ? (
            <Route path="/login" element={<LoginForm setToken={setToken} />} />
          ) : (
            <Route path="/dashboard" element={<Home nameProp="Name" />} />
          )}

        </Routes>
      </Router>
    </>
  );
};

export default App;
