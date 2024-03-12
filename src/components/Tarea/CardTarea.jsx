import { Col } from 'react-bootstrap';
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
      </Card.Body>
    </Card>
    </Col>
        </>
    );
};

export default CardTarea;