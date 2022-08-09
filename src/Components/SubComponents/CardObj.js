import  Row  from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ImagenTipo } from './MiniComponents/ImagenTipo';
import { AiFillStar } from 'react-icons/ai';
import { useAuth } from '../Api';

export function CardObj(props) {

  const { getImgType } = useAuth()

  var PokemonImage = props.frontSprite
  
  var linkUrl = 'https://pokemon.fandom.com/es/wiki/' + props.name

  const setShiny = () => {
    PokemonImage === props.frontSprite ? PokemonImage = props.shinySprite : PokemonImage = props.frontSprite
    document.getElementById("pokemonImg").src = PokemonImage
  }

  return (
    <Row className='justify-content-center mt-3'>
      <Card style={{ width: '18rem' }} bg={'light'}>
        <div className='btnShiny notSelectable'>
          <AiFillStar title='Shiny' onClick={setShiny}/>
        </div>
        <Card.Img className='notSelectable' variant="top" src={PokemonImage} id='pokemonImg' />
        <Card.Body>
          <Card.Title className='titleTxt'>{props.name}</Card.Title>
          <Card.Text>
            {props.type.map((item, index) => {
               return <ImagenTipo url={getImgType(item.type.name)} title={item.type.name} key={index}/>
            })}
          </Card.Text>
          <Button variant="primary" href={linkUrl} >Wiki</Button>
        </Card.Body>
      </Card>
    </Row>  
  )
}
