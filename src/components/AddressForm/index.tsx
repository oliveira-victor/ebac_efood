import { ButtonsContainer, DoubleGrid, Form, FormTitle, Input, Label } from '../../styles'
import ActionBtn from '../ActionBtn'

const AddressForm = () => {
    return (
        <>
            <FormTitle>Entrega</FormTitle>
            <Form>
                <Label htmlFor="name">Quem irá receber</Label>
                <Input type="text" name='name' />
                <Label htmlFor="address">Endereço</Label>
                <Input type="text" name='address' />
                <Label htmlFor="city">Cidade</Label>
                <Input type="text" name='city' />
                <DoubleGrid>
                    <div>
                        <Label htmlFor="zip">CEP</Label>
                        <Input type="number" name='zip' />
                    </div>
                    <div>
                        <Label htmlFor="number">Número</Label>
                        <Input type="number" name='number' />
                    </div>
                </DoubleGrid>
                <Label htmlFor="extra">Complemento (opcional)</Label>
                <Input type="text" name='extra' />
                <ButtonsContainer>
                    <ActionBtn title='Continuar com o pagamento' />
                    <ActionBtn title='Voltar para o carrinho' />
                </ButtonsContainer>
            </Form>
        </>
    )
}

export default AddressForm