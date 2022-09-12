import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { productsSlice } from './reducers/productSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
