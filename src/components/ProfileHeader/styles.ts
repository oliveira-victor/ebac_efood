import styled from "styled-components";

import bgImage from '../../assets/images/pattern.png'
import { colors } from "../../styles/colors";
import { Link } from "react-router-dom";

export const ProfileHeader = styled.header`
    background-color: ${colors.secondaryColor};
    background-image: url(${bgImage});
    padding: 40px 0 66px;
`

export const ElementsContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    color: ${colors.primaryColor};
    font-size: 18px;
    font-weight: 900;
`

export const HomeLink = styled(Link)`
    color: ${colors.primaryColor};
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
`

export const Logo = styled.li`
    text-align: center;
`

export const CartLink = styled.li`
    text-align: end;
`