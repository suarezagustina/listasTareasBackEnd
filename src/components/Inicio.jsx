import { Container, Row } from "react-bootstrap";
import banner from "../../src/assets/bannerTareas.jpg"
import CardTarea from "./Tarea/CardTarea";
import { useEffect, useState } from "react";
import { leerTareasAPI } from "../helpers/queries";

const Inicio = () => {
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
     <img src={banner} alt="Banner de tareas" id="banner"/>
    <Container className='text-center mainPage'>
     <div>
    <h1 className='my-4 display-3 text-white'>Tareas</h1>
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

export default Inicio;