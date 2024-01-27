import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store//reducers/cart'
import ItemBox from '../ItemBox'
import * as S from './styles'
import { formataPreco } from '../DishList'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = () => {
        console.log('remover')
    }

    return (
        <S.Background className={isOpen ? 'isOpen' : ''}>
            <S.CartOverlay onClick={closeCart}></S.CartOverlay>
            <S.CartContainer>
                <S.ItemsList>
                    {items.map((item) => (
                        <ItemBox
                            key={item.id}
                            title={item.titulo}
                            price='10,00'
                            removeItem={removeItem}
                        />
                    ))}
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