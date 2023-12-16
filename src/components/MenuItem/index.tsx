import * as S from './styles'

import star from '../../assets/images/star.png'

const MenuItem = () => {
    return (
        <S.Item>
            <S.ItemImg style={{ backgroundImage: 'url(https://i2.wp.com/querofazersushi.com.br/wp-content/uploads/2020/02/sushi-pelo-mundo.png?resize=640%2C456)' }}>
                <S.ItemTags>
                    <S.Tag>Destaque da semana</S.Tag>
                    <S.Tag>Japonesa</S.Tag>
                </S.ItemTags>
            </S.ItemImg>
            <S.ItemInfoContainer>
                <S.ItemHeader>
                    <h3>Hioki Sushi</h3>
                    <div>
                        <span>4.9</span>
                        <img src={star} alt="" />
                    </div>
                </S.ItemHeader>
                <S.ItemText>
                    Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.
                    Experimente o Japão sem sair do lar com nosso delivery!
                </S.ItemText>
            </S.ItemInfoContainer>
            <S.ItemBtn>Saiba mais</S.ItemBtn>
        </S.Item>
    )
}

export default MenuItem