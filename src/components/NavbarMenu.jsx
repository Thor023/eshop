import { Link } from "react-router-dom";
import { Container, Navbar, Row, Button } from 'react-bootstrap';
import '../Navbar.css';
import { useState } from "react";

export default function NavbarMenu() {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
        <Navbar className={ navbar ? 'navbar active' : 'navbar' }>
          <Container className="navbar-container">
            <Row>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="logo-white.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                <span style={{ color: 'white' }}>Kanri</span>
              </Navbar.Brand>
            </Row>
            <Row className="d-flex">
              <Container>
                <Link to='/login'>
                  <Button style={{ 
                    backgroundColor: 'white', 
                    color: '#324adc', 
                    borderColor: 'white',
                    fontSize: '10px',
                    }}>Iniciar Sesión</Button>
                </Link>
                <Link to='/register'>
                  <Button style={{ 
                    backgroundColor: 'transparent', 
                    color: 'white', 
                    borderColor: 'white',
                    marginLeft: '15px',
                    fontSize: '10px',
                    }}>Regístrate</Button>
                </Link>
              </Container>
            </Row>
          </Container>
        </Navbar> 
    </>
  );
}