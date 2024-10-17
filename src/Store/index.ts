import { configureStore } from '@reduxjs/toolkit'
import acoesSliceReducer from './contatoSlice'
import FiltroSliceReducer from './filtroSlice'

const store = configureStore({
  reducer: {
    acao: acoesSliceReducer,
    filtro: FiltroSliceReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
