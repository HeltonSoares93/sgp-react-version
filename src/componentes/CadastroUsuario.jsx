import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Recebendo show e handleClose como propriedades (desestruturadas)
export default function CadastroUsuario({ show, handleClose }) {

  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar Novo Usuário</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          {/* Conteudo do Formulário */}

          <Row className='mb-3'>
            <Form.Group>
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome aqui..." />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            {/* Nome */}
            <Form.Group as={Col} xs="5" controlId="formGridEmail">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome aqui..." />
            </Form.Group>
            <Form.Group as={Col} xs="5" controlId="formGridEmail">
              <Form.Label>Data Nascimento</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} xs="5">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder=" @email.com" />
            </Form.Group>
            <Form.Group as={Col} xs="5">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecione</option>
                <option value="1">Ativo</option>
                <option value="2">Inativo</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} xs='5'>
              <Form.Label>Senha Temporária</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group as={Col} xs='5'>
              <Form.Label>Confirme a senha</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}