import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ImagenTipo } from './MiniComponents/ImagenTipo';
import { AiFillStar } from 'react-icons/ai';
import { MdCatchingPokemon } from 'react-icons/md';
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
      <div className='carta mt-3'>
        <Row className='cartaHeader'>
          <Col className='titleTxt' xs={10}>
            {props.name}
          </Col>
          <Col xs={1}>
          <AiFillStar title='Shiny' onClick={setShiny} className='notSelectable'/>
          </Col>
        </Row>
        <div className='cartaImg'>
          <Card.Img className='notSelectable' variant="top" src={PokemonImage} title={props.name} id='pokemonImg' />
        </div>
        <Row className='cartaBodyTypes'>
          <Col className='imgType'>
          {props.type.map((item, index) => {
                return <ImagenTipo url={getImgType(item.type.name)} title={item.type.name} key={index}/>
          })}
          </Col>         
        </Row>
        <Row className='justify-content-center'>
          <Col xs={7} className='align-content-end'>
              <MdCatchingPokemon className='pokedexIcon'/> {props.numPokedex}
          </Col>
          <Col xs={3}>
            <Button variant="primary" href={linkUrl} >Wiki</Button>
          </Col>
        </Row>
      </div>
  )
}