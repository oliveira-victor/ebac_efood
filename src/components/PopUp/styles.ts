import styled from "styled-components";
import { colors } from "../../styles/colors";
import { AddBtn } from "../Dish/styles";

export const PopUp = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContentBox = styled.div`
    background-color: ${colors.primaryColor};
    color: #fff;
    width: 1024px;
    padding: 32px;
    display: flex;
    gap: 24px;
    position: relative;

    @media (max-width: 1074px) {
        width: 94%;
    }

    @media (max-width: 767px) {
        display: block;
    }

    img {
        max-width: 280px;
    }

    p, span {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        margin-top: 16px;
        display: block;
    }

    button {
        display: block;
    }
`

export const CloseBtn = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-8px, 8px);
    cursor: pointer;
`

export const PopUpTitle = styled.h3`
    font-size: 18px;
    font-weight: 900;
`

export const PopUpBtn = styled(AddBtn)`
    margin-top: 16px;
    width: fit-content;
    padding: 4px 6px;
`