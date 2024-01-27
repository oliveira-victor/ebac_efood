import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store//reducers/cart'
import ItemBox from '../ItemBox'
import * as S from './styles'

const Cart = () => {
    const { isOpen } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    return (
        <S.Background className={isOpen ? 'isOpen' : ''}>
            <S.CartOverlay onClick={closeCart}></S.CartOverlay>
            <S.CartContainer>
                <S.ItemsList>
                    <ItemBox
                        title='Pizza Marguerita'
                        price='60.90'
                    />
                    <ItemBox
                        title='Pizza Marguerita'
                        price='60.90'
                    />
                    <ItemBox
                        title='Pizza Marguerita'
                        price='60.90'
                    />
                </S.ItemsList>
                <S.Total>
                    <div>Valor total</div>
                    <div>182,70</div>
                </S.Total>
                <button title='Continuar com a entrega' />
            </S.CartContainer>
        </S.Background>
    )
}

export default Cart