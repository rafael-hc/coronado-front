import { useState } from 'react'
import {
  FormSingIn,
  LoginContainer,
  SingIn,
  SingUp,
  SingUpButton,
} from './styles'

export const Login = () => {
  const [number, setNumber] = useState('')
  let numero = ''
  return (
    <LoginContainer>
      <h1>Acessar ou criar conta</h1>
      <SingIn>
        <h2>Acesse sua conta</h2>
        <FormSingIn action="">
          <label htmlFor="">E-mail / CPF ou CNPJ</label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Digite seu e-mail ou CPF/CNPJ"
            onChange={(e) => setNumber(e.target.value)}
          />
          <label htmlFor="">Senha</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            onChange={(e) => {
              numero = e.target.value
              console.log(numero)
            }}
          />
          <button type="submit">Entrar</button>
        </FormSingIn>
      </SingIn>
      <SingUp>
        <h2>Crie sua conta é rápido, fácil e gratuito!</h2>
        <SingUpButton to="/register">Criar uma conta</SingUpButton>
      </SingUp>
      <div>
        <p>{`Variável de estado: ${number}`}</p>
        <p>{`Variável normal: ${numero}`}</p>
      </div>
    </LoginContainer>
  )
}
