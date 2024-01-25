import styled from "styled-components";
import { Button } from "../../styles";
import { colors } from "../../styles/colors";
import { Link } from "react-router-dom";

export const MenuList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    padding: 80px 8px 120px 8px;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`