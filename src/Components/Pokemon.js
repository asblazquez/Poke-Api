import Container from 'react-bootstrap/Container';
import { Formulario } from './SubComponents/Formulario';
import { CardObj } from './SubComponents/CardObj';

export function Pokemon() {
  return (
    <Container className='containerMain'>
        <Formulario name = 'Pokemon'/>
        <CardObj/>
    </Container>
  )
}
