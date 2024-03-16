import { Container, Table } from "react-bootstrap";
import ItemTarea from "./Tarea/ItemTarea";
import { useEffect, useState } from "react";
import { leerTareasAPI } from "../helpers/queries";

const TareasLista = () => {
  const [tareas, setTareas] = useState ([]);

  useEffect(()=>{
    traerTarea();
   },[])

   const traerTarea = async()=>{
    try {
     const listaTareasAPI = await leerTareasAPI()
     setTareas(listaTareasAPI);
    } catch (error) {
     console.log(error)
    }
   }

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
      {
            tareas.map((tarea)=><ItemTarea key={tarea.id} tarea={tarea} setTareas={setTareas}></ItemTarea>)
          }
      </tbody>
    </Table>
    </section>
            </Container>
        </>
    );
};

export default TareasLista;