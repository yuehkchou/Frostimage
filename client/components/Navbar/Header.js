import React from 'react';
import { render } from 'react-dom';
import { FormGroup, FormControl, Nav, Navbar, NavItem, NavDropdown, Button, Glyphicon, MenuItem } from 'react-bootstrap';

class Header extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    const navBar = (
      <Navbar inverse collapseOnSelect id ="mainNav" className="navbar navbar-default navbar-fixed-top">
        <Navbar.Header className="header-header">
          <Navbar.Brand>
            <a href="#">DotLeague</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className="collapse navbar-collapse">
          <Navbar.Form pullLeft>
            <FormGroup id="searchBar">
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
          <Nav>
            <NavItem eventKey = { 1 } href="#">About</NavItem>
            <NavItem eventKey = { 2 } href="#">Link</NavItem>
            <NavDropdown eventKey = { 3 } title="Champions" id="basic-nav-dropdown">
              <MenuItem eventKey = { 3.1 }>Action</MenuItem>
              <MenuItem eventKey = { 3.2 }>Action 2</MenuItem>
              <MenuItem eventKey = { 3.3 }>Action 2</MenuItem>
              <MenuItem eventKey = { 3.4 }>Action 2</MenuItem>
              <MenuItem eventKey = { 3.5 }>Action 2</MenuItem>
            </NavDropdown>
            <NavItem eventKey = { 4 } href="#">Stream</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey = { 1 } href="#">Login</NavItem>
            <NavItem eventKey = { 2 } href="#">Logout</NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
    );

    return (
      <div className="navBar">
        { navBar }
      </div>
    )
  };
}

export default Header;
