import { Button } from "react-bootstrap";

const ItemTarea = ({tarea}) => {
    return (
        <>
        <tr>
          <td>{tarea.nombreTarea}</td>
          <td>{tarea.subtituloTarea}</td>
          <td>{tarea.descripcionTarea}</td>
          <td className="text-center">
        <Button variant="warning" className="me-lg-2  btn btn-dark">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="mt-1 ms-3 bg-danger border-danger">
          <i className="bi bi-trash text-white"></i>
        </Button>
      </td>
        </tr>
        </>
    );
};

export default ItemTarea;