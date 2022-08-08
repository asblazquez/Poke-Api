import { createContext, useContext, useState } from 'react';

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error('No se ha encontrado el authProvider')
    return context
}

export function AuthProvider({children}) {

  const [pokemonObj, setPokemon] = useState(null)


  const getPokemon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => res.json())
    .then((data) => {
      setPokemon(data)
    }) 
    .catch(err => {
          console.log(err);
    })
  }

  return (
      <authContext.Provider value={{getPokemon, pokemonObj}}>
          {children}
      </authContext.Provider>
  )
}