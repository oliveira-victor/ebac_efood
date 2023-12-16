import * as S from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => {
    return (
        <S.Footer>
            <S.FooterContainer>
                <img src={logo} alt="Logo eFood" />
                <S.SocialIcons>
                    <a href="#">
                        <img src={instagram} alt="Instagram icon" />
                    </a>
                    <a href="#">
                        <img src={facebook} alt="Facebook icon" />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="Twitter icon" />
                    </a>
                </S.SocialIcons>
                <S.FooterTxt>
                    A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
                </S.FooterTxt>
            </S.FooterContainer>
        </S.Footer>
    )
}

export default Footer