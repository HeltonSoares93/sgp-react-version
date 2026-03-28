import { Container, Card, Button, Col, Form, Row, Table } from "react-bootstrap";
import CadastroProjeto from "./CadastroProjeto";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Projetos() {
  const [show, setShow] = useState(false);
  const [projetos, setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const projetoVazio = {
    titulo: "",
    descricao: "",
    dataInicio: "",
    dataConclusao: "",
    status: "",
    responsavel: "",
  };

  const [dadosProjeto, setDadosProjeto] = useState(projetoVazio);

  const handleClose = () => {
    setDadosProjeto(projetoVazio);
    setShow(false);
  };

  const handleShow = () => {
    setDadosProjeto(projetoVazio);
    setShow(true);
  };

  const abrirModalAtualizarProjeto = (projeto) => {
    setDadosProjeto(projeto);
    setShow(true);
  };

  const deletarProjeto = async (id) => {
    const confirmar = window.confirm(`Tem certeza que deseja excluir o projeto ${id}?`);
    if (confirmar) {
      try {
        await axios.delete(`http://localhost:8080/projetos/${id}`);
        setProjetos(projetos.filter((p) => p.id !== id));
        alert("Projeto deletado com sucesso!");
      } catch (erro) {
        console.error("Erro na comunicação com a API: ", erro);
        alert("Erro ao tentar excluir o projeto. Verifique o console.");
      }
    }
  };

  const buscarProjetos = () => {
    setCarregando(true);
    fetch("http://localhost:8080/projetos")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Não foi possível buscar os projetos no momento...");
        }
        return resposta.json();
      })
      .then((dados) => {
        setProjetos(dados);
        setCarregando(false);
      })
      .catch((erro) => {
        console.error("Erro na comunicação com a API: ", erro);
        setCarregando(false);
      });
  };

  useEffect(() => {
    buscarProjetos();
  }, []);

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <h2 className="mb-0 text-center text-md-start">Painel de Projetos</h2>
          <Button variant="warning" className="d-flex align-items-center gap-2" onClick={handleShow}>
            Adicionar Projeto
          </Button>
        </Card.Header>

        {/* Seção de filtros (opcional) */}
        <Card.Body className="mb-3">
          <Card>
            <Card.Header className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 bg-white">
              <h4 className="mb-0 text-center text-md-start">Definir Parâmetros de Consulta</h4>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                <Button variant="success" className="text-white">Filtrar</Button>
                <Button variant="info" className="text-white">Limpar</Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row className="g-3">
                  <Col xs={12} md={6} lg={3}>
                    <Form.Label>Título</Form.Label>
                    <Form.Control placeholder="Título do projeto" />
                  </Col>
                  <Col xs={12} md={6} lg={3}>
                    <Form.Label>Responsável</Form.Label>
                    <Form.Control placeholder="Quem é o responsável pelo projeto?" />
                  </Col>
                  <Col xs={12} md={6} lg={3}>
                    <Form.Label>Status</Form.Label>
                    <Form.Select aria-label="Status">
                      <option>Selecione</option>
                      <option value="Ativo">Ativo</option>
                      <option value="Inativo">Inativo</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Card.Body>

        <Card.Body>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-end mb-3 gap-2">
            <Button variant="danger" className="d-flex align-items-center gap-2">Exportar PDF</Button>
            <Button variant="success" className="d-flex align-items-center gap-2">Exportar Planilha</Button>
          </div>

          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Título</th>
                <th>Descrição</th>
                <th>Data Início</th>
                <th>Prazo Conclusão</th>
                <th>Status</th>
                <th>Responsável</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {projetos.map((projeto) => (
                <tr key={projeto.id}>
                  <td>{projeto.id}</td>
                  <td>{projeto.titulo}</td>
                  <td>{projeto.descricao}</td>
                  <td>{projeto.dataInicio}</td>
                  <td>{projeto.dataConclusao}</td>
                  <td>{projeto.status}</td>
                  <td>{projeto.responsavel?.nome || projeto.responsavel}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <Button
                        onClick={() => abrirModalAtualizarProjeto(projeto)}
                        variant="warning"
                        size="sm"
                        title="Editar Projeto"
                      >
                        Editar
                      </Button>
                      <Button
                        onClick={() => deletarProjeto(projeto.id)}
                        variant="danger"
                        size="sm"
                        title="Excluir Projeto"
                      >
                        Excluir
                      </Button>
                      <Button variant="light" size="sm" title="Visualizar Projeto">
                        Visualizar
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <CadastroProjeto
        show={show}
        handleClose={handleClose}
        dadosProjeto={dadosProjeto}
        buscarProjetos={buscarProjetos}
      />
    </Container>
  );
}