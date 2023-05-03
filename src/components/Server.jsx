import { Button, Card, Container } from "react-bootstrap";

export default function Server({
    server: { hostname, description, ip }
    }) {
    return (
        <>
            <Card className="p-3 m-2">
            <Card.Body style={{ fontSize: '10px' }}>
                <Card.Text>Hostname: {hostname}</Card.Text>
                <Card.Text>Description: {description}</Card.Text>
                <Card.Text>IP: {ip}</Card.Text>
            </Card.Body>
            <Container fluid className="d-flex justify-content-center" >
                <Button className="m-2" >Editar/Ver</Button>
                <Button className="m-2" variant="danger">Eliminar</Button>
            </Container>
            </Card>
        </>
    );
}