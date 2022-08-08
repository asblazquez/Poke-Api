import  Row  from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function CardObj(object) {
  return (
    <Row className='justify-content-center mt-3'>
      <Card style={{ width: '18rem' }} className='pokemonCard' >
        <Card.Img variant="top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" />
        <Card.Body>
          <Card.Title>{object.name}</Card.Title>
          <Card.Text>
            Texto sobre bulbasur
          </Card.Text>
          <Button variant="primary" href='https://pokemon.fandom.com/es/wiki/bulbasur'>Wiki</Button>
        </Card.Body>
      </Card>
    </Row>  
  )
}
