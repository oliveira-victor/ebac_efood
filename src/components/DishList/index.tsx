import { useEffect, useState } from 'react'
import { EfoodData } from '../../App'
import { useParams } from 'react-router-dom'

import { ProceedBtn } from '../../styles'
import { useGetRestaurantIdQuery } from '../../services/api'
import * as S from './styles'

import close from '../../assets/images/close.png'

type ModalState = {
    isVisible: boolean
    image: string
    title: string
    description: string
    portion: string
    price: number
}

export const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
}

const DishList = () => {

    const { id } = useParams()
    const { data: restaurant, isLoading } = useGetRestaurantIdQuery(id!)

    /* const [restaurant, setRestaurant] = useState<EfoodData>() */

    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        image: '',
        title: '',
        description: '',
        portion: '',
        price: 0
    })

    const closeModal = () => {
        setModal({
            isVisible: false,
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
                    {restaurant?.cardapio.map((item) => (
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
                        <S.ModalBtn>Adicionar ao carrinho - {formataPreco(modal.price)}</S.ModalBtn>
                    </div>
                </S.ContentBox>
                <div className='overlay' onClick={closeModal}></div>
            </S.Modal>
        </>
    )
}

export default DishList