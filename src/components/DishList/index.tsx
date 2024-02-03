import { useEffect, useState } from 'react'
import { Cardapio, EfoodData } from '../../App'
import { useParams } from 'react-router-dom'

import { ProceedBtn } from '../../styles'
import { useGetRestaurantIdQuery } from '../../services/api'
import * as S from './styles'

import close from '../../assets/images/close.png'
import { useDispatch, useSelector } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type ModalState = {
    isVisible: boolean
    id: number
    image: string
    title: string
    description: string
    portion: string
    price: number
}

type Props = {
    data: EfoodData
}

export const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
}

const DishList = ({ data }: Props) => {

    const dispatch = useDispatch()

    const addToCart = (modal: EfoodData) => {
        dispatch(add(modal))
        closeModal()
        dispatch(open())
    }

    /* const { id } = useParams()
    const { data: restaurant } = useGetRestaurantIdQuery(id!) */

    /* const [restaurant, setRestaurant] = useState<EfoodData>() */

    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        id: 0,
        image: '',
        title: '',
        description: '',
        portion: '',
        price: 0
    })

    const closeModal = () => {
        setModal({
            isVisible: false,
            id: 0,
            image: '',
            title: '',
            description: '',
            portion: '',
            price: 0
        })
    }

    /* useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then(res => res.json())
            .then(res => setRestaurant(res))
    }, [id]) */

    return (
        <>
            <S.DishList className="container">
                <ul>
                    {data?.cardapio.map((item) => (
                        <S.DishContainer key={item.id}>
                            <div>
                                <img src={item.foto} alt={item.nome} />
                                <S.DishTitle>{item.nome}</S.DishTitle>
                                <S.DishDescription>
                                    {item.descricao.slice(0, 100) + '...'}
                                </S.DishDescription>
                            </div>
                            <ProceedBtn onClick={() => setModal({
                                isVisible: true,
                                id: item.id,
                                image: item.foto,
                                title: item.nome,
                                description: item.descricao,
                                portion: item.porcao,
                                price: item.preco
                            })}>Adicionar ao carrinho</ProceedBtn>
                        </S.DishContainer>
                    ))}
                </ul>
            </S.DishList>

            <S.Modal className={modal.isVisible ? 'visible' : ''}>
                <S.ContentBox>
                    <S.CloseBtn src={close} alt="Ícone de fechar" onClick={closeModal} />
                    <img src={modal.image} alt={modal.title} />
                    <div>
                        <div>
                            <h3>{modal.title}</h3>
                            <p>
                                {modal.description}
                            </p>
                            <span>
                                Serve: de {modal.portion}
                            </span>
                        </div>
                        <S.ModalBtn onClick={() => addToCart(modal)}>Adicionar ao carrinho - {formataPreco(modal.price)}</S.ModalBtn>
                    </div>
                </S.ContentBox>
                <div className='overlay' onClick={closeModal}></div>
            </S.Modal>
        </>
    )
}

export default DishList