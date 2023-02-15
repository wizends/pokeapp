import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    loadPokemons: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { loadPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer