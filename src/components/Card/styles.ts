import styled from 'styled-components'

export const CardContainer = styled.article`
  max-width: 11rem;
  /* max-height: 15rem;
  height: 100%; */
  padding: 0.625rem;
  border-radius: 6px;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.47);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.47);
`

export const CardContent = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
`

export const ImageContainer = styled.div`
  width: 9rem;
  height: 9rem;

  img {
    width: 100%;
  }
`

export const CardFooter = styled.footer`
  min-height: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 0.875rem;

  /* span {
    display: block;
  } */
`
