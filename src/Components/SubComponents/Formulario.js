import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuth } from '../Api';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export function Formulario(props) {


  const [pokemon, setPokemon] = useState({
    name: ''
  })

  const onChangeInput = ({target: {name, value}}) => {
    setPokemon({...pokemon, [name]: value})
  }

  const { getPokemon } = useAuth()

  const buscarPokemon = (e) => {
    e.preventDefault()
    try{
      getPokemon(pokemon.name.toLowerCase())
    }catch (err){
      toast.error(err)
    }
  }

  return (
    <div className='mt-3'>
      <ToastContainer/>
        <Row className='justify-content-center bg-dark pt-3 pb-3 br-5'>        
            <Col xs={12} md={4}>
              <Form>
                <Form.Group className="mb-3" controlId="form">
                    <Form.Control type="text" name='name' placeholder={props.name} onChange={onChangeInput}/>
                    <Form.Text className="text-light notSelectable">
                      Introduce el nombre de un {props.name} o su id
                    </Form.Text>
                </Form.Group>
              </Form>
            </Col>
            <Col xs={12} md={2}>
            <Button variant="primary" type="submit" onClick={buscarPokemon}>
                Buscar {props.name}
            </Button>
            </Col>
        </Row>
    </div>
  );
}