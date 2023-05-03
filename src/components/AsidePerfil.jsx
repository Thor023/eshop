import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import jwtDecode from 'jwt-decode';
import { useState, useEffect } from "react";
import config from '../config/auth.config';

export default function AsidePerfil() {

    const token = localStorage.getItem('token');
    const user = jwtDecode(token);

    const navigate = useNavigate();

    const [curretnuser, setCurrentuser] = useState('');
  
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

    useEffect(() => {
        loadUser()
    }, [])

    const logout = () => {
        alert(`Sesión cerrada con éxito, hasta pronto ${user.email}`);
        navigate("/");
    };

    return (
        <aside className="text-center p-5" style={{ background: '#11194c' }}>
        <div>
            <Link to='/perfil' style={{ textDecoration: 'none' }}>
                <div style={{ color: 'white', paddingBottom: '10vh' }}>
                    <img src="https://i.ibb.co/hfNScjt/logo-white.png" alt="logo-white" style={{ width: '30px' }}/>
                    <h6>KANRI</h6>
                    <hr />
                    <img src={`${curretnuser.avatar_url}`} alt="avatar" style={{height: "50px", borderRadius: '6rem', marginBottom:'2rem'}}/>
                    <h6>Bienvenido</h6> 
                    {curretnuser.name}
                </div>
            </Link>
            <Link to="/perfil" className="text-white text-decoration-none" >
                <h6 className="mb-3">Mis datos</h6>
            </Link>
            <Link to="/inventario" className="text-white text-decoration-none">
                <h6 className="mb-3">Inventario</h6>
            </Link>
            <Link to="/iplist" className="text-white text-decoration-none">
                <h6 className="mb-3">Listado de IPs</h6>
            </Link>
            <Link to="/admin" className="text-white text-decoration-none" >
                <h6 className="mb-3">{curretnuser.name === "admin" && "Admin"}</h6>
            </Link>
            <div>
            {/* <Button variant="danger" onClick={logout}> */}
            <Button variant="outline-light" style={{ marginTop: '25vh' }} onClick={logout}>
                Cerrar Sesión
            </Button>
            </div>
        </div>
        </aside>
  );
}
