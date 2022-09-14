import {
  ButtonForm,
  DadosPessoaisForm,
  EnderecoForm,
  RegisterContainer,
  SenhaForm,
  TipoPessoa,
} from './styles'

export const Register = () => {
  return (
    <RegisterContainer>
      <h1>Crie a sua conta</h1>
      <TipoPessoa>
        <input
          type="radio"
          name="pessoa-fisica"
          id="pessoa-fisica"
          checked
          value="s1"
        />
        <label htmlFor="s1">Pessoa Física</label>
        <input
          type="radio"
          name="pessoa-fisica"
          id="pessoa-fisica"
          value="s2"
        />
        <label htmlFor="s2">Pessoa Jurídica</label>
      </TipoPessoa>

      <DadosPessoaisForm>
        <p>Dados Pessoais</p>
        <label htmlFor="">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite seu nome"
          required
        />

        <label htmlFor="">Sobrenome</label>
        <input
          type="text"
          name="sobrenome"
          id="sobrenome"
          placeholder="Digite seu sobrenome"
          required
        />

        <label htmlFor="">CPF</label>
        <input
          type="number"
          name="cpf"
          id="cpf"
          placeholder="Digite seu CPF"
          required
        />

        <label htmlFor="">Celular</label>
        <input
          type="number"
          name="celular"
          id="celular"
          placeholder="Digite seu DDD + Celular"
          required
        />

        <label htmlFor="">Data Nascimento</label>
        <input type="date" name="nascimento" id="nascimento" />
      </DadosPessoaisForm>

      <EnderecoForm>
        <p>Endereço</p>
        <label htmlFor="">CEP</label>
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          placeholder="Digite seu CEP"
          required
        />

        <label htmlFor="">Logradouro</label>
        <input
          type="text"
          name="logradouro"
          id="logradouro"
          placeholder="Digite seu logradouro"
        />

        <label htmlFor="">Número</label>
        <input
          type="number"
          name="numero"
          id="numero"
          placeholder="Número do endereço"
          required
        />

        <label htmlFor="">Complemento</label>
        <input
          type="text"
          name="complemento"
          id="complemento"
          placeholder="Apartamento, bloco"
        />

        <label htmlFor="">Bairro</label>
        <input
          type="text"
          name="bairro"
          id="bairro"
          placeholder="Digite seu bairro"
        />

        <label htmlFor="">Cidade</label>
        <input
          type="text"
          name="cidade"
          id="cidade"
          placeholder="Digite sua cidade"
        />

        <label htmlFor="">Estado</label>
        <input
          type="text"
          name="estado"
          id="estado"
          placeholder="Digite seu estado"
        />
      </EnderecoForm>

      <SenhaForm>
        <label htmlFor="">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          required
        />
        <label htmlFor="">Senha</label>
        <input
          type="password"
          name="login"
          id="login"
          placeholder="Digite sua senha"
          required
        />
        <label htmlFor="">Confirmar Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Confirme sua senha"
          required
        />
      </SenhaForm>

      <ButtonForm>
        <p>Termos e condições</p>
        <button type="submit">Cadastrar</button>
      </ButtonForm>
    </RegisterContainer>
  )
}
