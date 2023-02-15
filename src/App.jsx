import './App.css'
import PokemonContainer from './components/PokemonContainer'
import { useLoad } from './hooks/useLoad'
import Search from './components/Search'

function App () {
  const { loading, handleLoad } = useLoad()

  handleLoad()

  return (
    <div className='App'>
      <Search />
      {!loading &&
        <>
          <PokemonContainer />
        </>}
    </div>
  )
}

export default App
