import React, { useState, useEffect } from 'react';
import { Form, Col, Button, Row, Card } from 'react-bootstrap'

import dataProvider from '../../../../data-provider';

function Login() {
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)

  async function onEnterButtonClick() {
    const credentials = { login, password }
    await dataProvider.login(credentials)
  }

  return (

    <Form className="login-form"
      style={{
        width: "100%", maxWidth: "530px", padding: "15px",
        margin: "auto", height: "100%", border: "black"
      }}>

      {/*
      <div class="d-flex flex-column bg-light align-items-center mt-4">
        <div style={styles.container}>
        <h4>Login: </h4>
      <input onChange={event => setLogin(event.target.value)} type="text" name="name"
      value={login} />
      <h4>Senha: </h4>
      <input onChange={event => setPassword(event.target.value)} type="text" name="senha"
      value={password} />
      <br />
      <div style={styles.button}>
        <button onClick={onEnterButtonClick}>Entrar</button>
        <button style={{ marginLeft: '5px' }}>Esqueci a Senha</button>
      </div>
    </div>*/}


      <Row className="justify-content-md-center">
        <Col lg="5">
        </Col>
      </Row>
      <h2 className="text-center">Gerenciador de Cronogramas</h2>
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

      <Form.Group id="formGridCheckbox">
      </Form.Group>
      <Button className="btn-lg btn-block" variant="dark" type="submit">
        Submit
      </Button>
      <Button className="btn-lg btn-block" variant="link">
        Cadastrar
      </Button>
    </Form>
  )
}

export default Login
