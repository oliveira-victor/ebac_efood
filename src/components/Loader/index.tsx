import { FadeLoader } from "react-spinners";

import { LoaderContainer } from './styles'
import { colors } from "../../styles/colors";

const Loader = () => (
    <LoaderContainer>
        <FadeLoader color={colors.primaryColor} />
    </LoaderContainer>
)

export default Loader