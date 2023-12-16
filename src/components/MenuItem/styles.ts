import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Button } from "../../styles";

export const Item = styled.div`
    max-width: 472px;
    border: 1px solid ${colors.primaryColor};
`

export const ItemImg = styled.div`
    width: 100%;
    height: 217px;
    background-size: cover;
`

export const ItemTags = styled.div`
    display: flex;
    justify-content: end;
    padding: 16px;
`

export const Tag = styled(Button)`
    margin-left: 8px;
    font-size: 12px;
    padding: 6px 4px;
`

export const ItemInfoContainer = styled.div`
    padding: 8px;
    color: ${colors.primaryColor};
`

export const ItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 700;

    div {
        display: flex;
        gap: 8px;
    }
`

export const ItemText = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 16px;
    margin-bottom: 8px;
`

export const ItemBtn = styled(Button)`
    margin-left: 8px;
    margin-bottom: 8px;
    padding: 4px 6px;
    font-size: 14px;
    cursor: pointer;
`