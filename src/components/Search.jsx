import { useSelector } from 'react-redux'
import { useSearch } from '../hooks/useSearch'

export default function Search () {
  const allPokemons = useSelector(state => state.pokemons)[0]?.results
  const { handleSearch } = useSearch()

  const handleOnChange = (e) => {
    const search = allPokemons.filter(pokemon => pokemon.name.match(e.target.value))
    handleSearch({ count: search.length, next: null, previus: null, results: search })
  }

  return (
    <form className='mb-14'>
      <input className='w-4/12 ' onChange={handleOnChange} placeholder='Buscar...' />
    </form>
  )
}
