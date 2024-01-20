import { ButtonsContainer, DoubleGrid, Form, FormTitle, Input, Label } from '../../styles'

import * as S from './styles'

const PaymentForm = () => {
    return (
        <Form>
            <FormTitle>Pagamento - Valor a pagar R$ 190,90</FormTitle>
            <Label htmlFor='name'>Nome no cartão</Label>
            <Input name='name' type='text' />
            <S.Grid>
                <div>
                    <Label htmlFor='card-number'>Número no cartão</Label>
                    <Input name='card-number' type='number' />
                </div>
                <div>
                    <Label htmlFor='cvv'>CVV</Label>
                    <Input name='cvv' type='number' />
                </div>
            </S.Grid>
            <DoubleGrid>
                <div>
                    <Label htmlFor='exp-month'>Mês de vencimento</Label>
                    <Input name='exp-month' type='number' />
                </div>
                <div>
                    <Label htmlFor='exp-year'>Ano de vencimento</Label>
                    <Input name='exp-year' type='number' />
                </div>
            </DoubleGrid>
            <ButtonsContainer>
                <button title='Finalizar pagamento' />
                <button title='Voltar para a edição de endereço' />
            </ButtonsContainer>
        </Form>
    )
}

export default PaymentForm