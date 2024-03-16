import { Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const CardTarea = ({tarea}) => {

    return (
        <>
        <Col md={4} lg={3} className="mb-3 cards">
     <Card>
      <Card.Body className='card'>
        <Card.Title>{tarea.nombreTarea}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{tarea.subtituloTarea}</Card.Subtitle>
        <Card.Text>
        {tarea.descripcionTarea}
        </Card.Text>
      </Card.Body>
      <div className="text-center mb-0 my-2">
      <Link variant="warning" className="me-lg-2 btn btn-dark mt-1 mb-2" to={`/tarea/editar/${tarea.id}`}>
          <i className="bi bi-pencil-square"></i>
         </Link>
      </div>
    </Card>
    </Col>
        </>
    );
};

export default CardTarea;