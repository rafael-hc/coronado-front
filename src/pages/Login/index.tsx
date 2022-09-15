import { authenticateUser } from '../../store/reducers/loginSlice'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import {
  FieldContainer,
  FormSingIn,
  InputError,
  LoginContainer,
  SingIn,
  SingUp,
  SingUpButton,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks'

const loginSchema = z.object({
  email: z.string().email({ message: 'Digite um e-mail válido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter pelo menos 6 caracteres' }),
})

type loginFormData = z.infer<typeof loginSchema>

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({ resolver: zodResolver(loginSchema) })

  const handleLogin = ({ email, password }: loginFormData) => {
    dispatch(authenticateUser({ email, password }))
    navigate('/')
  }

  return (
    <LoginContainer>
      <h1>Acessar ou criar conta</h1>
      <SingIn>
        <h2>Acesse sua conta</h2>
        <FormSingIn onSubmit={handleSubmit(handleLogin)}>
          <FieldContainer>
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              id="login"
              placeholder="Digite seu e-mail..."
              {...register('email')}
            />
            {errors.email?.message && (
              <InputError>{String(errors.email?.message)}</InputError>
            )}
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha..."
              {...register('password')}
            />
            {errors.password?.message && (
              <InputError>{String(errors.password?.message)}</InputError>
            )}
          </FieldContainer>
          <button type="submit">Entrar</button>
        </FormSingIn>
      </SingIn>
      <SingUp>
        <h2>Crie sua conta é rápido, fácil e gratuito!</h2>
        <p>
          Com a sua conta da você tem acesso a Ofertas exclusivas, descontos,
          acompanhar os seus pedidos e muito mais!
        </p>
        <SingUpButton to="/user/register">Criar uma conta</SingUpButton>
      </SingUp>
    </LoginContainer>
  )
}
