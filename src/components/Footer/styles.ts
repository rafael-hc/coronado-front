import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 15rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.footer};

  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`
