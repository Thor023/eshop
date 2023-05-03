import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Server() {

    const navigate = useNavigate();

    const AddNewServer = () => {
        alert("Se agregó el nuevo Server");
        navigate("/inventario");
    };

    return (
        <>
            <Container className="p-3" style={{ width: '50vh', height: '60vh', textAlign: 'center', background: '#11194c', color: 'white', borderRadius: '.5rem', fontSize: '10px', marginTop: '5vh' }}>
                <h4>Nuevo Server</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Hostname</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa el hostname" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>IP</Form.Label>
                        <Form.Control type="ip" placeholder="Ingresa la ip" />
                    </Form.Group>
                  
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa una descripción" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Estado</Form.Label>
                        <Form.Select aria-label="Default select example" className="mb-3">
                            <option>Selecciona el estado</option>
                            <option value="1">Activo</option>
                            <option value="2">Inactivo</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ margin: '2px' }} onClick={AddNewServer}>
                        Agregar
                    </Button>
                    <Link to='/inventario'>
                        <Button variant="danger" style={{ margin: '2px' }}>
                            Volver
                        </Button>
                    </Link>
                </Form>
            </Container>
        </>
    );
}