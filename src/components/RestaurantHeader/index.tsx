import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import logo from '../../assets/images/logo.png'
import { RootReducer } from '../../store'

const RestaurantHeader = () => {

    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

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
                    {items.length} produto&#40;s&#41; no carrinho
                </S.CartBtn>
            </S.ElementsContainer>
        </S.RestaurantHeader>
    )
}

export default RestaurantHeader