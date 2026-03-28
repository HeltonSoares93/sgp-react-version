import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

export default function CadastroProjeto({ show, handleClose, dadosProjeto, buscarProjetos }) {

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataConclusao, setDataConclusao] = useState("");
  const [status, setStatus] = useState("");
  const [responsavel, setResponsavel] = useState("");

  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (dadosProjeto && dadosProjeto.id) {
      setTitulo(dadosProjeto.titulo || "");
      setDescricao(dadosProjeto.descricao || "");
      setDataInicio(dadosProjeto.dataInicio || "");
      setDataConclusao(dadosProjeto.dataConclusao || "");
      setStatus(dadosProjeto.status || "");
      setResponsavel(dadosProjeto.responsavel?.id || "");
    } else {
      setTitulo("");
      setDescricao("");
      setDataInicio("");
      setDataConclusao("");
      setStatus("");
      setResponsavel("");
    }
  }, [dadosProjeto, show])

  useEffect(() => {
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
  }, [])

  const projeto = {
    titulo: titulo,
    descricao: descricao,
    dataInicio: dataInicio,
    dataConclusao: dataConclusao,
    status: status,
    responsavel: {id:Number(responsavel)},
  }

  async function salvar() {
    const id = dadosProjeto?.id;
    const metodo = id ? 'PUT' : 'POST';
    const url = id ? `http://localhost:8080/projetos/${id}` : 'http://localhost:8080/projetos';

    try {
      const resposta = await fetch(url, {
        method: metodo,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(projeto)
      });

      if (!resposta.ok) {
        const erroData = await resposta.json().catch(() => ({}))
        throw new Error('Erro ao cadastrar novo projeto.');
      }

      const dadosSalvos = await resposta.json();
      alert(`${projeto.titulo} salvo com sucesso!`);
      handleClose();

      if (buscarProjetos) {
        buscarProjetos();
      }
    } catch (erro) {
      console.log('Erro na comunicação com a API: ', erro);
      alert('Não foi possível salvar o projeto, tente novamente');
    }
  }

  return (

    <Modal show={show} onHide={handleClose} size='lg' fullscreen="sm-down">
      <Modal.Header closeButton>
        <Modal.Title>{dadosProjeto?.id ? "Atualizar Projeto" : "Cadastrar Novo Projeto"}</Modal.Title>
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
          {/* Data de início do projeto */}
          <Row className='mb-3 g-3'>
            <Form.Group as={Col} xs={12} md={4}>
              <Form.Label>Data de Início</Form.Label>
              <Form.Control value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} type="date" />
            </Form.Group>
            {/* Data de conclusão do projeto */}
            <Form.Group as={Col} xs={12} md={4}>
              <Form.Label>Prazo Conclusão</Form.Label>
              <Form.Control value={dataConclusao} onChange={(e) => setDataConclusao(e.target.value)} type="date" />
            </Form.Group>
            {/* Status do Projeto */}
            <Form.Group as={Col} xs={12} md={4}>
              <Form.Label>Status</Form.Label>
              <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Selecione o status">
                <option>Selecione</option>
                <option value="ATIVO">Ativo</option>
                <option value="INATIVO">Inativo</option>
                <option value="CANCELADO">Cancelado</option>
                <option value="SUSPENSO">Suspenso</option>
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
                {usuarios.map((usuario) => (
                  <option key={usuario.id} value={usuario.id}>{usuario.nome}</option>
                ))}
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