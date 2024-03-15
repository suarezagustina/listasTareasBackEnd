import { Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

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
        <Button variant="warning" className="mb-2 me-lg-2 btn btn-dark">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="mt-1 ms-3 bg-danger border-danger">
          <i className="bi bi-trash text-white"></i>
        </Button>
      </div>
    </Card>
    </Col>
        </>
    );
};

export default CardTarea;