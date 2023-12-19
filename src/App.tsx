import { BrowserRouter } from 'react-router-dom'

import Footer from "./components/Footer"
import GlobalStyle, { PageWrapper } from "./styles"
import Pages from './routes'

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
