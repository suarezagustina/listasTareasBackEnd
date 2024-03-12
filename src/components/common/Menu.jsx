import {Navbar, Container, Nav} from 'react-bootstrap'

const Menu = () => {
    return (
        <>
 <Navbar expand="lg" className="navbar bg-dark border-body">
 <Container>
   <Navbar.Brand href="#home" className='text-white'>Lista de Tareas</Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ms-auto">
       <Nav.Link href="#home" className='text-white'>Inicio</Nav.Link>
       <Nav.Link href="#link" className='text-white'>Tareas</Nav.Link>
       <Nav.Link href="#link" className='text-white'>Añadir</Nav.Link>
       <Nav.Link href="#link" className='text-white'>Ver/Editar/Borrar</Nav.Link>
     </Nav>
   </Navbar.Collapse>
 </Container>
</Navbar>
</>
    );
};

export default Menu;