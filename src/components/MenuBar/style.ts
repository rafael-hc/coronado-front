import styled from "styled-components";

export const MenuBarContainer = styled.nav`
    width: 100%;
    max-width: 100vw;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    background-color: ${props => props.theme.secondary};
    
    a {
        color: ${props => props.theme.text};

        &:hover{
            color: ${props => props.theme.black};
        }
    }

`