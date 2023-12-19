import Dish from '../Dish'
import * as S from './styles'

import dishIgm from '../../assets/images/dish1.png'

const DishList = () => {
    return (
        <S.DishList className="container">
            <Dish
                image={dishIgm} 
                title='Pizza Marguerita' 
                description='A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            />
            <Dish
                image={dishIgm} 
                title='Pizza Marguerita' 
                description='A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            />
            <Dish
                image={dishIgm} 
                title='Pizza Marguerita' 
                description='A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            />
            <Dish
                image={dishIgm} 
                title='Pizza Marguerita' 
                description='A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            />
            <Dish
                image={dishIgm} 
                title='Pizza Marguerita' 
                description='A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            />
            <Dish
                image={dishIgm} 
                title='Pizza Marguerita' 
                description='A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            />
        </S.DishList>
    )
}

export default DishList