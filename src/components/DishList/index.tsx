import { useEffect, useState } from 'react'
import dishIgm from '../../assets/images/dish1.png'
import { EfoodData } from '../../App'
import { ProceedBtn } from '../../styles'

import * as S from './styles'

import close from '../../assets/images/close.png'

const DishList = () => {

    const [dishes, setDishes] = useState<EfoodData[]>([])

    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then(res => res.json())
            .then(res => setDishes(res))
    }, [])

    return (
        <>
            <S.Modal className={modalIsOpen ? 'visible' : ''}>
                <S.ContentBox>
                    <S.CloseBtn src={close} alt="Ícone de fechar" onClick={() => setModalIsOpen(false)} />
                    <img src={dishIgm} alt="Prato" />
                    <div>
                        <h3>Pizza Marguerita</h3>
                        <p>
                            A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
                        </p>
                        <span>
                            Serve: de 2 a 3 pessoas
                        </span>
                        <S.ModalBtn>Adicionar ao carrinho - R$ 60,90</S.ModalBtn>
                    </div>
                </S.ContentBox>
                <div className='overlay' onClick={() => setModalIsOpen(false)}></div>
            </S.Modal>

            <S.DishList className="container">
                {dishes.map((dish) => (
                    <S.DishContainer>
                        <img src={dish.foto} alt={dish.titulo} />
                        <S.DishTitle>{dish.titulo}</S.DishTitle>
                        <S.DishDescription>
                            {dish.descricao}
                        </S.DishDescription>
                        <ProceedBtn onClick={() => setModalIsOpen(true)}>Adicionar ao carrinho</ProceedBtn>
                    </S.DishContainer>
                ))}
                {/* <Dish
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
                /> */}
            </S.DishList>
        </>
    )
}

export default DishList