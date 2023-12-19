import * as S from './styles'

import star from '../../assets/images/star.png'

type Props = {
    image: string
    tags: string[]
    title: string
    rating: number
    info: string
    page: string
}

const MenuItem = ({ image, tags, title, rating, info, page }: Props) => {
    return (
        <S.Item>
            <S.ItemImg style={{ backgroundImage: `url(${image})` }}>
                <S.ItemTags>
                    {tags.map((tag) => <S.Tag key={tag}>{tag}</S.Tag>)}
                </S.ItemTags>
            </S.ItemImg>
            <S.ItemInfoContainer>
                <S.ItemHeader>
                    <h3>{title}</h3>
                    <div>
                        <span>{rating}</span>
                        <img src={star} alt="Ícone estrela" />
                    </div>
                </S.ItemHeader>
                <S.ItemText>
                    {info}
                </S.ItemText>
            <S.ItemBtn to={page}>Saiba mais</S.ItemBtn>
            </S.ItemInfoContainer>
        </S.Item>
    )
}

export default MenuItem