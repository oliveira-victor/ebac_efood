import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store//reducers/cart'
import { formataPreco } from '../DishList'
import deleteBtn from '../../assets/images/deleteBtn.png'
import { Paragraph, ProceedBtn } from '../../styles'

import * as S from './styles'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const getTotalPrice = () => {
        return items.reduce((accumulator, currentValue) => {
            return (accumulator += currentValue.preco!)
        }, 0)
    }

    return (
        <S.Background className={isOpen ? 'isOpen' : ''}>
            <S.CartOverlay onClick={closeCart}></S.CartOverlay>
            <S.CartContainer>
                {items.length > 0 ? (
                    <>
                        <S.ItemsList className={items.length >= 7 ? 'addScroll' : ''}>
                            {items.map((item) => (
                                <S.ItemBox key={item.id}>
                                    <S.ItemImg style={{ backgroundImage: `url(${item.foto})` }}></S.ItemImg>
                                    <div>
                                        <S.ItemTitle>{item.nome}</S.ItemTitle>
                                        <S.ItemPrice>{formataPreco(item.preco)}</S.ItemPrice>
                                        <img src={deleteBtn} onClick={() => removeItem(item.id)} alt="Botão de lixeira" title='Remover item do carrinho' />
                                    </div>
                                </S.ItemBox>
                            ))}
                        </S.ItemsList>
                        <S.Total>
                            <div>Valor total</div>
                            <div>{formataPreco(getTotalPrice())}</div>
                        </S.Total>
                        <ProceedBtn>Continuar com a entrega</ProceedBtn>
                    </>
                ) : (
                    <Paragraph>Seu carrinho está vazio. Adicione pratos do menu para continuar com seu pedido.</Paragraph>
                )}
            </S.CartContainer>
        </S.Background>
    )
}

export default Cart