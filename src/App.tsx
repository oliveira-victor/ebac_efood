import Footer from "./components/Footer"
import Header from "./components/Header"
import Menu from "./components/Menu"
import GlobalStyle, { PageWrapper } from "./styles"

function App() {

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header />
        <Menu />
        <Footer />
      </PageWrapper>
    </>
  )
}

export default App
