import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    li{
        list-style: none;
    }
    
    a{
        text-decoration: none;
    }

    /* :focus{
            outline: 0;
            box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
        } */

    a, body{
        color: ${(props) => props.theme['gray-600']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font: 400 1rem Roboto, sans-serif;
    }

    button {
        background: transparent;
        border: none;
        line-height: 0;
    }
`

export const Container = styled.div`
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  /* padding: 1rem; */
`
