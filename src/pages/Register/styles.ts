// import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const RegisterContainer = styled.main`
  max-width: 55rem;
  height: auto;
  margin: 2rem auto;
  background-color: ${(props) => props.theme.white};

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3rem 1fr;
  gap: 2rem;
  padding: 2rem;
`
export const TipoPessoa = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  padding: 1rem;
  height: 3rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme['gray-400']};
`

export const DadosPessoaisForm = styled.div`
  grid-column-start: 1;
  grid-row-start: 3;
  padding: 1rem;

  border-radius: 8px;

  background-color: ${(props) => props.theme['gray-400']};
  display: grid;
  gap: 0.5rem;
`

export const EnderecoForm = styled.div`
  grid-column-start: 2;
  grid-row-start: 3;
  padding: 1rem;

  border-radius: 8px;

  background-color: ${(props) => props.theme['gray-400']};
  display: grid;
  gap: 0.5rem;
`

export const SenhaForm = styled.div`
  grid-column-start: 1;
  grid-row-start: 4;
  padding: 1rem;

  border-radius: 8px;

  background-color: ${(props) => props.theme['gray-400']};
  display: grid;
  gap: 0.5rem;
`

export const ButtonForm = styled.div`
  grid-column-start: 2;
  grid-row-start: 4;
  padding: 1rem;

  button {
    height: 2.5rem;
    width: 100%;
    border-radius: 8px;

    display: flex;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.white};
  }
`
