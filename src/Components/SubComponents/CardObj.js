import  Row  from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ImagenTipo } from './MiniComponents/ImagenTipo';

export function CardObj(props) {

  const TIPOS = {
    normal: 'https://static.wikia.nocookie.net/the-episodes-and-movie-yveltal-and-more/images/3/3d/Normal.jpg',
    poison: 'https://static.wikia.nocookie.net/the-episodes-and-movie-yveltal-and-more/images/0/05/Poison.png',
    grass: 'https://static.wikia.nocookie.net/the-episodes-and-movie-yveltal-and-more/images/c/cd/Grass.jpeg'
  }

  var linkUrl = 'https://pokemon.fandom.com/es/wiki/' + props.name

  return (
    <Row className='justify-content-center mt-3'>
      <Card style={{ width: '18rem' }} className='pokemonCard' >
        <Card.Img variant="top" src={props.frontSprite} />
        <Card.Body>
          <Card.Title className='titleTxt'>{props.name}</Card.Title>
          <Card.Text>
            {props.type.map((item, index) => {
               return <ImagenTipo url={TIPOS[item.type.name]} key={index}/>
            })}
          </Card.Text>
          <Button variant="primary" href={linkUrl} >Wiki</Button>
        </Card.Body>
      </Card>
    </Row>  
  )
}
