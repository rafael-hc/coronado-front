import { RegisterContainer } from './styles'

export const Register = () => {
  return (
    <RegisterContainer>
      <h1>Crie a sua conta</h1>

      <div>
        <h2>Acesse sua conta</h2>

        <div>
          <p>Pessoa Física</p>
          <p>Pessoa Jurídica</p>
        </div>

        <div>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Digite seu nome"
          />

          <label htmlFor="">Sobrenome</label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Digite seu sobrenome"
          />

          <label htmlFor="">E-mail</label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Digite seu e-mail"
          />

          <label htmlFor="">Celular</label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Digite seu DDD + Celular"
          />

          <label htmlFor="">Telefone - opcional</label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Digite seu DDD + Telefone"
          />

          <label htmlFor="">Sexo - opcional</label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Digite seu e-mail ou CPF/CNPJ"
          />

          <label htmlFor="">Data Nascimento</label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Digite seu CPF"
          />

          <label htmlFor="">Senha</label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Digite seu e-mail ou CPF/CNPJ"
          />

          <label htmlFor="">Confirmar Senha</label>
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

          <label htmlFor="">Confirmar Senha</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />

          <button type="submit">Cadastrar</button>
        </div>
      </div>
    </RegisterContainer>
  )
}
