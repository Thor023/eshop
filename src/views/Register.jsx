import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import '../Login.css';
import config from '../config/auth.config';
import { useState, React } from 'react';

export default function Register() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');    
    const [password, setPassword] = useState('');
    const [avatar_url, setAvatar_url] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        
        try {
            event.preventDefault();

            const response = await axios.post(`${config.apiUrl}users`, {
                email,
                name,
                company,
                password,
                avatar_url,
            });
            console.log(response);
            alert("Usuario creado con éxito, intente iniciar sesión.");
            navigate('/login')
        } catch (error) {
            alert("Correo ingresado ya tiene cuenta, favor iniciar sesión.");
            navigate('/login')
        }
    };

    return (
        <>
            <Link to='/'>
                <Button style={{
                    background: 'none',
                    color: '#11194c',
                    border: 'none',
                    position: 'fixed',
                    fontWeight: 'bolder'
                }}>
                    X
                </Button>
            </Link>
            <Container fluid>
                <Row>
                    <Col className="col-md-6">
                        <Container style={{
                            textAlign: 'center',
                            paddingTop: '15vh',
                            fontSize: '10px',
                        }}>
                            <Row className="login-form">
                                <Col>
                                    <img src="logo.png" alt="kanri logo" style={{width: '100px'}}/>
                                    <h1 style={{ color: '#324adc' }}>KANRI</h1>
                                </Col>
                                <Form>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Correo de usuario</Form.Label>
                                        <Form.Control
                                            type="email" 
                                            value={email} 
                                            name="email" 
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="name@example.com"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            type="text" 
                                            value={name}
                                            name="name" 
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Nombre completo"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicCompany">
                                        <Form.Label>Empresa</Form.Label>
                                        <Form.Control
                                            type="text" 
                                            value={company}
                                            name="company" 
                                            onChange={(e) => setCompany(e.target.value)}
                                            placeholder="Empresa"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Crea una contraseña</Form.Label>
                                        <Form.Control
                                            type="password" 
                                            value={password}
                                            name="password" 
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="*********"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicAvatar">
                                        <Form.Label>Imagen avatar (URL 400x400)</Form.Label>
                                        <Form.Control
                                            type="text" 
                                            value={avatar_url}
                                            name="avatar" 
                                            onChange={(e) => setAvatar_url(e.target.value)}
                                            placeholder="https://image.com"
                                        />
                                    </Form.Group>

                                    <Col>
                                        <Link to='/'>
                                            <Button 
                                                type="submit"
                                                style={{ 
                                                    backgroundColor: 'transparent', 
                                                    color: '#324adc', 
                                                    borderColor: 'transparent',
                                                    borderRadius: '.2rem',
                                                    fontSize: '10px',
                                                    width: '70px',
                                                    marginRight: '2px',
                                            }}>
                                                Volver
                                            </Button>
                                        </Link>
                                        <Button onClick={handleSubmit} type="submit" style={{ 
                                            backgroundColor: '#324adc', 
                                            color: 'white', 
                                            borderColor: '#324adc',
                                            borderRadius: '.2rem',
                                            fontSize: '10px',
                                            width: '70px',
                                            marginLeft: '2px',
                                            }}>
                                            Registrar
                                        </Button>
                                    </Col>
                                </Form>
                                <span style={{ paddingTop: '4vh' }}>Tu contraseña debe contener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y un caracter especial. (Ej. @$!%*?&#.)</span>
                            </Row>
                        </Container>
                    </Col>
                    <Col className="col-md-6" style={{backgroundColor: '#11194c', height: '100vh'}}>
                        <Container className="container-login">
                            <Row className="col-md-4 container-no-img">
                            </Row>

                            <Row className="col-md-4 container-bg-img text-center">
                                <span style={{ paddingTop: '26vh' }}>
                                    <h3>Cuéntanos de ti</h3>
                                    Por favor, proporciona los siguientes datos para crear tu registro con nosotros.
                                </span>
                            </Row>
                            <Row className="col-md-4 container-no-img">
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}