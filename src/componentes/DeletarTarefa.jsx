// AINDA EM DESENVOLVIMENTO !!!!

import { Container } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from "react"
import axios from "axios";


export default function DeletarTarefa({ show, handleClose, tarefaId, onDeleteSuccess }) {

  const [tarefas, setTarefas] = useState([]);
  const [idTarefa, setIdTarefa] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.delete('http://localhost:8080/tarefas/{id}')
      .then((resposta) => {
        console.log('Tarefa deletada com sucesso.');
      }).catch(error => {
        console.log('A tarefa não pode ser deletada.')
      })
  })


  return (
    <>
      <Container>
        <Modal show={show} onHide={handleClose} size='lg' fullscreen="sm-down">
          <Modal.Header closeButton>
            <Modal.Title>Deletar Tarefa</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              {/* Título do tarefa */}
              <Row className='mb-3'>
                <Form.Group as={Col} xs={12}>
                  <Form.Label>Id</Form.Label>
                  <Form.Control value={idTarefa} onChange={(e) => setIdTarefa(e.target.value)} type="number" />
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
      </Container>
    </>
  )
}