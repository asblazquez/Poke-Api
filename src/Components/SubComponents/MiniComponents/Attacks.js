import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { RiBoxingFill } from 'react-icons/ri';
import { useState } from 'react';


export function Attacks(props) {
  
    const [Move, setMove] = useState([])
    var axios = require("axios").default;

    var isVisible = false;
    var lAttacks = []
    for (let index = 0; index < props.attak.length; index++) {
        lAttacks.push(props.attak[index].move.name)     
    }

    const getMoveData = async (name) => {
      try{
        const data = await axios.get(
          `https://pokeapi.co/api/v2/move/${name}/`
        )
        setMove(data.data)
        console.log(Move)
      }catch(e){
        console.error(e)
      }
    }

    const showMoves = () => {
        if(isVisible){
            document.getElementById('moves').style.visibility = 'hidden'
            isVisible = false
        } else {
            document.getElementById('moves').style.visibility = 'visible'
            isVisible = true
        }
    }

  return (
    <div className="mt-3 text-light">
        <Row className='justify-content-center bg-dark pt-3 pb-3 brTop-5'>
          <Col className='text-center'>
            <RiBoxingFill className='btnShiny' onClick={showMoves}/>
          </Col>
        </Row>
        <Row className='justify-content-center bg-dark pt-3 pb-3 brBottom-5' id='moves'>         
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th><RiBoxingFill/></th>
                  <th>Moves</th>
                </tr>
              </thead>
              <tbody>
                {lAttacks.map((item, index) => {
                  getMoveData(item)
                  return(
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{item}</td>
                    </tr>
                    )
                })}
              </tbody>
            </Table>
        </Row>
    </div>
  )
}
