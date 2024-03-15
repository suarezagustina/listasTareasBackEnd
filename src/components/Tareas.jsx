import { Container, Row } from "react-bootstrap";
import CardTarea from "./Tarea/CardTarea";
import { useEffect, useState } from "react";
import { leerTareasAPI } from "../helpers/queries";

const Tareas = () => {
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
       <Container className='text-center mainPage'>
     <div>
    <h2 className='my-4 display-3 text-white'>Tareas a realizar</h2>
    </div>
    <Row>
    {
            tareas.map((tarea)=><CardTarea key={tarea.id} tarea={tarea}></CardTarea>)
          }
    </Row>
    </Container>
        </>
    );
};

export default Tareas;