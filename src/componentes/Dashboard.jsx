import { Container, Card, Button, Form, Col, Row } from "react-bootstrap";

export default function Dashboard() {
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
                        <h3 className="mb-0 fw-bold text-dark">5</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-warning h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">SUPENSO</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">12</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-warning h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">INATIVO</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">7</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-warning h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">CANCELADOS</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">3</h3>
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
                        <h3 className="mb-0 fw-bold text-dark">12</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-primary h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">INATIVO</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">7</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <Card className="shadow-sm border-0 border-start border-4 border-primary h-100">
                      <Card.Header className="text-muted text-uppercase fw-bold mb-2">CANCELADOS</Card.Header>
                      <Card.Body className="mb-3">
                        <h3 className="mb-0 fw-bold text-dark">3</h3>
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