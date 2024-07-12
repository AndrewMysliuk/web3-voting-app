import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, Nav, NavLink, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const TheNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavbarBrand>Web3 App</NavbarBrand>

        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink as={Link} to="/">
              Home
            </NavLink>

            <NavLink as={Link} to="/about">
              About
            </NavLink>

            <NavLink as={Link} to="/data">
              Data
            </NavLink>
          </Nav>
          <Nav>
            <Button variant="primary" className="me-2">
              Log In
            </Button>
            <Button variant="primary">Sign Out</Button>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default TheNavbar
