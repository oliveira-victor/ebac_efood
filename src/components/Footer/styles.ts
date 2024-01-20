import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Footer = styled.footer`
    background-color: ${colors.secondaryColor};
    padding: 40px;
`

export const FooterContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    color: ${colors.primaryColor};
    text-align: center;
`

export const SocialIcons = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: center;
    gap: 8px;

    img {
        width: 24px;

    }
`

export const FooterTxt = styled.p`
    margin-top: 80px;
    font-size: 10px;
`