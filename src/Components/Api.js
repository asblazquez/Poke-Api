import { useState } from 'react'

//const [pokemon, setPokemon] = useState([])

function traePokemon(){
  fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  }) 
  .catch(err => {
        console.log(err);
  }) 
}

traePokemon()

const Api = () => {
  return (
    <div className=" container text-center w-25 mt-4">
        <form>
            <input className="form-control" type="text" placeholder="Pokemon..."/>
            <button type="submit" className="mt-2 btn btn-primary">Buscar</button>
        </form>
        <div className="pokemon-container mt-4"> 
            
        </div>
    </div>
  )
}

export default Api