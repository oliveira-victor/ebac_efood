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
        max-width: 1024px;
        margin: 0 auto;
        
        @media (max-width: 1054px) {
            padding-left: 8px;
            padding-right: 8px;
        }
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

export const FormTitle = styled.h3`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
    color: ${colors.secondaryColor};
`

export const ButtonsContainer = styled.div`
    margin-top: 16px;
`

export const DoubleGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 34px;
`

export const ProceedBtn = styled(Button)`
    min-height: 24px;
    width: 100%;
    margin-top: 8px;
    background-color: ${colors.secondaryColor};
    color: ${colors.primaryColor};
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.secondaryColor};
`

export default GlobalStyle