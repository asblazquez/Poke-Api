import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuth } from '../Api'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export function Formulario(props) {

  const [pokemon, setPokemon] = useState({
    name: ''
  })

  const handleChange = ({target: {name, value}}) => {
    setPokemon({...pokemon, [name]: value})
  }

  const { getPokemon } = useAuth()
  const { pokemonObj } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    try{
      getPokemon(pokemon.name)
      .then(() => prueba())
      .catch(error => {
        toast.error(error)
      })
    }catch (err){
      toast.error(err)
    }
  }

  const prueba = () => {
    debugger
    console.log(pokemonObj)
  }

  return (
    <Form className='mt-3'>
      <ToastContainer/>
        <Row className='justify-content-center' >
            <Col xs={4}>
            <Form.Group className="mb-3" controlId="form">
                <Form.Control type="text" name='name' placeholder={props.name} onChange={handleChange}/>
                <Form.Text className="text-muted">
                Introduce el nombre de un {props.name} o su id
                </Form.Text>
            </Form.Group>
            </Col>
            <Col xs={2}>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Buscar {props.name}
            </Button>
            </Col>
        </Row>
    </Form>
  );
}