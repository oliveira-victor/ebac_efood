import * as S from './styles'

import dishImg from '../../assets/images/dish1.png'
import close from '../../assets/images/close.png'

const PopUp = () => {
    return (
        <S.PopUp>
            <S.ContentBox>
                <S.CloseBtn src={close} alt="Ícone de fechar" />
                <img src={dishImg} alt="Prato" />
                <div>
                    <h3>Pizza Marguerita</h3>
                    <p>
                        A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
                    </p>
                    <span>
                        Serve: de 2 a 3 pessoas
                    </span>
                    <S.PopUpBtn>Adicionar ao carrinho - R$ 60,90</S.PopUpBtn>
                </div>
            </S.ContentBox>
        </S.PopUp>
    )
}

export default PopUp