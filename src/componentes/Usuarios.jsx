import { Container, Card, Button, Col, Form, Row, Table } from "react-bootstrap";
import { useEffect, useState } from 'react';
import CadastroUsuario from "./CadastroUsuario";
import axios from "axios";

export default function Usuarios() {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setDadosUsuarios(usuarioVazio);
  };

  const handleShow = () => {
    setDadosUsuarios(usuarioVazio);
    setShow(true);
  };

  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // função para deletar usuário por Id
  const deletarUsuario = async (id) => {
    const confirmar = window.confirm(`Tem certeza que deseja excluir o usuário ${id}?`);

    if (confirmar) {
      try {
        await axios.delete(`http://localhost:8080/usuarios/${id}`);
        setUsuarios(usuarios.filter((u) => u.id !== id));
        alert("Usuário deletado com sucesso!");
      } catch (erro) {
        console.error("Erro na comunicação com a API: ", erro);
        alert("Erro ao tentar excluir o usuário. Verifique o console.");
      }
    }
  }
  // utilidade: objeto a ser utilizado para limpar os campos.
  const usuarioVazio = {
    nome: "",
    cpf: "",
    email: "",
    nascimento: "",
    status: "",
  };

  const [dadosUsuarios, setDadosUsuarios] = useState(usuarioVazio);

  

  const abrirModalAtualizarUsuario = (usuario) => {
    setDadosUsuarios(usuario);
    setShow(true);
  };

  const buscarUsuarios = () => {
    setCarregando(true);
    fetch('http://localhost:8080/usuarios')
      .then(resposta => {
        if (!resposta.ok) {
          throw new Error('Não foi possível buscar os usuários no momento...')
        };
        return resposta.json(); // a "resposta" recebe o conteúdo do fetch
      })
      .then(dados => {
        setUsuarios(dados);
        setCarregando(false);
      }).catch(erro => {
        console.error("Erro na comunicação com a API: ", erro);
        setCarregando(false);
      });
  };

  // função para buscar todos os usuários na api
  useEffect(() => {
    buscarUsuarios();
  }, []);


  return (
    <Container className="mt-4">
      <Card>
        <Card.Header className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <h2 className="mb-0 text-center text-md-start">
            Painel de Usuários
          </h2>
          <Button variant="primary" className="d-flex align-items-center gap-2" onClick={handleShow}>
            Adicionar Usuário
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
                    <Form.Label>Nome</Form.Label>
                    <Form.Control placeholder="Nome completo" />
                  </Col>
                  <Col xs={12} md={6} lg={3}>
                    <Form.Label>CPF</Form.Label>
                    <Form.Control placeholder="Apenas números" />
                  </Col>
                  <Col xs={12} md={6} lg={3}>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control placeholder="xxxx@email.com" />
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
                <th>Nome</th>
                <th>CPF</th>
                <th>E-mail</th>
                <th>Data Nascimento</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.cpf}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.nascimento}</td>
                  <td>{usuario.status}</td>
                  {/* Botões para ATUALIZAR e DELETAR */}
                  <td>
                    <div className="d-flex gap-2">
                      {/* criar um link para a rota de cadastro */}
                      <Button
                        onClick={() => abrirModalAtualizarUsuario(usuario)}
                        variant="warning"
                        size="sm"
                        title="Editar Usuário">
                        Editar
                      </Button>
                      <Button onClick={() => { deletarUsuario(usuario.id) }} variant="danger" size="sm" title="Excluir Usuário">
                        Excluir
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
      <CadastroUsuario show={show} handleClose={handleClose} dadosUsuario={dadosUsuarios} buscarUsuarios={buscarUsuarios} />

    </Container>
  )
}