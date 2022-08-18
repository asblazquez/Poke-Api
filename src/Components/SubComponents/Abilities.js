import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillLightningFill } from 'react-icons/bs';

export function Abilities(props) {

  var lNames = []

  for (let index = 0; index < props.ability.length; index++) {
    lNames.push(props.ability[index].ability.name)
  }
  
  return (
    <div className="mt-3 text-light">
        <Row className='justify-content-center bg-dark pt-3 pb-3 brTop-5'>
          <Col className='text-center'>
            <BsFillLightningFill className='btnShiny'/>
          </Col>
        </Row>
        <Row className='justify-content-center bg-dark pt-3 pb-3 brBottom-5'>         
          {lNames.map((item, index) => {
            return <Col md={2} className='text-center' key={index}> {item} </Col>
          })}
        </Row>
    </div>
  )
}