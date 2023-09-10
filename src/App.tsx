import { Route, Routes } from "react-router-dom"
import { Blog, BlogDetail, Calculator, Main, Reviews, Service } from "./app/delivery"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  )
}

export default App
