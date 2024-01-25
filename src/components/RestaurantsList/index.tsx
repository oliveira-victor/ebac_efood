import * as S from './styles'
import { EfoodData } from '../../App'
import { useGetRestaurantsQuery } from '../../services/api'
import Restaurant from '../restaurant'

const Menu = () => {

    const { data: restaurants, isLoading } = useGetRestaurantsQuery()

    /* const [restaurants, setRestaurants] = useState<EfoodData[]>([])

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
            .then(res => res.json())
            .then(res => setRestaurants(res))
    }, []) */

    if (!restaurants || isLoading)  {
        return <h3>Carregando...</h3>
    }

    return (
        <section className='container'>
            <S.MenuList>
                {restaurants.map((restaurant: EfoodData) => (
                    <li key={restaurant.id}>
                        <Restaurant 
                            image={restaurant.capa} 
                            highlight={restaurant.destacado} 
                            type={restaurant.tipo} 
                            title={restaurant.titulo}
                            rating={restaurant.avaliacao}
                            description={restaurant.descricao}
                            id={restaurant.id}
                        />
                    </li>
                ))}
            </S.MenuList>
        </section>
    )
}

export default Menu