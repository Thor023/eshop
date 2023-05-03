import { Container, Row, Col, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/styles.css';

export default function Background() {

    return (
      <Container fluid className="home-bg-img" style={{ height: '880px', color: 'white' }}>
        <Row>
            <Col 
                className="col-md-5" 
                style={{ 
                    textAlign: 'right',
                    marginTop: '15vh',
                }}>
                <div style={{ textAlign: 'left', width: '300px', margin: '0 0 0 auto' }}>
                    <h2>Administrar tus recursos informáticos</h2>
                </div>
                <div style={{ textAlign: 'left', width: '300px', margin: '0 0 0 auto', color: '#53b7e5' }}>
                    <h1>AHORA ES</h1>
                    <h1>MAS FACIL</h1>
                </div>
                <div style={{ textAlign: 'left', width: '300px', margin: '0 0 0 auto'  }}>
                    <span style={{ fontSize: '15px' }}>
                        Kanri, la nueva forma de gestionar y administrar tu recursos informáticos de manera fácil, rápida y dinámica.
                    </span>
                    <Link to='/register'>
                        <Button style={{ marginTop: '2rem', backgroundColor: '#324adc', border: '#324adc' }}>
                            Regístrate Gratis
                        </Button>
                    </Link>
                </div>
            </Col>
            <Col className="col-md-7">
                <img 
                    src="phone-mac.png"
                    alt="phone-mac" 
                    style={{ 
                        height: '300px',
                        margin: '15vh 3vh'
                }} />
            </Col>
        </Row>
      </Container>
    ); 
}