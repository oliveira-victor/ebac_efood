import MenuItem from '../MenuItem'
import * as S from './styles'

import prato1 from '../../assets/images/prato1.png'
import prato2 from '../../assets/images/prato2.png'

const Menu = () => {
    return (
        <section className='container'>
            <S.MenuList>
                <li>
                    <MenuItem
                        image={prato1}
                        tags={['Destaque da semana', 'Japonesa']}
                        title='Hioki Sushi'
                        rating={4.9}
                        info='Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
                        page='https://www.google.com/'
                    />
                </li>
                <li>
                    <MenuItem image={prato2}
                        tags={['Italiana']}
                        title='La Dolce Vita Trattoria'
                        rating={4.6}
                        info='A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
                        page='https://www.google.com/'
                    />
                </li>
                <li>
                    <MenuItem image={prato2}
                        tags={['Italiana']}
                        title='La Dolce Vita Trattoria'
                        rating={4.6}
                        info='A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
                        page='https://www.google.com/'
                    />
                </li>
                <li>
                    <MenuItem image={prato2}
                        tags={['Italiana']}
                        title='La Dolce Vita Trattoria'
                        rating={4.6}
                        info='A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
                        page='https://www.google.com/'
                    />
                </li>
                <li>
                    <MenuItem image={prato2}
                        tags={['Italiana']}
                        title='La Dolce Vita Trattoria'
                        rating={4.6}
                        info='A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
                        page='https://www.google.com/'
                    />
                </li>
                <li>
                    <MenuItem image={prato2}
                        tags={['Italiana']}
                        title='La Dolce Vita Trattoria'
                        rating={4.6}
                        info='A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
                        page='https://www.google.com/'
                    />
                </li>

            </S.MenuList>
        </section>
    )
}

export default Menu