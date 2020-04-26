import React, { useState, useRef } from 'react'
import { Form, Col, Button, Row } from 'react-bootstrap'
import { Modal } from '../Modal'
import { useHistory } from 'react-router-dom'
import dataProvider from '../../../../data-provider'


function Registrar() {
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const history = useHistory()


  async function onEnterButtonClick() {
    if ((password && confirmPassword) && (password === confirmPassword)) {
      const credentials = { login, password }
      const message = await dataProvider.cadastrar(credentials)

      switch (message.message) {
        case 'Senha deve possuir 8 ou mais caracteres':
          openModal('Senha deve possuir 8 ou mais caracteres')
          routeLogin("/registrar")
          break
        case 'Senha deve possuir 30 ou menos caracteres':
          openModal('Senha deve possuir 30 ou menos caracteres')
          routeLogin("/registrar")
          break
        case 'Login deve possuir 5 ou mais caracteres':
          openModal('Login deve possuir 5 ou mais caracteres')
          routeLogin("/registrar")
          break
        case 'Login deve possuir 20 ou menos caracteres':
          openModal('Login deve possuir 20 ou menos caracteres')
          routeLogin("/registrar")
          break
        case 'Login possui caracteres inválidos':
          openModal('Login possui caracteres inválidos')
          routeLogin("/registrar")
          break
        case 'Esse login já foi cadastrado':
          openModal('Esse login já foi cadastrado')
          routeLogin("/registrar")
          break
        default:
          openModal("Registro Realizado com Sucesso!!")
          routeLogin("/login")
      }
    } else {
      openModal("Senha Não Confere")
      routeLogin("/registrar")
    }



  }

  const modalRef = useRef()

  const openModal = (alerta) => {
    modalRef.current.openModal(alerta)
    console.log(modalRef.current)
  }
  const routeLogin = (caminho) => {
    modalRef.current.routerRedirect(caminho)
  }
  const routeLinkLogin = () => {
    history.push('/login')
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
      <h2 className="text-center">Novo Registro</h2>
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
      <Button className="btn-lg btn-block" variant="link" to="/login" onClick={routeLinkLogin}>Login</Button>

      <Modal ref={modalRef}></Modal>
    </Form>

  )
}

export default Registrar
