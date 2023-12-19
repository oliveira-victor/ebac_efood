import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Footer from "./components/Footer"
import Home from "./pages/Home"
import GlobalStyle, { PageWrapper } from "./styles"

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <RouterProvider router={routes} />
        <Footer />
      </PageWrapper>
    </>
  )
}

export default App
