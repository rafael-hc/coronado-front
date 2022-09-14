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

  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;

  p {
    text-align: center;
    justify-content: center;
    font-size: 0.7rem;
    grid-column-start: 2;
    grid-row-start: 3;
  }
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
    &:hover {
      color: ${(props) => props.theme.secondary};
    }
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
    &:hover {
      color: ${(props) => props.theme.secondary};
    }
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
    &:hover {
      color: ${(props) => props.theme.secondary};
    }
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
    &:hover {
      color: ${(props) => props.theme.secondary};
    }
  }

  .iconesRedeSocial {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
