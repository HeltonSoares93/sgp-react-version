import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CadastroTarefa({ show, handleClose }) {
  return (
    // fullscreen="md-down" é um truque extra: faz o modal ocupar a tela toda no celular e virar janela no tablet/desktop
    <Modal show={show} onHide={handleClose} size='lg' fullscreen="sm-down">
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar Novo Tarefa</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          {/* Título do projeto */}
          <Row className='mb-3'>
            <Form.Group as={Col} xs={12}>
              <Form.Label>Título</Form.Label>
              <Form.Control type="text" placeholder="Digite o título da tarefa..." />
            </Form.Group>
          </Row>

          {/* Descrição do projeto */}
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} controlId="formGridDescricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Descreva brevemente a tarefa..." />
              <Form.Text className="text-muted">
                Máx. 200 caracteres. Atenção: É proibida prolixidade.
              </Form.Text>
            </Form.Group>
          </Row>

          {/* Datas e Status: Adicionado g-3 para espaçamento vertical no mobile */}
          <Row className='mb-3 g-3'>
            {/* xs={12} no celular (100%), md={4} no tablet/desktop (33%) */}
            <Form.Group as={Col} xs={12} md={4}>
              <Form.Label>Data de Início</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            
            <Form.Group as={Col} xs={12} md={4}>
              <Form.Label>Prazo Conclusão</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            
            <Form.Group as={Col} xs={12} md={4}>
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Selecione o status">
                <option>Selecione</option>
                <option value="1">Em Andamento</option>
                <option value="2">Concluído</option>
                <option value="2">Suspenso</option>
                <option value="2">Cancelado</option>
                <option value="2">Pendente</option>
              </Form.Select>
            </Form.Group>
          </Row>

          {/* Responsável */}
          <Row className="g-3">
            {/* Ocupa 100% no celular, e 5 colunas no tablet/desktop */}
            <Form.Group as={Col} xs={12} md={5}>
              <Form.Label>Responsável</Form.Label>
              <Form.Select aria-label="Selecione o responsável">
                <option>Selecione</option>
                <option value="1">Helton</option>
                <option value="2">Soares</option>
                <option value="3">Lima</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} xs={12} md={5}>
              <Form.Label>Atribuir Projeto</Form.Label>
              <Form.Select aria-label="Selecione o responsável">
                <option>Selecione</option>
                <option value="1">Frontend SGP Fullstack</option>
                <option value="2">Banco de Dados do Marktplace</option>
                <option value="3">CRM de Vendas</option>
              </Form.Select>
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