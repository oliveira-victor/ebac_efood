import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
`

export const CartContainer = styled.div`
    width: 360px;
    height: 100%;
    padding: 32px 8px;
    position: fixed;
    right: 0;
    top: 0;
    background-color: ${colors.primaryColor};
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