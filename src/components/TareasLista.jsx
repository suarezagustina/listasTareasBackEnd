import { Container, Table } from "react-bootstrap";
import ItemTarea from "./Tarea/ItemTarea";

const TareasLista = () => {
    return (
        <>
        <Container className="mainPage p-3">
        <section>
            <h2 className="display-5 text-white mb-3">Todas las Tareas:</h2>
    <Table responsive striped bordered hover>
      <thead>
        <tr>
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
        </>
    );
};

export default TareasLista;