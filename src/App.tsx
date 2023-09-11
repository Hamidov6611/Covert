import { Route, Routes } from "react-router-dom"
import { Blog, BlogDetail, Calculator, Main, Reviews, Service } from "./app/delivery"
import { AddClient, AddConsignessComp, AddDispatch, AddShippers, AdminLogin, AdminPage, Chat, Clients, Conignees, Dispatch, Message, Rates, Shippers, Wallet, Way } from "./app/dashboard"

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
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/addclient" element={<AddClient />} />
        <Route path="/client" element={<Clients />} />
        <Route path="/addshippers" element={<AddShippers />} />
        <Route path="/shippers" element={<Shippers />} />
        <Route path="/addconsignees" element={<AddConsignessComp />} />
        <Route path="/consignees" element={<Conignees />} />
        <Route path="/adddispatch" element={<AddDispatch />} />
        <Route path="/dispatch" element={<Dispatch />} />
        <Route path="/message" element={<Message />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/way" element={<Way />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </>
  )
}

export default App
