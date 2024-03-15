import { Button, Container, Form } from "react-bootstrap";
//import Swal from "sweetalert2";

const FormularioTareas = () => {

  return (
    <Container className="mainPage">
    <section className="text-center">
      <h2 className="display-5 my-3 text-white">Agregar una Tarea:</h2>
      <Form>
     <Form.Control size="lg" type="text" placeholder="Titulo de tarea..."/>
     <p className="text-danger mb-0">prueba de error</p>
      <br/>
      <Form.Control size="sm" type="text" placeholder="Subtitulo"/>
      <p className="text-danger mb-0">prueba de error</p>
      <br/>
      <Form.Control type="text" placeholder="Descripcion Breve"/>
      <p className="text-danger mb-0">prueba de error</p>
      <Button variant="light" className="my-3 btn btn-light" type="submit">Enviar</Button>
      </Form>
    </section>
    </Container>
  );
};

export default FormularioTareas;