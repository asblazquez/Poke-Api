import  Row  from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function CardObj(props) {
  var tipoTxt = "";
  var cont = 1;
  var typeImage;
  const TIPOS = {
    normal: 'https://static.wikia.nocookie.net/the-episodes-and-movie-yveltal-and-more/images/3/3d/Normal.jpg',
    poison: 'https://static.wikia.nocookie.net/the-episodes-and-movie-yveltal-and-more/images/0/05/Poison.png',
    grass: 'https://static.wikia.nocookie.net/the-episodes-and-movie-yveltal-and-more/images/c/cd/Grass.jpeg'
  }

  var linkUrl = 'https://pokemon.fandom.com/es/wiki/' + props.name

  props.type.forEach(element => {
    tipoTxt += 'Tipo ' + cont
    typeImage = TIPOS[element.type.name]
    cont++
  });

  return (
    <Row className='justify-content-center mt-3'>
      <Card style={{ width: '18rem' }} className='pokemonCard' >
        <Card.Img variant="top" src={props.frontSprite} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {tipoTxt}
            <img
              src={typeImage}
              width="80"
              height="30"
              alt='Imagen de tipo'
            />
          </Card.Text>
          <Button variant="primary" href={linkUrl} >Wiki</Button>
        </Card.Body>
      </Card>
    </Row>  
  )
}
