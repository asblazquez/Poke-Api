import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Imagenes/PokeApi.png';

 export function NavBar() {
  return (
    <Navbar bg="dark" fixed='top' expand="lg">
      <Container>
        <Navbar.Brand href="#">
        <img
              src={logo}
              width="80"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav text-light" />
        <Navbar.Collapse id="basic-navbar-nav text-light">
          <Nav className="me-auto">
            <Nav.Link className='text-light' href="/pokemon">Pokemon</Nav.Link>
            <Nav.Link className='text-light' href="/item">Item</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}