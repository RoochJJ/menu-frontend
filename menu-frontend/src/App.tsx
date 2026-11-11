import { Route, Routes } from "react-router-dom"
import { AppLayout } from "./components/layout/app-layout"
import { ProductPage } from "./components/pages/products/product-page"


function App() {

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="products" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App