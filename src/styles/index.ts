import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${colors.background};
    }

    ul {
        list-style: none;
    }

    .container {
        width: 1024px;
        margin: 0 auto;
    }
`

export const PageWrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
`

export const Button = styled.button`
    font-size: 12px;
    font-weight: 700;
    background-color: ${colors.primaryColor};
    color: ${colors.secondaryColor};
    border: none;
`

export default GlobalStyle