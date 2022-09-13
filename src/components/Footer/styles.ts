import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme['gray-400']};

  box-sizing: border-box;

  max-width: 100%;
  height: 12rem;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr;
  gap: 2rem;
`

export const SobreNos = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    display: flex;
  }
`

export const Contato = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;

  display: grid;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    display: flex;
  }

  .iconesRedeSocial {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const TrabalheConosco = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  a {
    display: flex;
  }
`

export const RedeSocial = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;

  display: grid;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    display: flex;
  }

  .iconesRedeSocial {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
