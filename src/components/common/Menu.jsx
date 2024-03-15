import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Lista de Tareas</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">Inicio</NavLink>
            <NavLink end className="nav-link" to="/vertareas">Tareas</NavLink>
            <NavLink end className="nav-link" to="/creartarea">Añadir</NavLink>
            <NavLink end className="nav-link" to="/modificartarea">Ver/Editar/Borrar</NavLink>
          </Nav>
        </Container>
</Navbar>
</>
    );
};

export default Menu;