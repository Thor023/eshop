import React, { useEffect, useState } from 'react'
import { Container, Form, Button, Card } from "react-bootstrap";

export default function AdminUsers() {

    const url = process.env.REACT_APP_API_AUTH_URL

    const [userlist, setUserlist] = useState([])
    const [search, setSearch] = useState("")
  
    const loadUsers = async () => {
        const res = await fetch(`${url}users`)
        const data = await res.json()
        setUserlist(data)
        console.log(data)
    }
    
    const handleDelete = async (id) => {
        try {
            await fetch(`${url}users/${id}` ,{
                method: 'DELETE',
            })
            setUserlist(userlist.filter(actualUser => actualUser.id !== id))
            } catch (error) {
            console.log(error)
        }
    }

    const searcher = (e) => {
        setSearch(e.target.value)
    }
    
    const results = !search ? userlist : userlist.filter( (data) => data.name.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <>
            <Container>
                <h3 style={{
                    padding: '15px'
                }}>Administración de Usuarios</h3>
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
                                placeholder="Buscar por nombre de usuario" 
                                variant="outlined" 
                                value={ search }
                                onChange={ searcher }
                                type='text'
                                style={{
                                    borderRadius: '.2rem',
                                    width: '20rem'
                                }}
                            />
                        </div>
                    </div>
                </Container>
                
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                }}>
                    {
                        results.map(userlist => (

                            <Card style={{ width: '12rem', fontSize: '.7rem'}}>
                                <Card.Img variant="top" src={userlist.avatar_url} style={{ width: '12rem' , height: '12rem' }} />
                                <Card.Body>
                                    <Card.Title style={{fontSize: 'small', fontWeight: 'bold'}}>{userlist.name}</Card.Title>
                                    <Card.Text>Correo: {userlist.email}</Card.Text>
                                    <Card.Text>Empresa: {userlist.company}</Card.Text>
                                </Card.Body>
                                <Button variant="warning" style={{margin: '0 1rem 1rem'}}>Editar</Button>
                                <Button variant="danger" style={{margin: '0 1rem 1rem'}} onClick={() => handleDelete(userlist.id)}>Eliminar</Button>
                            </Card>

                        ))
                    }
                </div>

            </Container>
        </>
    )

}