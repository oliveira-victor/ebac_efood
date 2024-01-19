import { useEffect, useState } from 'react'
import dishIgm from '../../assets/images/dish1.png'
import { EfoodData } from '../../App'
import { ProceedBtn } from '../../styles'

import * as S from './styles'

import close from '../../assets/images/close.png'
import { useParams } from 'react-router-dom'

const DishList = () => {

    const { id } = useParams()

    const [restaurant, setRestaurant] = useState<EfoodData>()

    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then(res => res.json())
            .then(res => setRestaurant(res))
    }, [id])

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
                <ul>
                    {restaurant?.cardapio.map((item) => (
                        <S.DishContainer key={item.id}>
                            <div>
                                <img src={item.foto} alt={item.nome} />
                                <S.DishTitle>{item.nome}</S.DishTitle>
                                <S.DishDescription>
                                    {item.descricao.slice(0, 100) + '...'}
                                </S.DishDescription>
                            </div>
                            <ProceedBtn onClick={() => setModalIsOpen(true)}>Adicionar ao carrinho</ProceedBtn>
                        </S.DishContainer>
                    ))}
                </ul>
            </S.DishList>
        </>
    )
}

export default DishList