import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "../index.css";

var log_name="Login"
var log_href="/login"

const Topbar = () => {
    return (
        <Navbar bg = "dark" variant = "dark" expand = "lg" className = "d-flex justify-content-center w-100" style={{ position: 'fixed', top: 0, zIndex: 1 }}>
            <Navbar.Brand href="/" className="text-center w-100"><img src="/logo.png"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className = "text-center w-100">
            <Nav className="mx-auto">
              <Nav.Link href="/rank">Rank</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>

              <Nav.Link href="/boardlist">Board</Nav.Link>
              
              <Nav.Link href={log_href}>{log_name}</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}

export default Topbar;