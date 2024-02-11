import { useParams } from "react-router-dom"
import DishList from "../../components/DishList"
import Hero from "../../components/Hero"
import RestaurantHeader from "../../components/RestaurantHeader"
import { useGetRestaurantIdQuery } from "../../services/api"
import Loader from "../../components/Loader"

const Restaurant = () => {

    const { id } = useParams()
    const { data } = useGetRestaurantIdQuery(id!)

    if (!data) {
        return <Loader />
    }

    return (
        <>
            <RestaurantHeader />
            <Hero />
            <DishList data={data} />
        </>
    )
}

export default Restaurant