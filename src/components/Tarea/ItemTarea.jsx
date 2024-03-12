import { Button } from "react-bootstrap";

const ItemTarea = () => {
    return (
        <>
        <tr>
          <td>1</td>
          <td>Hacer Tarea de Computacion</td>
          <td>Ejercicio 1 a 10</td>
          <td>Facet</td>
          <td >
          <div className="d-flex">
    <Button variant="warning" className="me-lg-2 btn btn-dark">
          <i className="bi bi-pencil-square"></i>
    </Button>
    <Button className="mt-1 ms-3 bg-danger border-danger">
    <i class="bi bi-trash3 text-white"></i>
    </Button>
    </div>
          </td>
        </tr>
        </>
    );
};

export default ItemTarea;