import React from 'react';
import { render } from 'react-dom';
import { Nav, Navbar, NavItem, NavDropdown, Button, Glyphicon, MenuItem } from 'react-bootstrap';

class Header extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    const navBar = (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">DotLeague</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collaspe>
          <Nav>
            <NavItem eventKey = { 1 } href="#">About</NavItem>
            <NavItem eventKey = { 2 } href="#">Link</NavItem>
            <NavDropdown eventKey = { 3 } title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey = { 3.1 }>Action</MenuItem>
              <MenuItem eventKey = { 3.2 }>Action 2</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey = { 1 } href="#">Login</NavItem>
            <NavItem eventKey = { 2 } href="#">Logout</NavItem>
          </Nav>
          </Navbar.Collaspe>
        </Navbar>
    );

    return (
      <div>
        {navBar}
      </div>
    )
  };
}

export default Header;
