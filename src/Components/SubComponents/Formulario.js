import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Formulario(props) {
  return (
    <Form className='mt-3'>
        <Row className='justify-content-center' >
            <Col xs={4}>
            <Form.Group className="mb-3" controlId="form">
                <Form.Control type="text" placeholder={props.name} />
                <Form.Text className="text-muted">
                Introduce el nombre de un {props.name} o su id
                </Form.Text>
            </Form.Group>
            </Col>
            <Col xs={2}>
            <Button variant="primary" type="submit">
                Buscar {props.name}
            </Button>
            </Col>
        </Row>
    </Form>
  );
}