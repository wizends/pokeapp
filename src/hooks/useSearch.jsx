import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { loadPokemons } from '../features/slice/pokemonSlice'

export function useSearch () {
  const dispatch = useDispatch()

  const handleSearch = useCallback((searchData) => {
    dispatch(loadPokemons(searchData))
  })

  return {
    handleSearch
  }
}
