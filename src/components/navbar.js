import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class navbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">ExcerTracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" activeKey={window.location.pathname}>
            <Nav.Link href="/">Exercise</Nav.Link>
            <Nav.Link href="/create">Create Exercise</Nav.Link>
            <Nav.Link href="/user">Create User</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default navbar;
