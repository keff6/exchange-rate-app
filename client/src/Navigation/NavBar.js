import React, { Component } from 'react';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { routes } from '../Routing/routes';


class NavBar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState(prevState => { 
      return {
        isOpen: !prevState.isOpen
      }})
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Exchange-Rate-App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to={routes.ROOT} tag={RRNavLink}>Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={routes.ABOUT} tag={RRNavLink}>About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(NavBar);
