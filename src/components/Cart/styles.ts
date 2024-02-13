import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Background = styled.div`
    display: none;

    &.isOpen {
        display: flex;
    }
`

export const CartOverlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`

export const CartContainer = styled.aside`
    width: 360px;
    height: 100%;
    padding: 32px 8px;
    position: fixed;
    right: 0;
    top: 0;
    background-color: ${colors.primaryColor};
    z-index: 1;
`

export const ItemsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Total = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.secondaryColor};
`

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

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 228px auto;
    gap: 30px;
`

export const Form = styled.form`
    font-size: 14px;
    font-weight: 700;
    color: ${colors.secondaryColor};

    input {
        width: 100%;
        height: 32px;
        background-color: ${colors.secondaryColor};
        color: #4B4B4B;
        font-size: 14px;
        font-weight: 700;
        padding: 8px;
        margin-bottom: 8px;
        outline-color: transparent;
        border: 2px solid transparent;

        &.error {
            border: 2px solid red;
        }
    }
`

export const Label = styled.label`
    margin-bottom: 8px;
    display: block;
`