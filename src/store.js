import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './features/slice/pokemonSlice'

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer
  }
})
