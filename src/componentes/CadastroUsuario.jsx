import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

export default function CadastroUsuario({ show, handleClose, dadosUsuario, buscarUsuarios }) {

  const [nome, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [status, setStatus] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarsenha, setConfirmarSenha] = useState("");

  const usuario = {
    nome: nome,
    cpf: cpf,
    email: email,
    nascimento: nascimento,
    status: status,
    senha: senha
  }

  useEffect(() => {
    if (dadosUsuario && dadosUsuario.id) {
      setName(dadosUsuario.nome || "");
      setCpf(dadosUsuario.cpf || "");
      setEmail(dadosUsuario.email || "");
      setNascimento(dadosUsuario.nascimento || "");
      setStatus(dadosUsuario.status || "");
    } else {
      setName("");
      setCpf("");
      setEmail("");
      setNascimento("");
      setStatus("");
      setSenha("");
    }
  }, [dadosUsuario, show]);


  // const salvar = () => console.log(usuario);
  async function salvar() {

    const id = dadosUsuario?.id;
    const metodo = id ? 'PUT' : 'POST';
    const url = id ? `http://localhost:8080/usuarios/${id}` : 'http://localhost:8080/usuarios';
    
    try {
      const resposta = await fetch(url, {
        method: metodo,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });

      if (!resposta.ok) {
        const erroData = await resposta.json().catch(() => ({}))
        throw new Error('Erro ao cadastrar novo usuário.');
      }

      const dadosSalvos = await resposta.json();
      alert(`${dadosSalvos.nome} salvo com sucesso.`);
      handleClose();
      if (buscarUsuarios) {
        buscarUsuarios();
      }
    } catch (erro) {
      console.log('Erro na comunicação com a API: ', erro);
      alert('Não foi possível salvar o usuário, tente novamente');
    }
  }

  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>{dadosUsuario?.id ? "Atualizar Usuário" : "Cadastrar Novo Usuário"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>

          {/* Conteudo do Formulário */}
          <Row className='mb-3'>
            <Form.Group>
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control value={nome} onChange={(e) => setName(e.target.value)} type="text" placeholder="Digite seu nome aqui..." />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            {/* Nome */}
            <Form.Group as={Col} xs="5" controlId="formGridEmail">
              <Form.Label>CPF</Form.Label>
              <Form.Control value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" placeholder="Digite seu nome aqui..." />
            </Form.Group>
            <Form.Group as={Col} xs="5" controlId="formGridEmail">
              <Form.Label>Data Nascimento</Form.Label>
              <Form.Control value={nascimento} onChange={(e) => setNascimento(e.target.value)} type="date" />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} xs="5">
              <Form.Label>Email</Form.Label>
              <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder=" @email.com" />
            </Form.Group>
            <Form.Group as={Col} xs="5">
              <Form.Label>Status</Form.Label>
              <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Default select example">
                <option>Selecione</option>
                <option value="ATIVO">Ativo</option>
                <option value="INATIVO">Inativo</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} xs='5'>
              <Form.Label>Senha Temporária</Form.Label>
              <Form.Control value={senha} onChange={(e) => setSenha(e.target.value)} type="password" />
            </Form.Group>
            <Form.Group as={Col} xs='5'>
              <Form.Label>Confirme a senha</Form.Label>
              <Form.Control value={confirmarsenha} onChange={(e) => setConfirmarSenha(e.target.value)} type="password" />
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