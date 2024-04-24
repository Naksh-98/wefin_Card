import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import './Css/NavMenu.css'


const NavMenu = () => {
  return (
    <div className="navbar_container">
      <Navbar expand="lg" bg="white" className="short_navbar">
        <Container fluid>
          <Navbar.Brand href="#"> <Image
            src="https://wefin.in/assets/images/wefin-logo.svg"
            style={{ height: '100px', width: '100px',position:'relative',left:'110px' }}
          /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Button variant="outline-custom"><i className="bi bi-person-circle" style={{ marginRight: '10px' }}></i>Login</Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavMenu;