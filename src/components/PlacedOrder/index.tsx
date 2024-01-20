import { FormTitle } from "../../styles"

import * as S from './styles'

const PlacedOrder = () => {
    return (
        <>
            <FormTitle>Pedido realizado - 5524863</FormTitle>
            <S.Paragraph>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </S.Paragraph>
            <S.Paragraph>
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            </S.Paragraph>
            <S.Paragraph>
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </S.Paragraph>
            <S.Paragraph>
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </S.Paragraph>
            <button title="Concluir" />
        </>
    )
}

export default PlacedOrder