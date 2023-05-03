import { Container, Row, Col, Card} from "react-bootstrap";
import { MdOutlineInventory, MdOutlineCallEnd, MdMoreTime, MdAutoAwesome } from 'react-icons/md';
import '../css/styles.css';

export default function Why() {
    return (
        <Container 
            fluid 
            style={{ 
                height: '450px', 
                backgroundColor: '#324adc', 
                marginTop: '5vh', 
                paddingTop: '5vh',
                color: 'white',
            }}>
            <div style={{ textAlign: 'center', fontSize: 'xx-large' }}>
                <span>¿Qué nos </span>
                <span style={{ fontWeight: 'bold' }}>diferencia?</span>
            </div>
            <Row style={{
                margin: '0 3rem',
                paddingTop: '5vh',
                textAlign: 'center',
            }}>

                <Col className="col-md-3">
                    <Card style={{ 
                        backgroundColor: 'transparent',
                        textAlign: 'center',
                        border: 'none',
                        justifyContent: 'center',
                        }}>
                        <Card.Body>
                            <Card.Title style={{fontSize: '100px'}}><MdOutlineInventory /></Card.Title>
                            <Card.Text  style={{paddingTop: '5vh'}}>
                                Administración centralizada
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col-md-3">
                    <Card style={{ 
                        backgroundColor: 'transparent',
                        textAlign: 'center',
                        border: 'none',
                        }}>
                        <Card.Body>
                            <Card.Title style={{fontSize: '100px'}}><MdOutlineCallEnd /></Card.Title>
                            <Card.Text  style={{paddingTop: '5vh'}}>
                                Atención personalizada
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col-md-3">
                    <Card style={{ 
                        backgroundColor: 'transparent',
                        textAlign: 'center',
                        border: 'none',
                        }}>
                        <Card.Body>
                            <Card.Title style={{fontSize: '100px'}}><MdMoreTime /></Card.Title>
                            <Card.Text  style={{paddingTop: '5vh'}}>
                                Ahorra tiempo y dinero
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col-md-3">
                    <Card style={{ 
                        backgroundColor: 'transparent',
                        textAlign: 'center',
                        border: 'none',
                        }}>
                        <Card.Body>
                            <Card.Title style={{fontSize: '100px'}}><MdAutoAwesome /></Card.Title>
                            <Card.Text  style={{paddingTop: '5vh'}}>
                                Entorno ágil y moderno
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </Container>
    ); 
}