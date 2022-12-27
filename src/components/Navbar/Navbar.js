import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className="navbar">
      <Container>
        <Navbar.Brand href="/" className="d-flex" id="initals">
          <p className="initals">TW.</p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <NavLink to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> /About Me
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ margin: "2px" }} />{" "}
                /Portfolio
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ margin: "2px" }} /> /Resume
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/contact" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> /Contact
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
