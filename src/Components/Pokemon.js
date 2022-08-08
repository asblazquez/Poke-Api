import Container from 'react-bootstrap/Container';
import { Formulario } from './SubComponents/Formulario';
import { useAuth } from './Api'
//import { useEffect } from 'react';
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
