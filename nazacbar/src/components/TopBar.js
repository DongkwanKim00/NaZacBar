import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "../index.css";

const Topbar = () => {
    return (
        <Navbar bg = "dark" variant = "dark" expand = "lg" className = "d-flex justify-content-center w-100" style={{ position: 'fixed', top: 0, zIndex: 1 }}>
            <Navbar.Brand href="/" className="text-center w-100">나작바</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className = "text-center w-100">
            <Nav className="mx-auto">
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>

              <Nav.Link href="/boardlist">Board</Nav.Link>
              
              <Nav.Link href="/board">Board</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}

export default Topbar;