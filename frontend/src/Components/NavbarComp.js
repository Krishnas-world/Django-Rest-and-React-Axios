import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import AuthContext from '../Context/AuthContext'


const NavbarComp = () => {
// this line is breaking my code
  let {user, logoutUser} = useContext(AuthContext)
  

  const mainNav = {
    margin: '0 7%',
  }

  const logoFont = {
    fontSize : '50px',
    padding: '35px',
    marginRight  :'25%',

  }

  const navLink = {
    fontSize : '35px',
    margin : '0 5%',

  }

  const maxContent = {
    width : 'max-content'
  }

  return (
    <Navbar bg="light" expand="lg" >
      <Container className='' style={mainNav}>
        <Navbar.Brand to="/" as={Link} style={logoFont} className='px-5'>Notify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={navLink}>
          <Nav className="mx-5" >
            <Nav.Link to='/' as={Link} className="mx-3">Home</Nav.Link>
            
            <NavDropdown title="Resources" id="basic-nav-dropdown" className="mx-3">
              <NavDropdown.Item as={Link} to="/notes">Notes</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.2">Assignments</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.3">Question Papers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/upload">Upload Resources</NavDropdown.Item>
            </NavDropdown>
            {!user && <Nav.Link to="/login" as={Link} className="mx-3">Login</Nav.Link>}
            <Nav.Link to="/about" as={Link} className="mx-3" style={maxContent}>About Us</Nav.Link>
            {user && <Nav.Link className="mx-3" style={maxContent}>{user.username}</Nav.Link>}
            <Nav.Link to='/register' as={Link} className="mx-3">Register</Nav.Link>
            {user && <Nav.Link to="/" as={Link} className="mx-3" style={maxContent} onClick={logoutUser}>Logout</Nav.Link>}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp