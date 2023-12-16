import MenuItem from '../MenuItem'
import * as S from './styles'

const Menu = () => {
    return (
        <section className='container'>
            <S.MenuList>
                <li>
                <MenuItem />
                </li>
                <li>
                <MenuItem />
                </li>
                <li>
                <MenuItem />
                </li>
                <li>
                <MenuItem />
                </li>
                <li>
                <MenuItem />
                </li>
                <li>
                <MenuItem />
                </li>
            </S.MenuList>
        </section>
    )
}

export default Menu