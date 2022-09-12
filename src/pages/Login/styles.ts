import styled from 'styled-components'

export const LoginContainer = styled.main`
  max-width: 55rem;
  margin: 2rem auto 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

const LoginContent = styled.section`
  display: flex;
  flex-direction: column;
`
export const SingIn = styled(LoginContent)``
export const SingUp = styled(LoginContent)``
