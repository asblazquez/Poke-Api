import Container from 'react-bootstrap/Container';
import { Formulario } from './SubComponents/Formulario';
import { useAuth } from './Api'
import { CardObj } from './SubComponents/CardObj';

export function Pokemon() {

  const { pokemonObj } = useAuth()
  if(pokemonObj){
    return (
      <Container className='containerMain'>
          <Formulario name = 'Pokemon'/>
          <CardObj 
          name = {pokemonObj.name}
          frontSprite = {pokemonObj.sprites.front_default}
          type = {pokemonObj.types}
          shinySprite = {pokemonObj.sprites.front_shiny}
          numPokedex = {pokemonObj.game_indices[0].game_index}
          />
      </Container>
    )
  } else{
    return (
      <Container className='containerMain'>
          <Formulario name = 'Pokemon'/>
      </Container>

    )
  }
}
