import { useState } from 'react'
import { Cardapio, EfoodData } from '../../App'

import { ProceedBtn } from '../../styles'
import * as S from './styles'

import close from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

export type ModalState = {
    isVisible: boolean
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
    const [currentItem, setCurrentItem] = useState<Cardapio>({
        foto: '',
        preco: 0,
        id: 0,
        nome: '',
        descricao: '',
        porcao: ''
    })

    const openModal = (item: Cardapio) => {
        setCurrentItem({
            foto: item.foto,
            preco: item.preco,
            id: item.id,
            nome: item.nome,
            descricao: item.descricao,
            porcao: item.porcao
        })
        setModal({ isVisible: true })
    }

    const addToCart = () => {
        dispatch(add(currentItem))
        closeModal()
        dispatch(open())
    }

    /* const { id } = useParams()
    const { data: restaurant } = useGetRestaurantIdQuery(id!) */

    /* const [restaurant, setRestaurant] = useState<EfoodData>() */

    const [modal, setModal] = useState<ModalState>({
        isVisible: false
    })

    const closeModal = () => {
        setModal({
            isVisible: false
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
                            <ProceedBtn onClick={() => openModal(item)}>Adicionar ao carrinho</ProceedBtn>
                        </S.DishContainer>
                    ))}
                </ul>
            </S.DishList>

            <S.Modal className={modal.isVisible ? 'visible' : ''}>
                <S.ContentBox>
                    <S.CloseBtn src={close} alt="Ícone de fechar" onClick={closeModal} />
                    <img src={currentItem.foto} alt={currentItem.nome} />
                    <div>
                        <div>
                            <h3>{currentItem.nome}</h3>
                            <p>
                                {currentItem.descricao}
                            </p>
                            <span>
                                Serve: de {currentItem.porcao}
                            </span>
                        </div>
                        <S.ModalBtn onClick={addToCart}>Adicionar ao carrinho - {formataPreco(currentItem.preco)}</S.ModalBtn>
                    </div>
                </S.ContentBox>
                <div className='overlay' onClick={closeModal}></div>
            </S.Modal>
        </>
    )
}

export default DishList