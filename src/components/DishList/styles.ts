import styled from "styled-components";
import { colors } from "../../styles/colors";
import { ProceedBtn } from "../../styles";

export const DishList = styled.section`
    padding-top: 64px;
    padding-bottom: 120px;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 32px;
    }
`

export const DishContainer = styled.li`
    max-width: 320px;
    background-color: ${colors.primaryColor};
    padding: 8px;
    color: ${colors.secondaryColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
        width: 100%;
        height: 167px;
        object-fit: cover;
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

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    display: none;
    align-items: center;
    justify-content: center;

    &.visible {
        display: flex;
    }

    .overlay {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        position: fixed;
        top: 0;
        bottom: 0;
    }
`

export const ContentBox = styled.div`
    background-color: ${colors.primaryColor};
    color: #fff;
    width: 1024px;
    padding: 32px;
    display: flex;
    gap: 24px;
    position: relative;
    z-index: 1;

    @media (max-width: 1074px) {
        width: 94%;
    }

    @media (max-width: 767px) {
        display: block;
    }

    img {
        max-width: 280px;
        object-fit: cover;
    }

    p, span {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        margin-top: 16px;
        display: block;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

export const ModalBtn = styled(ProceedBtn)`
    margin-top: 16px;
    width: fit-content;
    padding: 4px 6px;
`