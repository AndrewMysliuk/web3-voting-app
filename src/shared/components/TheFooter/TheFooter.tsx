import { Row, Col, Container, NavLink } from "react-bootstrap"
import { Link } from "react-router-dom"

const TheFooter = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md="4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink as={Link} to="/about-us">
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink as={Link} to="/contact">
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink as={Link} to="/careers">
                  Careers
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink as={Link} to="/consulting">
                  Consulting
                </NavLink>
              </li>

              <li>
                <NavLink as={Link} to="/support">
                  Support
                </NavLink>
              </li>

              <li>
                <NavLink as={Link} to="/development">
                  Development
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink as={Link} to="/facebook">
                  Facebook
                </NavLink>
              </li>

              <li>
                <NavLink as={Link} to="/twitter">
                  Twitter
                </NavLink>
              </li>

              <li>
                <NavLink as={Link} to="/linkedIn">
                  LinkedIn
                </NavLink>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} className="text-center">
            <p className="mb-0">&copy; 2024 Company Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default TheFooter
