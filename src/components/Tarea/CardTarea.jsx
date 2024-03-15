import { Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const CardTarea = () => {
    return (
        <>
        <Col md={4} lg={3} className="mb-3">
     <Card>
      <Card.Body>
        <Card.Title>Hacer tarea de Computacion</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Ejercicios 1 a 10</Card.Subtitle>
        <Card.Text>
          Facet
        </Card.Text>
        <div className="text-center">
        <Button variant="warning" className="me-lg-2  btn btn-dark">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="mt-1 ms-3 bg-danger border-danger">
          <i className="bi bi-trash text-white"></i>
        </Button>
      </div>
      </Card.Body>
    </Card>
    </Col>
        </>
    );
};

export default CardTarea;