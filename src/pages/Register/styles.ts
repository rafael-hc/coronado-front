import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const RegisterContainer = styled.main`
  max-width: 100%;
  //height: 50rem;
  margin: 2rem auto 0;
  background-color: ${(props) => props.theme.white};

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3rem 1fr;
  gap: 2rem;

  //border-bottom: solid black 1px;
`

const LoginContent = styled.section`
  display: flex;
  flex-direction: column;
`
export const SingIn = styled(LoginContent)`
  grid-column-start: 1;
  grid-row-start: 2;
  padding: 1rem;

  border-radius: 8px;

  background-color: ${(props) => props.theme['gray-400']};
`

export const SingUp = styled(LoginContent)`
  grid-column-start: 2;
  grid-row-start: 2;

  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const FormSingIn = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    padding: 0.5rem;
    border: none;

    border-radius: 8px;
  }

  button {
    height: 2.5rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.white};
    cursor: pointer;
  }
`

export const SingUpButton = styled(Link)`
  height: 2.5rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.white};
`
