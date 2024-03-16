import { Button } from "react-bootstrap";
import { borrarTareaAPI, leerTareasAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemTarea = ({tarea, setTareas}) => {

  const borrarTarea = ()=>{
    Swal.fire({
      title: "¿Estas seguro de eliminar esta Tarea?",
      text: "No puedes revertir este proceso posteriormente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTareaAPI(tarea.id)
        if(respuesta.status === 200){
          const listaTareasActualizada = await leerTareasAPI()
          setTareas(listaTareasActualizada)
          Swal.fire({
            title: "Tarea eliminada",
            text: `La Tarea "${tarea.nombreTarea}" fue eliminada correctamente`,
            icon: "success"
          });
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: `La Tarea "${tarea.nombreTarea}" no fue eliminada, intente realizar esta operación en unos minutos`,
            icon: "error"
          });
        }
      }
    });
  }


    return (
        <>
        <tr>
          <td>{tarea.nombreTarea}</td>
          <td>{tarea.subtituloTarea}</td>
          <td>{tarea.descripcionTarea}</td>
          <td className="text-center">
          <Link variant="warning" className="me-lg-2 btn btn-dark mt-1" to={`/tarea/editar/${tarea.id}`}>
          <i className="bi bi-pencil-square"></i>
         </Link>
        <Button variant="mt-1 ms-3 bg-danger border-danger" onClick={borrarTarea}>
          <i className="bi bi-trash text-white"></i>
        </Button>
      </td>
        </tr>
        </>
    );
};

export default ItemTarea;