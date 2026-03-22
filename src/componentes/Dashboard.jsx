import { useEffect, useState } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";

export default function Dashboard() {

  const [projetos, setProjetos] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const [resProjetos, resTarefas, resUsuarios] = await Promise.all([
          fetch('http://localhost:8080/projetos'),
          fetch('http://localhost:8080/tarefas'),
          fetch('http://localhost:8080/usuarios')
        ]);

        if (!resProjetos.ok || !resTarefas.ok || !resUsuarios.ok) {
          throw new Error("Falha ao buscar alguns dados do servidor.");
        }

        const dadosProjetos = await resProjetos.json();
        const dadosTarefas = await resTarefas.json();
        const dadosUsuarios = await resUsuarios.json();

        setProjetos(dadosProjetos);
        setTarefas(dadosTarefas);
        setUsuarios(dadosUsuarios);
      } catch (erro) {
        console.log('Erro ao carregar o dashboard: ', erro);
      }
    };
    carregarDados();
  }, [])

  const totalAtivo = projetos?.filter(p => p.status === 'ATIVO').length || 0;
  const totalSuspenso = projetos?.filter(p => p.status === 'SUSPENSO').length || 0;
  const totalInativo = projetos?.filter(p => p.status === 'INATIVO').length || 0;
  const totalCancelado = projetos?.filter(p => p.status === 'CANCELADO').length || 0;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h2>Dashboard</h2>
        </Card.Header>
        <Card.Body className="mb-3">
          <Card.Title>Painel de Estatísticas</Card.Title>
          <Card.Body>
            <Card>
              <Card.Header>
                <h4>Projetos</h4>
              </Card.Header>
              <Card.Body className="mb-3">
                <Row className="g-3">
                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-warning h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">ATIVO</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">{totalAtivo}</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-warning h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">SUPENSO</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">{totalSuspenso}</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-warning h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">INATIVO</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">{totalInativo}</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-warning h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">CANCELADOS</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">{totalCancelado}</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                </Row>
              </Card.Body>
            </Card>
          </Card.Body>
          <Card.Body>
            <Card>
              <Card.Header>
                <h4>Tarefas</h4>
              </Card.Header>
              <Card.Body className="mb-3">
                <Row className="g-3">
                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-primary h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">ATIVO</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">5</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-primary h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">SUPENSO</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark"></h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-primary h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">INATIVO</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">0</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-primary h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">CANCELADOS</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">0</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                </Row>
              </Card.Body>

            </Card>
          </Card.Body>
          <Card.Body>
            <Card>
              <Card.Header>
                <h4>Usuários</h4>
              </Card.Header>
              <Card.Body className="mb-3">
                <Row className="g-3">
                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-dark h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">TOTAL</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">5</h3>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-dark h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">ATIVO</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">5</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-dark h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">INATIVO</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">12</h3>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Card.Body>

        </Card.Body>
      </Card>
    </Container>
  )
}