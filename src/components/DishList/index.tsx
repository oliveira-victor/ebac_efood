import Dish from '../Dish'
import * as S from './styles'

import dishIgm from '../../assets/images/dish1.png'
import PopUp from '../PopUp'
import { useState } from 'react'
import Cart from '../Cart'

const DishList = () => {

    const [showPopup, setShowPopup] = useState(false)

    return (
        <>
            <Cart />
            {showPopup ? <PopUp /> : ''}
            <button onClick={() => setShowPopup(!showPopup)}>TEST</button>
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
        </>
    )
}

export default DishList