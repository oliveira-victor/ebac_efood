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
      </PageWrapper>
    </>
  )
}

export default App
