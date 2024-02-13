import { BtnContainer } from './styles'

type Props = {
    type: 'submit'
    onClick: () => void
    disabled?: boolean
    content: string
}

const SubmitBtn = ({ type, onClick, disabled, content }: Props) => {
    return (
        <BtnContainer
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </BtnContainer>
    )
}

export default SubmitBtn