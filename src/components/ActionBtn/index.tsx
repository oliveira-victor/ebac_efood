import * as S from './styles'

type Props = {
    title: string
}

const ActionBtn = ({title}: Props) => {
    return (
        <S.ProceedBtn>{title}</S.ProceedBtn>
    )
}

export default ActionBtn