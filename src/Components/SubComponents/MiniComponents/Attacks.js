import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { RiBoxingFill } from 'react-icons/ri';
import { Pager } from './Pager';

export function Attacks(props) {
    var isVisible = false;

    var lAttacks = []

    var pagerNums = 0

    const pager = (numItems) => { 
      if(numItems <= 10){
        pagerNums = 1
      } else if((numItems <= 20)){
        pagerNums = 2
      } else if((numItems <= 30)){
        pagerNums = 3
      } else if((numItems <= 40)){
        pagerNums = 4
      } else if((numItems <= 50)){
        pagerNums = 5
      } else if((numItems <= 60)){
        pagerNums = 6
      } else if((numItems <= 70)){
        pagerNums = 7
      } else if((numItems <= 80)){
        pagerNums = 8
      } else if((numItems <= 90)){
        pagerNums = 9
      } else if((numItems <= 100)){
        pagerNums = 10
      } else if((numItems <= 110)){
        pagerNums = 11
      } else if((numItems <= 120)){
        pagerNums = 12
      } else if((numItems <= 130)){
        pagerNums = 13
      }
      return pagerNums
    }

    for (let index = 0; index < props.attak.length; index++) {
        lAttacks.push(props.attak[index].move.name)     
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
                  return(
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{item}</td>
                    </tr>
                    )
                })}
              </tbody>
            </Table>
            <Pager num = {pager(lAttacks.length)}/>
        </Row>
    </div>
  )
}
