import { BrowserRouter } from 'react-router-dom'

import Footer from "./components/Footer"
import GlobalStyle, { PageWrapper } from "./styles"
import Pages from './routes'

export type EfoodData = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <PageWrapper>
          <Pages />
          <Footer />
        </PageWrapper>
      </BrowserRouter>
    </>
  )
}

export default App
