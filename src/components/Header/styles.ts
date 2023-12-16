import styled from "styled-components";
import { colors } from "../../styles/colors";

import bgImage from '../../assets/images/pattern.png'

export const Header = styled.header`
    background-color: ${colors.secondaryColor};
    background-image: url(${bgImage});
    width: 100%;
    height: 384px;
    text-align: center;
`

export const Title = styled.img`
    margin-top: 64px;
`

export const Text = styled.p`
    font-size: 36px;
    font-weight: 900;
    color: ${colors.primaryColor};
    margin-top: 138px;
`