import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../services/api'
import { IUser } from '../../utils/interfaces/userInterface'

export const authSlice = createSlice({
  name: 'users',
  initialState: { loading: true, success: false } as IUser,
  reducers: {
    success: (state, { payload }: PayloadAction<any>) => {
      console.log(payload)
      return {
        ...state,
        loading: false,
        success: true,
        userToken: payload.token,
      }
    },
    error: (state, { payload }: PayloadAction<string>) => {},
  },
})

export const { success, error } = authSlice.actions

export const authenticateUser =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      const authData = await api.post('/users/login', { email, password })
      dispatch(success(authData.data))
    } catch (e: any) {
      console.log('erro: ', e.response.data.message)
      dispatch(error(e))
    }
  }
