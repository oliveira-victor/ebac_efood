import ItemBox from '../ItemBox'
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
                <S.ProceedBtn>Continuar com a entrega</S.ProceedBtn>
            </S.CartContainer>
        </S.Background>
    )
}

export default Cart