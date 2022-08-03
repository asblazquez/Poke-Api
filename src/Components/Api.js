


export function getPokemon(pokemon){
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    }) 
    .catch(err => {
          console.log(err);
    })
}