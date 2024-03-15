import { Button } from "react-bootstrap";

const ItemTarea = () => {
    return (
        <>
        <tr>
          <td>Hacer Tarea de Computacion</td>
          <td>Ejercicio 1 a 10</td>
          <td>Facet</td>
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