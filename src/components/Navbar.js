import { Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        zIndex: '3',
      }}
    >
      <>
        <Navbar bg="none" expand="lg">
          <Navbar.Brand href="/">
            <Image fluid src={logo} width={200} height={200}></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end "
          >
            <Nav className="me-auto fw-bold">
              <Nav.Link href="/">
                <h6>Home</h6>
              </Nav.Link>
              <Nav.Link href="/wheretogo">
                <h6>Where to go</h6>
              </Nav.Link>
              <Nav.Link href="/wheretogo">
                <h6>What to do</h6>
              </Nav.Link>
              <Nav.Link href="/packages">
                <h6>Holiday pakges</h6>
              </Nav.Link>
              <Nav.Link href="/packages">
                <h6>Plan your holiday</h6>
              </Nav.Link>
              <Nav.Link href="/about">
                <h6>About us</h6>
              </Nav.Link>
              <Nav.Link href="/contact">
                <h6>Contact us</h6>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    </div>
  );
}

export default NavBar;
