import { getPokemon } from './Api';
import Clock from './Clock';




export function Home() {

  const { getPokemon } = getPokemon();

  const prueba = (e) => {
    e.preventDefault()
    try{
      var pokemon = getPokemon('ditto')
    }catch (err){
    }
  }

  return (
    <div className="container-fluid">
      <Clock/>
      <button className='btn btn-secondary' type='button' onClick={prueba}>Prueba</button>
    </div>
  )
}