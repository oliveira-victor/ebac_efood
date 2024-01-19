import * as S from './styles'
import { useEffect, useState } from 'react'
import { EfoodData } from '../../App'

import star from '../../assets/images/star.png'

const Menu = () => {

    const [restaurants, setRestaurants] = useState<EfoodData[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then(res => res.json())
            .then(res => setRestaurants(res))
    }, [])

    return (
        <section className='container'>
            <S.MenuList>
                {restaurants.map((restaurant) => (
                    <li>
                        <S.Item>
                            <S.ItemImg style={{ backgroundImage: `url(${restaurant.capa})` }}>
                                <S.ItemTags>
                                    {restaurant.destacado && <S.Tag>Destaque da semana</S.Tag>}
                                    <S.Tag>Japonesa</S.Tag>
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
                                <S.ItemBtn to=''>Saiba mais</S.ItemBtn>
                            </S.ItemInfoContainer>
                        </S.Item>
                    </li>
                ))}
            </S.MenuList>
        </section>
    )
}

export default Menu