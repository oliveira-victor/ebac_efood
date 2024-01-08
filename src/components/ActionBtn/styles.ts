import styled from "styled-components";
import { Button } from "../../styles";
import { colors } from "../../styles/colors";

export const ProceedBtn = styled(Button)`
    min-height: 24px;
    width: 100%;
    margin-top: 8px;
    background-color: ${colors.secondaryColor};
    color: ${colors.primaryColor};
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`