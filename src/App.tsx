import Footer from "./components/Footer"
import Home from "./pages/Home"
import GlobalStyle, { PageWrapper } from "./styles"

function App() {

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Home />
        <Footer />
      </PageWrapper>
    </>
  )
}

export default App
