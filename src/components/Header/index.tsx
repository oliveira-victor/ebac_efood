import * as S from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <S.Header>
            <S.Title src={logo} alt="Efood logo" />
            <S.Text>
            Viva experiências gastronômicas <br />no conforto da sua casa
            </S.Text>
        </S.Header>
    )
}

export default Header