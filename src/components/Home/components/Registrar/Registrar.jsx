import React, { useState, useEffect } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap'

import dataProvider from '../../../../data-provider';

function Registrar() {
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)

  async function onEnterButtonClick() {
    if (login) {

    } else if ((password && confirmPassword) && (password === confirmPassword)) {
      const credentials = { login, password }
      await dataProvider.cadastrar(credentials)
    } else {

    }
  }

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
      <h2 className="text-center">Novo Cadastro</h2>
      <h5 className="text-center">Login</h5>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control onChange={event => setLogin(event.target.value)}
            type="text" placeholder="Digite o Login" name="name" value={login} />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control onChange={event => setPassword(event.target.value)}
            name="senha" value={password} type="password" placeholder="Digite a Senha" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Confirme a Senha</Form.Label>
          <Form.Control onChange={event => setConfirmPassword(event.target.value)}
            name="confirmaSenha" value={confirmPassword} type="password" placeholder="Digite a Senha" />
        </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox">
      </Form.Group>
      <Button className="btn-lg btn-block" onClick={onEnterButtonClick} variant="dark">
        Registrar
      </Button>
    </Form>
  )
}

export default Registrar
