import { Container } from "react-bootstrap"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BarraNav from "./componentes/BarraNav"
import Usuarios from "./componentes/Usuarios"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <BarraNav />

          <Routes>
            <Route path="/usuarios" element={<Usuarios />} />
          </Routes>

        </Container>
      </BrowserRouter>
    </>
  )
}