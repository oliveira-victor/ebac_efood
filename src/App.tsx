import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Footer from "./components/Footer"
import GlobalStyle, { PageWrapper } from "./styles"
import Pages from './routes'
import { store } from './store'
import Cart from './components/Cart'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <PageWrapper>
          <Pages />
          <Footer />
          <Cart />
        </PageWrapper>
      </BrowserRouter>
    </Provider>
  )
}

export default App
