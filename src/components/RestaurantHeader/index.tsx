import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import logo from '../../assets/images/logo.png'

const RestaurantHeader = () => {

    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(open())
    }

    return (
        <S.RestaurantHeader>
            <S.ElementsContainer  className='container'>
                <li>
                    <S.HomeLink to='/'>Restaurantes</S.HomeLink>
                </li>
                <S.Logo>
                    <img src={logo} alt="Logo eFood" />
                </S.Logo>
                <S.CartBtn onClick={openCart}>
                    0 produto&#40;s&#41; no carrinho
                </S.CartBtn>
            </S.ElementsContainer>
        </S.RestaurantHeader>
    )
}

export default RestaurantHeader