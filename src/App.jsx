import { Container } from "react-bootstrap"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BarraNav from "./componentes/BarraNav"
import Usuarios from "./componentes/Usuarios"
import Projetos from "./componentes/Projetos"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <BarraNav />

          <Routes>
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>

        </Container>
      </BrowserRouter>
    </>
  )
}