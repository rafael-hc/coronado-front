import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LoginContainer = styled.main`
  max-width: 55rem;
  margin: 2rem auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3rem 1fr;
  gap: 2rem;
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
  gap: 1.5rem;
`

export const FormSingIn = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;

  button {
    height: 2.5rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.white};
    cursor: pointer;
  }
`

export const FieldContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  border: none;
  position: relative;

  input {
    padding: 0.5rem;
    border: none;
    margin: 0.25rem 0 1.5rem;

    border-radius: 8px;
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

export const InputError = styled.span`
  display: block;
  position: absolute;
  bottom: 0rem;
  right: 0;
  font-size: 0.825rem;

  color: ${(props) => props.theme.danger};
`
