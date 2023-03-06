import logo from './Image/Logo.png';
import cb from './Image/cb.png';
import pp from './Image/pp.jpg';
import './Navbar.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavBarVenue = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top" className="navbar-venue">
        <NavbarBrand href="/" className="navbar-brand-venue">
          <NavLink href="/">
            <img
              src={logo}
              alt="logo"
              className="logoimg-venue"
            />
            <span className="brand-name-venue">Celestial Biscuit</span>
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto navbar-right-venue" navbar>
            <NavItem>
              <img
                src={pp}
                alt="user profile picture"
                className="user-profile-pic-venue rounded-circle"
              />
              <span className="username-venue">abc</span>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <i className="fas fa-caret-down" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/settings">
                  Settings
                </DropdownItem>
                <DropdownItem href="/logout">
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarVenue;
