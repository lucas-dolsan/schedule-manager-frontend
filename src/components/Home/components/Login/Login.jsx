import React, { useState } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap'
import { Modal } from '../Modal'
import { useHistory } from 'react-router-dom'
import dataProvider from '../../../../data-provider';

function Login() {
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)
  const history = useHistory()

  async function onEnterButtonClick() {
    const response = await dataProvider.login({ login, password })
    if (response.accessToken) {
      history.push('/home')
    } else if (response.message) {
      openModal(response.message)
      redirect("/login")
    }
  }

  const routeCadastrar = () => {
    history.push('/registrar')
  }
  const modalRef = React.useRef();

  const openModal = (alerta) => {
    modalRef.current.openModal(alerta)
  };
  const redirect = (caminho) => {
    modalRef.current.routerRedirect(caminho)
  };

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
      <h2 className="text-center">Gerenciador de Cronogramas</h2>
      <h5 className="text-center">Login</h5>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control onChange={event => setLogin(event.target.value)}
            type="text" placeholder="Informe o login..." name="name" value={login} />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control onChange={event => setPassword(event.target.value)}
            name="senha" value={password} type="password" placeholder="Informe a senha..." />
        </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox">
      </Form.Group>
      <Button className="btn-lg btn-block" onClick={onEnterButtonClick} variant="dark">
        Entrar
      </Button>
      <Button className="btn-lg btn-block" variant="link" to="/crudcronograma" onClick={routeCadastrar}>
        Cadastrar
      </Button>
      <Modal ref={modalRef}></Modal>
    </Form>
  )
}

export default Login
