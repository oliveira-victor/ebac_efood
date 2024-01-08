import styled from "styled-components";
import { colors } from "../../styles/colors";

export const DishContainer = styled.div`
    max-width: 320px;
    background-color: ${colors.primaryColor};
    padding: 8px;
    color: ${colors.secondaryColor};

    img {
        width: 100%;
    }
`

export const DishTitle = styled.h4`
    font-size: 16px;
    font-weight: 900;
    margin-top: 8px;
`

export const DishDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 8px;
`