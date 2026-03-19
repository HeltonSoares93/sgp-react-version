import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export default function CadastroProjeto({ show, handleClose }) {

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataConclusao, setDataConclusao] = useState("");
  const [status, setStatus] = useState("");
  const [responsavel, setResponsavel] = useState("");

  const projeto = {
    id: Date.now(),
    titulo: titulo,
    descricao: descricao,
    dataInicio: dataInicio,
    dataConclusao: dataConclusao,
    status: status,
    responsavel: responsavel,
  }

  function salvar() {
    alert(`${projeto.titulo} salvo com sucesso!`);
    console.log(projeto);
  }

  return (

    <Modal show={show} onHide={handleClose} size='lg' fullscreen="sm-down">
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar Novo Projeto</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          {/* Título do projeto */}
          <Row className='mb-3'>
            <Form.Group as={Col} xs={12}>
              <Form.Label>Título</Form.Label>
              <Form.Control value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" placeholder="Digite o título do projeto..." />
            </Form.Group>
          </Row>

          {/* Descrição do projeto */}
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} controlId="formGridDescricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control value={descricao} onChange={(e) => setDescricao(e.target.value)} as="textarea" rows={3} placeholder="Descreva brevemente o projeto..." />
              <Form.Text className="text-muted">
                Máx. 200 caracteres. Atenção: É proibida prolixidade.
              </Form.Text>
            </Form.Group>
          </Row>

          <Row className='mb-3 g-3'>
            <Form.Group as={Col} xs={12} md={4}>
              <Form.Label>Data de Início</Form.Label>
              <Form.Control value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} type="date" />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={4}>
              <Form.Label>Prazo Conclusão</Form.Label>
              <Form.Control value={dataConclusao} onChange={(e) => setDataConclusao(e.target.value)} type="date" />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={4}>
              <Form.Label>Status</Form.Label>
              <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Selecione o status">
                <option>Selecione</option>
                <option value="1">Ativo</option>
                <option value="2">Inativo</option>
              </Form.Select>
            </Form.Group>
          </Row>

          {/* Responsável */}
          <Row className="g-3">
            {/* Ocupa 100% no celular, e 5 colunas no tablet/desktop */}
            <Form.Group as={Col} xs={12} md={5}>
              <Form.Label>Responsável</Form.Label>
              <Form.Select value={responsavel} onChange={(e) => setResponsavel(e.target.value)} aria-label="Selecione o responsável">
                <option>Selecione</option>
                <option value="1">Helton</option>
                <option value="2">Soares</option>
                <option value="3">Lima</option>
              </Form.Select>
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={salvar}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}