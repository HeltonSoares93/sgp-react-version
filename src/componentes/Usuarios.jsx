import { Container, Card, Button, Col, Form, Row, Table } from "react-bootstrap";
import { useState } from 'react';
import CadastroUsuario from "./CadastroUsuario";
// import { useState } from "react";

export default function Usuarios() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [usuario, setUsuario] = useState({
  //   nome: "",
  //   cpf: "",
  //   nascimento: "",
  //   email: "",
  //   status: "",
  //   senha: ""
  // });
  // const [listaUsuarios, setListaUsuario] = useState([]);

  // function salvarUsuario(e) {
  //   e.preventDefault();

  //   if (!usuario.nome.trim() || !usuario.cpf.trim() || !usuario.email.trim()) {
  //     alert("Os campos nome, cpf e e-mail devem ser preenchidos.");
  //     return;
  //   }

  //   setListaUsuario([...usuario, usuario]);

  //   alert(`${usuario.nome} salvo com sucesso!`);

  //   setUsuario({
  //     nome: "",
  //     cpf: "",
  //     nascimento: "",
  //     email: "",
  //     status: "",
  //     senha: ""
  //   })

  // }


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
            Painel de Usuários
          </h2>
          <Button variant="primary" className="d-flex align-items-center gap-2" onClick={handleShow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
            </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">
                <path d="M5.523 12.424q.21-.124.459-.238a8 8 0 0 1-.45.606c-.28.337-.498.516-.635.572l-.035.012a.3.3 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548m2.455-1.647q-.178.037-.356.078a21 21 0 0 0 .5-1.05 12 12 0 0 0 .51.858q-.326.048-.654.114m2.525.939a4 4 0 0 1-.435-.41q.344.007.612.054c.317.057.466.147.518.209a.1.1 0 0 1 .026.064.44.44 0 0 1-.06.2.3.3 0 0 1-.094.124.1.1 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256M8.278 6.97c-.04.244-.108.524-.2.829a5 5 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.5.5 0 0 1 .145-.04c.013.03.028.092.032.198q.008.183-.038.465z" />
                <path fillRule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.7 11.7 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.86.86 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.84.84 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.8 5.8 0 0 0-1.335-.05 11 11 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.24 1.24 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a20 20 0 0 1-1.062 2.227 7.7 7.7 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103" />
              </svg>
              Exportar PDF
            </Button>

            <Button variant="success" className="d-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-spreadsheet" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4h10V2a1 1 0 0 0-1-1zm9 6h-3v2h3zm0 3h-3v2h3zm0 3h-3v2h2a1 1 0 0 0 1-1zm-4 2v-2H6v2zm-4 0v-2H3v1a1 1 0 0 0 1 1zm-2-3h2v-2H3zm0-3h2V7H3zm3-2v2h3V7zm3 3H6v2h3z" />
              </svg>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Helton</td>
                <td>097.***.***-54</td>
                <td>helton2009@gmail.com</td>
                <td>04/02/1993</td>
                <td>Ativo</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal */}
      <CadastroUsuario show={show} handleClose={handleClose} />


    </Container>
  )
}