import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../index.css";

const Topbar = () => {
  const [loginText, setLoginText] = useState("Login");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const updateLoginText = () => {
      const author = loggedInUser ? loggedInUser.name : "";
      setLoginText(loggedInUser ? `User: ${author}` : "Login");
    };

    updateLoginText(); // Update immediately on component mount

    // Subscribe to changes in localStorage
    window.addEventListener("storage", updateLoginText);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("storage", updateLoginText);
    };
  }, []);

  return (
    <Navbar
  variant="dark"
  expand="lg"
  className="d-flex justify-content-center w-100"
  style={{ position: "fixed", top: 0, zIndex: 1, background: "#2A2C34" }}
>
      <Navbar.Brand href="/" className="text-center w-100">
        <img src="/logo.png" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="text-center w-100">
        <Nav className="mx-auto">
          <Nav.Link href="/rank">Rank</Nav.Link>
          <Nav.Link href="/boardlist">Board</Nav.Link>
          <Nav.Link href="/login">{loginText}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
