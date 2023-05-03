import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function ServersListHero() {

    const url = process.env.REACT_APP_API_INVENTORY_DNS
    const navigate = useNavigate()

    const [servers, setServers] = useState([])
    const [search, setSearch] = useState("")
  
    const loadServers = async () => {
        const res = await fetch(`${url}servers`)
        const data = await res.json()
        setServers(data)
    }
    
    const handleDelete = async (id) => {
        try {
            await fetch(`${url}servers/${id}` ,{
                method: 'DELETE',
            })
            setServers(servers.filter(server => server.id !== id))
            } catch (error) {
            console.log(error)
        }
    }

    const searcher = (e) => {
        setSearch(e.target.value)
      }
    
    const results = !search ? servers : servers.filter( (data) => data.ip.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        loadServers()
    }, [])

    return (
        <>
            <Container>
                <h3 style={{
                    padding: '15px'
                }}>Inventario de Servicios</h3>
                <hr />
                <Container>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '10px',
                    }}>
                        <div>
                            <Form.Control
                                id="outlined-basic" 
                                placeholder="Buscar por IP" 
                                variant="outlined" 
                                value={ search }
                                onChange={ searcher }
                                type='text'
                                style={{
                                    borderRadius: '.2rem'
                                }}
                            />
                        </div>
                        <div>
                            <Button style={{marginLeft: 'auto'}} variant="success" onClick={() => navigate('/inventario/new')}>
                                Agregar Server
                            </Button>
                        </div>
                    </div>
                </Container>
                
                <div className='serverListPage'>
                    {
                        results.map(server => (
                            <Card key={server.id}>
                                <Card.Header style={{
                                    backgroundColor: '#11194c', 
                                    color: 'white' 
                                }}>
                                    <strong>Server:</strong> {server.hostname}
                                </Card.Header>
                                <Card.Body style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <Row>
                                        <Col>
                                            <Card.Text>
                                                <strong>IP:</strong> {server.ip}
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>Ambiente:</strong> {server.environment}
                                            </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text>
                                                <strong>Descripción:</strong> {server.description}
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                    <div>
                                        <Button 
                                            variant="warning"
                                            style={{color: 'black', marginRight:'.5rem'}}
                                            onClick={ () => navigate(`/inventario/${server.id}/edit`)}                        
                                        >
                                            Ver/Editar
                                        </Button>

                                        <Button 
                                            variant="danger"
                                            onClick={() => handleDelete(server.id)} 
                                        >
                                            Eliminar
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>

            </Container>
        </>
    )

}