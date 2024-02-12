import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store//reducers/cart'
import { formataPreco } from '../DishList'
import deleteBtn from '../../assets/images/deleteBtn.png'
import { Paragraph, ProceedBtn } from '../../styles'

import * as S from './styles'
import { useState } from 'react'
import PaymentForm from '../PaymentForm'
import AddressForm from '../AddressForm'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const [cartPage, setCartPage] = useState(1)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
        setCartPage(1)
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

                {items.length === 0 && <Paragraph>Seu carrinho está vazio. Adicione pratos do menu para continuar com seu pedido.</Paragraph>}

                {items.length > 0 && cartPage === 1 ? (
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
                        <ProceedBtn onClick={() => setCartPage(2)}>Continuar com a entrega</ProceedBtn>
                    </>
                ) : (
                    ''
                )}

                {items.length > 0 && cartPage === 2 ?  (
                    <>
                        <AddressForm />
                        <ProceedBtn onClick={() => setCartPage(3)}>Continuar com o pagamento</ProceedBtn>
                        <ProceedBtn onClick={() => setCartPage(1)}>Voltar para o carrinho</ProceedBtn>
                    </>
                ) : ('')}

                {items.length > 0 && cartPage === 3 ?  (
                    <>
                        <PaymentForm />
                        <ProceedBtn onClick={() => console.log('finalizar')}>Finalizar pagamento</ProceedBtn>
                        <ProceedBtn onClick={() => setCartPage(2)}>Voltar para a edição de endereço</ProceedBtn>
                    </>
                ) : ('')}

            </S.CartContainer>
        </S.Background>
    )
}

export default Cart