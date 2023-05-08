import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'lavender'}}>
      <Container fluid>
        <Navbar.Brand className='navbar-brand' href="/home" style={{fontSize: '20px',  color: 'indigo' }}>Flavor Frenzy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            <Nav.Link href="/Contact">Contact Us</Nav.Link>
            <NavDropdown title="Create" id="navbarScrollingDropdown">
              <NavDropdown.Item href='/addmenu'>New Menu</NavDropdown.Item>
              <NavDropdown.Item href='/addcategory'>
                New Category
              </NavDropdown.Item>
              <NavDropdown.Item href='/adddish'>
                New Dish
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

