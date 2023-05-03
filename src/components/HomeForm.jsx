import { Container, Row, Col, Form, Button} from "react-bootstrap";

import '../css/styles.css';

export default function HomeForm() {

    return (
        <Container fluid className="mt-4 mb-5">
            <div style={{ textAlign: 'center' }}>
                Dejas tu mensaje y te contactaremos a la brevedad.
            </div>
            <Row className="justify-content-md-center mt-4">
                <Col md="auto" style={{ width: '300px'}}>
                    <Form action="https://formsubmit.co/be1283b987e9a770949cb5bf3140f01d" method="POST">

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tú nombre" name="name"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tú email" name="email"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={3} name="subject"/>
                        </Form.Group>

                        <Button style={{ backgroundColor: '#324adc' }} type="submit">
                            Enviar
                        </Button>
                        <input type="hidden" name="_next" value="https://kanri-app.netlify.app/" />
                        <input type="hidden" name="_captcha" value="false" />
                    </Form>
                </Col>
                <Col md="auto" style={{
                    paddingTop: '3rem'
                }}>
                    <div style={{ fontWeight: 'bold' }}>
                        Dirección y teléfonos
                    </div>
                    <div style={{
                    paddingTop: '1rem'
                }}>
                        742 Evergreen Terrace, Springfield <br/>
                        <span>Nevada, EEUU.</span> <br/><br/>
                        555-555-5555
                    </div>
                </Col>
            </Row>
        </Container>
    ); 
}