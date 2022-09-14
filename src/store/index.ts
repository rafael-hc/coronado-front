import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { productsSlice } from './reducers/productSlice'
import { authSlice } from './reducers/loginSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    users: authSlice.reducer,
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
