import { createContext, useContext, useState } from 'react';

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error('No se ha encontrado el authProvider')
    return context
}

export function AuthProvider({children}) {

  const [pokemonObj, setPokemon] = useState(null)

  const [abilityObj, setAbility] = useState(null)

  const TIPOS = {
    normal: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/640px-Pok%C3%A9mon_Normal_Type_Icon.svg.png',
    poison: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/640px-Pok%C3%A9mon_Poison_Type_Icon.svg.png',
    grass: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/640px-Pok%C3%A9mon_Grass_Type_Icon.svg.png',
    electric: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/640px-Pok%C3%A9mon_Electric_Type_Icon.svg.png',
    ground:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/640px-Pok%C3%A9mon_Ground_Type_Icon.svg.png',
    flying:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/640px-Pok%C3%A9mon_Flying_Type_Icon.svg.png',
    ice:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/640px-Pok%C3%A9mon_Ice_Type_Icon.svg.png',
    rock:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/640px-Pok%C3%A9mon_Rock_Type_Icon.svg.png',
    bug:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/640px-Pok%C3%A9mon_Bug_Type_Icon.svg.png',
    psychic:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/640px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png',
    dark:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/640px-Pok%C3%A9mon_Dark_Type_Icon.svg.png',
    fighting:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/640px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png',
    steel:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/640px-Pok%C3%A9mon_Steel_Type_Icon.svg.png',
    fire:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/640px-Pok%C3%A9mon_Fire_Type_Icon.svg.png',
    fairy:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/640px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png',
    water:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/640px-Pok%C3%A9mon_Water_Type_Icon.svg.png',
    ghost:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/640px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png',
    dragon:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/640px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png',
  }

  const COLOR_TIPOS = {
    normal: 'grey',
    poison: 'rgb(212, 0, 255)',
    grass: 'green',
    electric: 'yellow',
    ground: 'rgb(159, 98, 0)',
    flying: 'rgb(94, 141, 199)',
    ice:  'rgb(145, 224, 255)',
    rock: 'rgb(71, 71, 71)',
    bug: 'rgb(106, 255, 0)',
    psychic: 'rgb(255, 0, 149)',
    dark: 'rgb(84, 55, 87)',
    fighting: 'rgb(255, 81, 0)',
    steel: 'rgb(123, 133, 137)',
    fire: 'orangered',
    fairy: 'rgb(255, 121, 244)',
    water: 'blue',
    ghost: 'rgb(91, 91, 91)',
    dragon: 'rgb(59, 0, 136)'
  }

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

  const getAbility = (ability) => {
    fetch(`https://pokeapi.co/api/v2/ability/${ability}/`)
    .then((res) => res.json())
    .then((data) => {
      setAbility(data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  const getImgType = (type) => {
    return TIPOS[type]
  }

  const getColorTypes = (type) => {
    return COLOR_TIPOS[type]
  }

  return (
      <authContext.Provider 
      value={{getPokemon, pokemonObj, 
              getImgType, getColorTypes,
              getAbility, abilityObj}}>
          {children}
      </authContext.Provider>
  )
}