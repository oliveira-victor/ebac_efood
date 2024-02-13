import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { close, remove, clear } from '../../store//reducers/cart'
import { formataPreco } from '../DishList'
import deleteBtn from '../../assets/images/deleteBtn.png'
import { usePurchaseMutation } from '../../services/api'
import Confirmation from '../Confirmation'

import { Paragraph, ProceedBtn, ButtonsContainer, DoubleGrid, FormTitle } from '../../styles'
import * as S from './styles'
import SubmitBtn from '../SubmitBtn'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const [cartPage, setCartPage] = useState(1)
    const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation()

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
        setCartPage(1)
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const goToPayment = () => {
        if (!form.isValid || !form.dirty) {
            alert('Por favor, preencha os campos obrigatórios')
        } else {
            setCartPage(3)
        }
    }

    const getTotalPrice = () => {
        return items.reduce((accumulator, currentValue) => {
            if (currentValue.preco) {
                return (accumulator += currentValue.preco)
            }
            return 0
        }, 0)
    }

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid

        return hasError
    }

    const form = useFormik({
        initialValues: {
            fullName: '',
            address: '',
            city: '',
            zipCode: '',
            houseNumber: '',
            extraInfo: '',
            nameOnCard: '',
            cardNumber: '',
            cardCode: '',
            expirationMonth: '',
            expirationYear: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(5, 'O nome precisa ter pelo menos 5 caracteres')
                .required('O campo é obrigatório'),
            address: Yup.string().required(),
            city: Yup.string().required(),
            zipCode: Yup.string().required(),
            houseNumber: Yup.string().required(),
            extraInfo: Yup.string(),

            nameOnCard: Yup.string().when((_values, schema) => cartPage === 3 ? schema.required() : schema),
            cardNumber: Yup.string().when((_values, schema) => cartPage === 3 ? schema.min(16, '').required() : schema),
            cardCode: Yup.string().min(3, '').when((_values, schema) => cartPage === 3 ? schema.required() : schema),
            expirationMonth: Yup.string().when((_values, schema) => cartPage === 3 ? schema.min(2, '').required() : schema),
            expirationYear: Yup.string().when((_values, schema) => cartPage === 3 ? schema.min(2, '').required() : schema)
        }),
        onSubmit: (values) => {
            purchase({
                delivery: {
                    receiver: values.fullName,
                    address: {
                        description: values.address,
                        city: values.city,
                        zipcode: values.zipCode,
                        number: Number(values.houseNumber),
                        complement: values.extraInfo
                    }
                },
                payment: {
                    card: {
                        name: values.nameOnCard,
                        number: values.cardNumber,
                        code: Number(values.cardCode),
                        expires: {
                            month: Number(values.expirationMonth),
                            year: Number(values.expirationYear)
                        }
                    }
                },
                products: items.map((item) => ({
                    id: item.id,
                    price: item.preco
                }))
            })
        }
    })

    useEffect(() => {
        if (isSuccess) {
            setCartPage(4)
            dispatch(clear())
        }
    }, [isSuccess, dispatch])

    return (
        <S.Background className={isOpen ? 'isOpen' : ''}>
            <S.CartOverlay onClick={closeCart}></S.CartOverlay>
            <S.CartContainer>
                <S.Form onSubmit={form.handleSubmit}>

                    {items.length === 0 && cartPage === 1 ? (
                        <Paragraph>Seu carrinho está vazio. Adicione pratos do menu para continuar com seu pedido.</Paragraph>
                    ) : ('')}

                    {items.length > 0 && cartPage === 1 ? (
                        <>
                            <S.ItemsList className={items.length >= 7 ? 'addScroll' : ''}>
                                {items.map((item) => (
                                    <S.ItemBox key={item.id}>
                                        <S.ItemImg style={{ backgroundImage: `url(${item.foto})` }}></S.ItemImg>
                                        <div>
                                            <S.ItemTitle>{item.nome}</S.ItemTitle>
                                            <S.ItemPrice>{formataPreco(item.preco)}</S.ItemPrice>
                                            <img src={deleteBtn} onClick={() => removeItem(item.id)} alt="Botão de lixeira" title='Remover item do carrinho' />
                                        </div>
                                    </S.ItemBox>
                                ))}
                            </S.ItemsList>
                            <S.Total>
                                <div>Valor total</div>
                                <div>{formataPreco(getTotalPrice())}</div>
                            </S.Total>
                            <ProceedBtn type='button' onClick={() => setCartPage(2)}>Continuar com a entrega</ProceedBtn>
                        </>
                    ) : (
                        ''
                    )}

                    {items.length > 0 && cartPage === 2 ? (
                        <>
                            <FormTitle>Entrega</FormTitle>
                            <S.Label htmlFor="fullName">Quem irá receber</S.Label>
                            <input
                                type="text"
                                name='fullName'
                                id='fullName'
                                value={form.values.fullName}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('fullName') ? 'error' : ''}
                            />
                            <S.Label htmlFor="address">Endereço</S.Label>
                            <input
                                type="text"
                                name='address'
                                id='address'
                                value={form.values.address}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('address') ? 'error' : ''}
                            />
                            <S.Label htmlFor="city">Cidade</S.Label>
                            <input
                                type="text"
                                name='city'
                                id='city'
                                value={form.values.city}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('city') ? 'error' : ''}
                            />
                            <DoubleGrid>
                                <div>
                                    <S.Label htmlFor="zipCode">CEP</S.Label>
                                    <InputMask
                                        type="text"
                                        name='zipCode'
                                        id='zipCode'
                                        value={form.values.zipCode}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={checkInputHasError('zipCode') ? 'error' : ''}
                                        mask="99999-999"
                                    />
                                </div>
                                <div>
                                    <S.Label htmlFor="houseNumber">Número</S.Label>
                                    <input
                                        type="text"
                                        name='houseNumber'
                                        id='houseNumber'
                                        value={form.values.houseNumber}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={checkInputHasError('houseNumber') ? 'error' : ''}
                                    />
                                </div>
                            </DoubleGrid>
                            <S.Label htmlFor="extraInfo">Complemento (opcional)</S.Label>
                            <input
                                type="text"
                                name='extraInfo'
                                id='extraInfo'
                                value={form.values.extraInfo}
                                onChange={form.handleChange}
                            />
                            <ButtonsContainer>
                                <ProceedBtn type='button' onClick={goToPayment}>Continuar com o pagamento</ProceedBtn>
                                <ProceedBtn type='button' onClick={() => setCartPage(1)}>Voltar para o carrinho</ProceedBtn>
                            </ButtonsContainer>
                        </>
                    ) : ('')}

                    {items.length > 0 && cartPage === 3 ? (
                        <>
                            <FormTitle>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</FormTitle>
                            <S.Label htmlFor='nameOnCard'>Nome no cartão</S.Label>
                            <input
                                name='nameOnCard'
                                id='nameOnCard'
                                type='text'
                                value={form.values.nameOnCard}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('nameOnCard') ? 'error' : ''}
                            />
                            <S.Grid>
                                <div>
                                    <S.Label htmlFor='cardNumber'>Número no cartão</S.Label>
                                    <InputMask
                                        name='cardNumber'
                                        id='cardNumber'
                                        type='text'
                                        value={form.values.cardNumber}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={checkInputHasError('cardNumber') ? 'error' : ''}
                                        mask="9999 9999 9999 9999"
                                    />
                                </div>
                                <div>
                                    <S.Label htmlFor='cardCode'>CVV</S.Label>
                                    <InputMask
                                        name='cardCode'
                                        id='cardCode'
                                        type='text'
                                        value={form.values.cardCode}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={checkInputHasError('cardCode') ? 'error' : ''}
                                        mask="999"
                                    />
                                </div>
                            </S.Grid>
                            <DoubleGrid>
                                <div>
                                    <S.Label htmlFor='expirationMonth'>Mês de vencimento</S.Label>
                                    <InputMask
                                        name='expirationMonth'
                                        id='expirationMonth'
                                        type='text'
                                        value={form.values.expirationMonth}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={checkInputHasError('expirationMonth') ? 'error' : ''}
                                        mask="99"
                                    />
                                </div>
                                <div>
                                    <S.Label htmlFor='expirationYear'>Ano de vencimento</S.Label>
                                    <InputMask
                                        name='expirationYear'
                                        id='expirationYear'
                                        type='text'
                                        value={form.values.expirationYear}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={checkInputHasError('expirationYear') ? 'error' : ''}
                                        mask="99"
                                    />
                                </div>
                            </DoubleGrid>
                            <ButtonsContainer>
                                <SubmitBtn
                                    type='submit'
                                    onClick={form.handleSubmit}
                                    disabled={isLoading}
                                    content={isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
                                />
                                <ProceedBtn type='button' onClick={() => setCartPage(2)}>Voltar para a edição de endereço</ProceedBtn>
                            </ButtonsContainer>
                        </>
                    ) : ('')}

                    {cartPage === 4 ? (
                        <>
                            <Confirmation data={data} />
                            <ProceedBtn type='button' onClick={closeCart}>Concluir</ProceedBtn>
                        </>
                    ) : ('')}

                </S.Form>
            </S.CartContainer>
        </S.Background>
    )
}

export default Cart