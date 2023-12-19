import styled from "styled-components";

import hero from '../../assets/images/hero.png'
import { colors } from "../../styles/colors";

export const Banner = styled.section`
    background-image: url(${hero});
    background-size: cover;
    height: 280px;
    padding: 25px 0 32px 0;
    color: ${colors.neutral};
    font-size: 32px;
`

export const BannerContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ProfileTitle = styled.h2`
    font-weight: 100;
`

export const ProfileSubtitle = styled.h3`
    font-weight: 900;
`