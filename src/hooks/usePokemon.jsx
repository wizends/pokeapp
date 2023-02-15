import { useState, useEffect } from 'react'

export function usePokemon (url) {
  const [pokemons, setPokemons] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setPokemons(json))
      .then(setLoading(false))
  }, [])

  return {
    pokemons,
    loading
  }
}
