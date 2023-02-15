import { usePokemon } from '../hooks/usePokemon'

export default function PokeCard ({ url }) {
  const { loading, pokemons } = usePokemon(url)

  return (
    <article className='flex justify-center border h-60 rounded-lg items-center'>
      {!loading &&
        <div>
          <img src={pokemons?.sprites.front_default} />
          <h1>{pokemons?.name}</h1>
          <div className='flex flex-row justify-center gap-6 mt-6'>
            {pokemons?.types.map((type, count) => (
              <p key={count}>{type.type.name}</p>
            ))}
          </div>
        </div>}

    </article>
  )
}
