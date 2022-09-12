import { Link } from 'react-router-dom'
import { LoginContainer, SingIn, SingUp } from './styles'

export const Login = () => {
  return (
    <LoginContainer>
      <SingIn>
        <h2>Acesse sua conta</h2>
        <form action="">
          <label htmlFor="">E-mail / CPF ou CNPJ</label>
          <input type="text" name="login" id="login" />
          <label htmlFor="">Senha</label>
          <input type="text" name="password" id="password" />
          <button type="submit">Entrar</button>
        </form>
      </SingIn>
      <SingUp>
        <h2>Crie sua conta é rápido, fácil e gratuito!</h2>
        <Link to="/register">Criar uma conta</Link>
      </SingUp>
    </LoginContainer>
  )
}
