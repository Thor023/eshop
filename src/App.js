import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import IpList from './views/IpList';
import Login from './views/Login'
import Perfil from './views/Perfil'
import Register from './views/Register'
import ServerList from "./views/ServerList";
import ServerForm from "./views/ServerForm";
import Admin from "./views/Admin";
import './components/FontawesomeIcons'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path='/inventario' element={< ServerList />} />
          <Route path='/inventario/new' element={< ServerForm />} />
          <Route path='/inventario/:id/edit' element={< ServerForm />} />
          <Route path="/iplist" element={<IpList />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}