import { Container, Card, Button, Col, Form, Row, Table } from "react-bootstrap";
import CadastroTarefa from "./CadastroTarefa";
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Tarefas() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const [dadosTarefa, setDadosTarefa] = useState({
    titulo: "",
    descricao: "",
    dataInicio: "",
    dataConclusao: "",
    status: "",
    responsavel: "",
  })

  const abrirModalAtualizarTarefa = (tarefa) => {
    setDadosTarefa(tarefa);
    setShow(true);
  }

  const deletarTarefa = async (id) => {
    const confirmar = window.confirm(`Tem certeza que deseja excluir a tarefa ${id}?`);

    if (confirmar) {
      try {
        await axios.delete(`http://localhost:8080/tarefas/${id}`);
        setTarefas(tarefas.filter((t) => t.id !== id));
        alert("Tarefa deletada com sucesso!");
      } catch (erro) {
        console.error("Erro na comunicação com a API: ", erro);
        alert("Erro ao tentar excluir a tarefa. Verifique o console.");
      }
    }
  }



  const buscarTarefas = () => {
    // COMENTÁRIO: Isolamos o GET numa função chamável que será emprestada ao Modal.
    setCarregando(true);
    fetch(`http://localhost:8080/tarefas`)
      .then(resposta => {
        if (!resposta.ok) {
          throw new Error('Não foi possível buscar as tarefas no momento.');
        };
        return resposta.json();
      })
      .then(dados => {
        setTarefas(dados);
        setCarregando(false);
      }).catch(erro => {
        console.error("Erro na comunicação com a API: ", erro);
        setCarregando(false);
      })
  };

  useEffect(() => {
    buscarTarefas();
  }, [])

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <h2 className="mb-0 text-center text-md-start">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" className="bi bi-database-down me-2" viewBox="0 0 16 16">
                <path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793l-.646-.647a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0" />
                <path d="M12.096 6.223A5 5 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.5 4.5 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-.813-.927Q8.378 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.6 4.6 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10q.393 0 .774-.024a4.5 4.5 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4" />
              </svg>
            </span>
            Painel de Tarefas
          </h2>
          <Button variant="dark" className="d-flex align-items-center gap-2" onClick={handleShow}>
            <i className="bi bi-plus-lg"></i> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" className="bi bi-clipboard2-fill" viewBox="0 0 16 16">
              <path
                d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
              <path
                d="M3.5 1h.585A1.5 1.5 0 0 0 4 1.5V2a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 12 2v-.5q-.001-.264-.085-.5h.585A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1" />
            </svg></span>
            Adicionar Tarefa
          </Button>
        </Card.Header>

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
                    <Form.Control placeholder="Nome completo" />
                  </Col>
                  <Col xs={12} md={6} lg={3}>
                    <Form.Label>Responsável</Form.Label>
                    <Form.Control placeholder="Apenas números" />
                  </Col>
                  <Col xs={12} md={6} lg={3}>
                    <Form.Label>Status</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Selecione</option>
                      <option value="1">Ativo</option>
                      <option value="2">Inativo</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Card.Body>

        <Card.Body>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-end mb-3 gap-2">
            <Button variant="danger" className="d-flex align-items-center gap-2">

              Exportar PDF
            </Button>

            <Button variant="success" className="d-flex align-items-center gap-2">

              Exportar Planilha
            </Button>
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
              {tarefas.map((tarefa) => (
                <tr key={tarefa.id}>
                  <td>{tarefa.id}</td>
                  <td>{tarefa.titulo}</td>
                  <td>{tarefa.descricao}</td>
                  <td>{tarefa.dataInicio}</td>
                  <td>{tarefa.dataConclusao}</td>
                  <td>{tarefa.status}</td>
                  <td>{tarefa.responsavel?.nome}</td>
                  {/* Botões para ATUALIZAR e DELETAR */}
                  <td>
                    <div className="d-flex gap-2">
                      <Button onClick={() => abrirModalAtualizarTarefa(tarefa)} variant="warning" size="sm" title="Editar Usuário">

                      </Button>
                      <Button onClick={() => { deletarTarefa(tarefa.id) }} variant="danger" size="sm" title="Excluir Tarefa">

                      </Button>
                      <Button variant="light" size="sm" title="Visualizar Tarefa">
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal */}
      <CadastroTarefa show={show} handleClose={handleClose} dadosTarefa={dadosTarefa} buscarTarefas={buscarTarefas} />

    </Container>
  )
}