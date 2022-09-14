import {
  FormSingIn,
  LoginContainer,
  SingIn,
  SingUp,
  SingUpButton,
} from './styles'

export const Login = () => {
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
          />
          <label htmlFor="">Senha</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
          <button type="submit">Entrar</button>
        </FormSingIn>
      </SingIn>
      <SingUp>
        <h2>Crie sua conta. É rápido, fácil e gratuito!</h2>
        <SingUpButton to="/user/register">Criar uma conta</SingUpButton>
      </SingUp>
    </LoginContainer>
  )
}
