import * as S from './styles'
import { useEffect, useState } from 'react'
import { EfoodData } from '../../App'

import star from '../../assets/images/star.png'

const Menu = () => {

    const [restaurants, setRestaurants] = useState<EfoodData[]>([])

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
            .then(res => res.json())
            .then(res => setRestaurants(res))
    }, [])

    if (!restaurants) {
        return <h3>Carregando...</h3>
    }

    return (
        <section className='container'>
            <S.MenuList>
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id}>
                        <S.Item>
                            <S.ItemImg style={{ backgroundImage: `url(${restaurant.capa})` }}>
                                <S.ItemTags>
                                    {restaurant.destacado && <S.Tag>Destaque da semana</S.Tag>}
                                    <S.Tag>{restaurant.tipo}</S.Tag>
                                </S.ItemTags>
                            </S.ItemImg>
                            <S.ItemInfoContainer>
                                <div>
                                    <S.ItemHeader>
                                        <h3>{restaurant.titulo}</h3>
                                        <div>
                                            <span>{restaurant.avaliacao}</span>
                                            <img src={star} alt="Ícone estrela" />
                                        </div>
                                    </S.ItemHeader>
                                    <S.ItemText>
                                        {restaurant.descricao}
                                    </S.ItemText>
                                </div>
                                <S.ItemBtn to={`/restaurant/${restaurant.id}`}>Saiba mais</S.ItemBtn>
                            </S.ItemInfoContainer>
                        </S.Item>
                    </li>
                ))}
            </S.MenuList>
        </section>
    )
}

export default Menu