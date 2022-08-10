import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import { CarouselElement } from '../SubComponents/CarouselElement';
import { ImagenTipo } from './MiniComponents/ImagenTipo';
import { MdCatchingPokemon } from 'react-icons/md';
import { GoInfo } from 'react-icons/go';
import { useAuth } from '../Api';

export function CardObj(props) {

  const { getImgType } = useAuth()
  const { getColorTypes } = useAuth()

  var linkUrl = 'https://pokemon.fandom.com/es/wiki/' + props.name

  const redirectToWiki = () => {
    window.open(linkUrl)
  }

  return (
      <div className='carta mt-3' style={{ backgroundColor: getColorTypes(props.type[0].type.name) }}>
        <Row className='cartaHeader'>
          <Col className='titleTxt' xs={10}>
            {props.name}
          </Col>
        </Row>
        <div className='cartaImg'>
          <CarouselElement sprites = {props.sprites}/>
        </div>
        <Row className='cartaBodyTypes'>
          <Col className='imgType'>
          {props.type.map((item, index) => {
                return <ImagenTipo url={getImgType(item.type.name)} title={item.type.name} key={index}/>
          })}
          </Col>         
        </Row>
        <Row className='justify-content-center'>
          <Col xs={6} className='align-content-end text-center'>
              <MdCatchingPokemon className='pokedexIcon'/> {props.numPokedex}
          </Col>
          <Col xs={6} className='text-center'>
            <GoInfo type='button' onClick={redirectToWiki} className='notSelectable'/>
          </Col>
        </Row>
      </div>
  )
}