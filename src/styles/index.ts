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
`

export const PageWrapper = styled.div`
    width: 1920px;
    margin: 0 auto;
`

export const Container = styled.div`
    width: 1024px;
    margin: 0 auto;
`

export default GlobalStyle