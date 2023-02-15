import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { loadPokemons } from '../features/slice/pokemonSlice'
import { config } from '../../configPaginatae'

export function useLoad () {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)
  const [paginate, setPaginate] = useState(config.itemsPerPage)

  const handleLoad = (offset) => {
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=1280')
        .then(res => res.json())
        .then(json => dispatch(loadPokemons(json)))
        .then(setLoading(false))
    }, [])
  }

  const handleUpdate = (pag) => {
    const pagePressed = pag.event.target.innerText
    const paginate = pagePressed * config.itemsPerPage
    setPaginate(paginate)
  }
  return {
    loading,
    handleLoad,
    handleUpdate,
    paginate
  }
}
