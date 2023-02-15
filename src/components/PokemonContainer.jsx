import { useSelector } from 'react-redux'
import PokeCard from './PokeCard'
import Pagination from './Pagination'
import { useLoad } from '../hooks/useLoad'
import { config } from '../../configPaginatae'

export default function PokemonContainer () {
  const { handleUpdate, paginate, loading } = useLoad()
  const data = useSelector(state => state.pokemons)
  const lastData = data[data.length - 1]

  const pags = Math.ceil(lastData?.count / config.itemsPerPage) || 0
  const pokemonsToShow = lastData?.results?.slice(paginate - config.itemsPerPage, paginate)

  return (
    <>

      <section className='grid grid-cols-fillGrid gap-9'>
        {loading &&
            pokemonsToShow?.map(pokemon => (
              <PokeCard key={pokemon.name} url={pokemon.url} />
            ))}
      </section>
      <Pagination handleUpdate={handleUpdate} pags={pags} />

    </>

  )
}
