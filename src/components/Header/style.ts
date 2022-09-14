import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 100px;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.primary};

  img {
    width: 120px;
  }
`

export const LadoEsquerdo = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
`

export const LadoDireito = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    gap: 8px;

    height: 40px;

    border-radius: 6px;

    background-color: ${(props) => props.theme.white};
  }
`

export const SearchBar = styled.div`
  width: 100%;
  max-width: 600px;
  height: 40px;
  position: relative;

  input {
    width: 100%;
    height: 100%;

    padding: 0 16px;

    border: none;
    border-radius: 6px;
  }

  button {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    top: 0;
    right: 0;
    &:hover {
      color: ${(props) => props.theme.primary};
      cursor: pointer;
    }
  }
`
