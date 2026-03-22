import { Container } from "react-bootstrap"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BarraNav from "./componentes/BarraNav"
import Usuarios from "./componentes/Usuarios"
import Projetos from "./componentes/Projetos"
import Tarefas from "./componentes/Tarefas"
import Dashboard from "./componentes/Dashboard"
// import PaginaInicial from "./componentes/PaginaInicial"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <BarraNav />

          <Routes>
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* <Route path="/paginainicial" element={<PaginaInicial />} /> */}
          </Routes>

        </Container>
      </BrowserRouter>
    </>
  )
}