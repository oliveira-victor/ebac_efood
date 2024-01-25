import * as S from './styles'

import star from '../../assets/images/star.png'

type Props = {
    image: string
    highlight: boolean
    type: string
    title: string
    rating: number
    description: string
    id: number
}

const Restaurant = ({
    image,
    highlight,
    type,
    title,
    rating,
    description,
    id
}: Props) => {
    return (
        <S.Item>
            <S.ItemImg style={{ backgroundImage: `url(${image})` }}>
                <S.ItemTags>
                    {highlight && <S.Tag>Destaque da semana</S.Tag>}
                    <S.Tag>{type}</S.Tag>
                </S.ItemTags>
            </S.ItemImg>
            <S.ItemInfoContainer>
                <div>
                    <S.ItemHeader>
                        <h3>{title}</h3>
                        <div>
                            <span>{rating}</span>
                            <img src={star} alt="Ícone estrela" />
                        </div>
                    </S.ItemHeader>
                    <S.ItemText>
                        {description}
                    </S.ItemText>
                </div>
                <S.ItemBtn to={`/restaurant/${id}`}>Saiba mais</S.ItemBtn>
            </S.ItemInfoContainer>
        </S.Item>
    )
}

export default Restaurant