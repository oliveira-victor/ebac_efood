import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store//reducers/cart'
import ItemBox from '../ItemBox'
import * as S from './styles'
import { formataPreco } from '../DishList'
import deleteBtn from '../../assets/images/deleteBtn.png'
import foodPic from '../../assets/images/dish1.png'
import { EfoodData } from '../../App'

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
                    {/* {items.map((item) => (
                        <S.ItemBox>
                        <S.ItemImg style={{ backgroundImage: `url(${foodPic})` }}></S.ItemImg>
                        <div>
                            <S.ItemTitle>{item.nome}</S.ItemTitle> 
                            <S.ItemPrice>{item.preco}</S.ItemPrice>
                            <img src={deleteBtn} onClick={removeItem} alt="Botão de lixeira" title='Remover item do carrinho' />
                        </div>
                    </S.ItemBox>
                    ))} */}
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