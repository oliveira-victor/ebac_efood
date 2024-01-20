import { useParams } from 'react-router-dom'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { EfoodData } from '../../App'

const Hero = () => {

    const { id } = useParams()

    const [restaurant, setRestaurant] = useState<EfoodData>()

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then(res => res.json())
            .then(res => setRestaurant(res))
    }, [id])

    return (
        <S.Banner style={{backgroundImage: `url(${restaurant?.capa})`}}>
            <S.BannerContainer className="container">
                <S.ProfileTitle>{restaurant?.tipo}</S.ProfileTitle>
                <S.ProfileSubtitle>{restaurant?.titulo}</S.ProfileSubtitle>
            </S.BannerContainer>
        </S.Banner>
    )
}

export default Hero