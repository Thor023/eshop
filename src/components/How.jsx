import { Container, Row, Col } from "react-bootstrap";
import '../css/styles.css';

export default function How() {
    return (
      <Container fluid style={{ height: '400px' }}>
        <div style={{ textAlign: 'center', fontSize: 'xx-large' }}>
            <span>¿Cómo </span>
            <span style={{ fontWeight: 'bold' }}>funciona?</span>
        </div>
        <Row >
            <Col className="col-md-6" style={{ paddingTop: '17vh', paddingLeft: '20%' }}>
                <span style={{ fontWeight: 'bold', fontSize: 'x-large' }}>Regístrate</span>
                <div style={{ paddingTop: '30px' }}>
                    <span>Regístrate de manera simple en tan solo unos pocos segundos y ya podrás comenzar a utilizar Kanri. </span>
                    <span>Puedes solicitar asistencia via correo o whatsapp para utilizar la herramienta.</span>
                </div>
            </Col>
            <Col className="col-md-6" >
                <img src="signup-img.png" alt="signup-img" style={{ height: '40vh', paddingTop: '5vh', paddingLeft: '15%' }}/>
            </Col>
        </Row>
      </Container>
    ); 
}