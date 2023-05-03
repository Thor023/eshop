import Form from "react-bootstrap/Form";
import { Button, Container, Col } from "react-bootstrap";
import jwtDecode from 'jwt-decode';
import { useState, useEffect } from "react";
import config from '../config/auth.config';

export default function Registrarse() {

  const token = localStorage.getItem('token');
  const user = jwtDecode(token);

  const [curretnuser, setCurrentuser] = useState('');
  const [password, setPasword] = useState('');
  const [updated, setUpdated] = useState(password);

  const loadUser = async () => {
    const res = await fetch(`${config.apiUrl}users/${user.email}`)
    const data = await res.json()
    setCurrentuser({
      id: data.user.id,
      name: data.user.name,
      company: data.user.company,
      avatar_url: data.user.avatar_url,
    })
  }

  const handleChange = async (e) => {
    setPasword(e.target.value);
  }

  const data = { password: password }

  const handleClick = async () => {

    if (password === "") {
      alert('No ingresaste cambios en la contraseña.')      
    } else {
      setUpdated(`{"password": "${password}"}`);
      await fetch(`${config.apiUrl}users/${curretnuser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(data),
      })
      alert('Contraseña actualizada con éxito.')
    }
  };
 

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <div 
    className="pt-5" 
    style={{ 
      display: 'flex', 
      justifyContent: 'space-around', 
      width: '140vh', 
      textAlign: 'center',
      marginLeft:'10rem',
      marginBottom: '50px' }}
    >

      <Container style={{display: 'flex'}}>
          
        <Col>

          <div>
            <span>{curretnuser.name}</span>
            <hr />
          </div>
          <img src={`${curretnuser.avatar_url}`} alt="avatar" style={{height: "200px", borderRadius: '6rem'}}/>
          
        </Col>

        <Col>
          <Form 
            className="w-50 border p-3 mx-5 rounded text-white" 
            style={{ backgroundColor: '#324adc' }}
          >
            
            <Form.Group className="mb-3" controlId="controlEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                disabled
                value={user.email}
                type="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="aontrollName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                disabled
                value={curretnuser.name}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="controlCompany">
              <Form.Label>Empresa</Form.Label>
              <Form.Control
                disabled
                value={curretnuser.company}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="controlAvatar">
              <Form.Label>Avatar URL</Form.Label>
              <Form.Control
                disabled
                value={`${curretnuser.avatar_url}`}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="controlPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name='password'
                onChange={handleChange}
                value={password}
                type="password"
                placeholder="Ingrese una nueva contraseña si desea cambiarla."
              />
            </Form.Group>


            <Button 
              variant="outline-light me-3" 
              style={{ borderColor: 'white', fontSize: '10px'}}
              onClick={handleClick}
            >
              Actualizar
            </Button>
          </Form>
        </Col>

      </Container>  
      
    </div>
  );
}
