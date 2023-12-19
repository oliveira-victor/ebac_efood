import * as S from './styles'

import logo from '../../assets/images/logo.png'

const ProfileHeader = () => {
    return (
        <S.ProfileHeader>
            <S.ElementsContainer  className='container'>
                <li>
                    <S.HomeLink to='/'>Restaurantes</S.HomeLink>
                </li>
                <S.Logo>
                    <img src={logo} alt="Logo eFood" />
                </S.Logo>
                <S.CartLink>
                    0 produto&#40;s&#41; no carrinho
                </S.CartLink>
            </S.ElementsContainer>
        </S.ProfileHeader>
    )
}

export default ProfileHeader