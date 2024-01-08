import ActionBtn from '../ActionBtn'
import AddressForm from '../AddressForm'
import ItemBox from '../ItemBox'
import PaymentForm from '../PaymentForm'
import PlacedOrder from '../PlacedOrder'
import * as S from './styles'

const Cart = () => {
    return (
        <S.Background>
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
                <ActionBtn title='Continuar com a entrega' />

                {/* temp: area de teste */}
                {/* <AddressForm /> */}
                {/* <PaymentForm /> */}
                {/* <PlacedOrder /> */}
                {/* tempo: fim da area de teste */}
            </S.CartContainer>
        </S.Background>
    )
}

export default Cart