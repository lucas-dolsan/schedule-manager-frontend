import React from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap'


function Cadastro({ cadastro }) {
  return (
    <Form className="login-form"
      style={{
        width: "100%", maxWidth: "530px", padding: "15px",
        margin: "auto", height: "100%", border: "black"
      }}>
      <Row className="justify-content-md-center">
        <Col lg="5">
        </Col>
      </Row>
      <h1 className="text-center">Cadastrar Colaborador</h1>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="email" placeholder="Informe o nome..." />
        </Form.Group>
      </Form.Row>
      <Form.Row>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Matrícula</Form.Label>
          <Form.Control type="password" placeholder="Informe a matrícula..." />
        </Form.Group>
      </Form.Row>


      <Form.Label>Setor</Form.Label>
      <Form.Control as="select" value="Escolha...">
        <option>Escolha...</option>
        <option>Operação</option>
        <option>Elétrica</option>
        <option>Mecânica</option>
      </Form.Control>


      <Form.Group id="formGridCheckbox">
      </Form.Group>
      <Button className="btn-lg btn-block" variant="dark" type="submit">
        Submit
      </Button>

    </Form>
  )
}

export default Cadastro


