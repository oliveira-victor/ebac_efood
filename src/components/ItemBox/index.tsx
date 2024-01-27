import * as S from './styles'

import deleteBtn from '../../assets/images/deleteBtn.png'
import foodPic from '../../assets/images/dish1.png'

type Props = {
    title: string
    price: string
    removeItem: () => void
}

const ItemBox = ({title, price, removeItem}: Props) => {
    return (
        <S.ItemBox>
            <S.ItemImg style={{ backgroundImage: `url(${foodPic})` }}></S.ItemImg>
            <div>
                <S.ItemTitle>{title}</S.ItemTitle>
                <S.ItemPrice>R$ {price}</S.ItemPrice>
                <img src={deleteBtn} onClick={removeItem} alt="Botão de lixeira" title='Remover item do carrinho' />
            </div>
        </S.ItemBox>
    )
}

export default ItemBox