import ActionBtn from '../ActionBtn'

import * as S from './styles'

type Props = {
    image: string
    title: string
    description: string
    addCart?: string
}

const Dish = ({ image, title, description }: Props) => {
    return (
        <S.DishContainer>
            <img src={image} alt="Pizza Margueritta" />
            <S.DishTitle>{title}</S.DishTitle>
            <S.DishDescription>
                {description}
            </S.DishDescription>
            <ActionBtn title='Adicionar ao carrinho' />
        </S.DishContainer>
    )
}

export default Dish