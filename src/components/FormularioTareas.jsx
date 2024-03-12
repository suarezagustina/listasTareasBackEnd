import { Button, Container, Form, Table } from "react-bootstrap";
import ItemTarea from "./Tarea/ItemTarea";

const FormularioTareas = () => {
  
  return (
    <Container>
    <section className="text-center mainPage">
      <h2 className="display-5 my-3">Agregar una Tarea:</h2>
     <Form.Control size="lg" type="text" placeholder="Titulo de tarea..." />
      <br />
      <Form.Control size="sm" type="text" placeholder="Subtitulo" />
      <br />
      <Form.Control type="text" placeholder="Descripcion Breve" />
      <Button variant="dark" className="my-3" type="submit">Enviar</Button>
    </section>
    <section>
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Titulo de Tarea</th>
          <th>Subtitulo</th>
          <th>Descripcion Breve</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
      <ItemTarea></ItemTarea>
      </tbody>
    </Table>
    </section>
    </Container>
  );
};

export default FormularioTareas;