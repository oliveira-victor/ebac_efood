import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ItemBox = styled.li`
min-height: 100px;
    background-color: ${colors.secondaryColor};
    padding: 8px;
    position: relative;
    display: flex;
    gap: 8px;

    img {
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translate(-8px, -8px);
        cursor: pointer;
    }
`

export const ItemImg = styled.div`
    width: 80px;
    height: 80px;
    background-size: cover;
    background-position: center;
`

export const ItemTitle = styled.h3`
    font-size: 18px;
    font-weight: 900;
    color: ${colors.primaryColor};
`

export const ItemPrice = styled.span`
    color: ${colors.primaryColor};
    font-size: 14px;
    font-weight: 400;
    display: block;
    margin-top: 16px;
`