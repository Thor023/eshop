import { 
    Button,
    Grid, 
    Card, 
    CardContent, 
    TextField, 
    Typography, 
    CircularProgress,
  } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import usePasswordToggle from '../hooks/usePasswordToggle'


export default function ServerForm() {
    const url = 'https://kanri-inventory-back.up.railway.app'
    const navigate = useNavigate()
    const params = useParams()

    const [server, setServer] = useState({
        hostname: '',
        ip: '',
        user_so: '',
        pass_so: '',
        ram: '',
        hdd: '',
        cpu: '',
        bill_client: '',
        environment: '',
        state: '',
        owner: '',
        name_so: '',
        admin: '',
        client: '',
        monitoring: '',
        db: '',
        engine_db: '',
        user_db: '',
        pass_db: '',
        description: '',
    })

    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
    
        if (editing) {
            await fetch(`${url}/servers/${params.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'Application/json' },
                body: JSON.stringify(server),
            })
        } else {
            await fetch(`${url}/servers`, {
                method: 'POST',
                body: JSON.stringify(server),
                headers: { 'Content-Type': 'Application/json' },
            })
        }
    
        setLoading(false)
        navigate('/inventario')
    }

    const handleChange = e => setServer({...server, [e.target.name]: e.target.value})

    const loadServer = async (id) => {
        const res = await fetch(`${url}/servers/${id}`)
        const data = await res.json()
        setServer({
            id: data.id,
            hostname: data.hostname,
            ip: data.ip,
            user_so: data.user_so,
            pass_so: data.pass_so,
            ram: data.ram,
            hdd: data.hdd,
            cpu: data.cpu,
            created_at: data.created_at,
            bill_client: data.bill_client,
            environment: data.environment,
            state: data.state,
            owner: data.owner,
            name_so: data.name_so,
            admin: data.admin,
            client: data.client,
            monitoring: data.monitoring,
            db: data.db,
            engine_db: data.engine_db,
            user_db: data.user_db,
            pass_db: data.pass_db,
            description: data.description,
        })
        setEditing(true)
    }

    useEffect(() => {
        if (params.id) {
            loadServer(params.id)
        }
    }, [params.id])

    const [passwordInputType, toggleIcon] = usePasswordToggle()

    return (
        <Grid
            container 
            style={{borderRadius: '.5rem'}}
            direction='column'
            alignItems='center'
            justifyContent='center'
        >
            
            <Grid item xs={3}>
                <Card
                    sx={{ mt: 5 }} 
                    style={{
                    backgroundColor: '#11194c',
                    padding: '1rem',
                }}>

                    <Typography
                        variant='5'
                        textAlign='center'
                        color='white'
                    >
                        {editing ? 'Editar Servidor:' : 'Agregar Servidor'} {server.hostname}
                    </Typography>

                    <CardContent>
                        <form onSubmit={handleSubmit}>

                            <div>

                                <TextField 
                                    variant='outlined'
                                    label='Hostname'
                                    sx={{
                                      margin: '.5rem'
                                    }}
                                    name='hostname'
                                    value={server.hostname}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white' }}}
                                    InputLabelProps={{style: {color: 'white' }}}
                                />


                                <TextField
                                    variant='outlined'
                                    label='IP'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='ip'
                                    value={server.ip}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                                <TextField
                                    variant='outlined'
                                    label='Usuario S.O.'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='user_so'
                                    value={server.user_so}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                                <TextField
                                    variant='outlined'
                                    label='Password S.O.'
                                    type={ passwordInputType }
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='pass_so'
                                    value={server.pass_so}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                            </div>

                            <div>

                                <TextField 
                                    variant='outlined'
                                    label='Ram (GB)'
                                    sx={{
                                      margin: '.5rem'
                                    }}
                                    name='ram'
                                    value={server.ram}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white' }}}
                                    InputLabelProps={{style: {color: 'white' }}}
                                />

                                <TextField
                                    variant='outlined'
                                    label='HDD (GB)'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='hdd'
                                    value={server.hdd}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                                <TextField
                                    variant='outlined'
                                    label='CPU (cores)'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='cpu'
                                    value={server.cpu}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                                <TextField
                                    variant='outlined'
                                    label='Factura Cliente (SI/NO)'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='bill_client'
                                    value={server.bill_client}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                            </div>

                            <div>

                                <TextField 
                                    variant='outlined'
                                    label='Ambiente (PRD/QA)'
                                    sx={{
                                    margin: '.5rem'
                                    }}
                                    name='environment'
                                    value={server.environment}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white' }}}
                                    InputLabelProps={{style: {color: 'white' }}}
                                />

                                <TextField
                                    variant='outlined'
                                    label='Estado (ON/OFF)'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='state'
                                    value={server.state}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                                <TextField
                                    variant='outlined'
                                    label='Product Owner'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='owner'
                                    value={server.owner}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                                <TextField
                                    variant='outlined'
                                    label='Nombre S.O.'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='name_so'
                                    value={server.name_so}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                            </div>

                            <div>

                                <TextField
                                    variant='outlined'
                                    label='Admin (SI/NO)'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='admin'
                                    value={server.admin}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                                <TextField
                                    variant='outlined'
                                    label='Cliente'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='client'
                                    value={server.client}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                                
                                <TextField
                                    variant='outlined'
                                    label='Monitoreo SI/NO'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='monitoring'
                                    value={server.monitoring}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                                
                                <TextField
                                    variant='outlined'
                                    label='DDBB (SI/NO)'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='db'
                                    value={server.db}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                            </div>

                            <div>

                                <TextField
                                    variant='outlined'
                                    label='Fecha Creación (UTC)'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='created_at'
                                    value={ editing ? server.created_at.slice(0,-5).replace('T', ' ') : 'auto' }
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                                <TextField
                                    variant='outlined'
                                    label='DDBB Engine'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='engine_db'
                                    value={server.engine_db}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                                <TextField
                                    variant='outlined'
                                    label='DDBB User'
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='user_db'
                                    value={server.user_db}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                                <TextField
                                    variant='outlined'
                                    label='DDBB Password'
                                    type={ passwordInputType }
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='pass_db'
                                    value={server.pass_db}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                            </div>

                            <div>

                                <TextField
                                    variant='outlined'
                                    label='Descripción'
                                    multiline
                                    maxRows={4}
                                    sx={{
                                        margin: '.5rem'
                                    }}
                                    name='description'
                                    value={server.description}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white', width: '420px'}}}
                                    InputLabelProps={{style: {color: 'white'}}}
                                />

                            </div>

                            <Grid container justifyContent='space-between' alignItems='center' mt={2}>
                                <Grid item>
                                    <Button 
                                        variant='contained' 
                                        type='submit'
                                        disabled={!server.hostname || !server.ip || !server.user_so || !server.pass_so || !server.ram || !server.hdd || !server.cpu || !server.bill_client || !server.environment || !server.state || !server.owner || !server.name_so || !server.admin || !server.client || !server.monitoring || !server.db || !server.engine_db || !server.user_db || !server.pass_db || !server.description}
                                    >
                                    {loading ? <CircularProgress
                                            color='inherit'
                                            size={24}
                                    /> : 'Guardar'}
                                    </Button>
                                    <Button variant='contained' onClick={() => navigate('/inventario')} style={{marginLeft: '5px'}}>
                                        Volver
                                    </Button>
                                </Grid>
                                <Grid item style={{marginRight: '10px', color: 'white'}}>
                                    mostrar password
                                    <span style={{marginLeft: '5px'}}> { toggleIcon } </span>
                                </Grid>
                            </Grid>

                        </form>
                    </CardContent>

                </Card>
            </Grid>

        </Grid>
    )
}