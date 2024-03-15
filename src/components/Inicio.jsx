import { Container, Row } from "react-bootstrap";
import banner from "../../src/assets/bannerTareas.jpg"
import CardTarea from "./Tarea/CardTarea";

const Inicio = () => {
    return (
        <>
     <img src={banner} alt="Banner de tareas" id="banner"/>
    <Container className='text-center mainPage'>
     <div>
    <h1 className='my-4 display-3 text-white'>Tareas</h1>
    </div>
    <Row>
    <CardTarea></CardTarea>
    <CardTarea></CardTarea>
    <CardTarea></CardTarea>
    <CardTarea></CardTarea>
    <CardTarea></CardTarea>
    <CardTarea></CardTarea>
    </Row>
    </Container>
        </>
    );
};

export default Inicio;