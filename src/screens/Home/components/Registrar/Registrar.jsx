import React, { useState, useRef } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { Modal } from "../Modal";
import { useHistory } from "react-router-dom";
import dataProvider from "../../../../data-provider";

function Registrar() {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [nome, setNome] = useState(null);
  const [matricula, setMatricula] = useState(null);
  const [setor, setSetor] = useState(null);

  const history = useHistory();

  async function onEnterButtonClick() {
    if (password && confirmPassword && password === confirmPassword) {
      const credentials = { login, password, nome, matricula, setor };
      const response = await dataProvider.registerUser(credentials);

      if (response.message) {
        openModal(response.message);
        redirect("/registrar");
      } else if (response.accessToken) {
        localStorage.setItem("accessToken", response.accessToken);
        openModal("Registro realizado com sucesso!");
        redirect("/login");
      }
    } else {
      openModal("Senha não confere");
      redirect("/registrar");
    }
  }

  const modalRef = useRef();

  const openModal = (alerta) => {
    modalRef.current.openModal(alerta);
  };

  const redirect = (caminho) => {
    modalRef.current.routerRedirect(caminho);
  };

  return (
    <Form
      className="login-form"
      style={{
        width: "100%",
        maxWidth: "530px",
        padding: "15px",
        margin: "auto",
        height: "100%",
        border: "black",
      }}
    >
      <Row className="justify-content-md-center">
        <Col lg="5"></Col>
      </Row>
      <h2 className="text-center">Novo Registro</h2>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control
            onChange={(event) => setLogin(event.target.value)}
            type="text"
            placeholder="Informe o login..."
            name="name"
            value={login}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            onChange={(event) => setPassword(event.target.value)}
            name="senha"
            value={password}
            type="password"
            placeholder="Informe a senha..."
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Confirme a senha</Form.Label>
          <Form.Control
            onChange={(event) => setConfirmPassword(event.target.value)}
            name="confirmaSenha"
            value={confirmPassword}
            type="password"
            placeholder="Informe a senha..."
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            onChange={(event) => setNome(event.target.value)}
            name="nome"
            value={nome}
            type="text"
            placeholder="Informe o nome..."
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridMatricula">
          <Form.Label>Matrícula</Form.Label>
          <Form.Control
            onChange={(event) => setMatricula(event.target.value)}
            name="confirmaSenha"
            value={matricula}
            type="text"
            placeholder="Informe a matrícula..."
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridSetor">
              <Form.Label>Setor</Form.Label>
              <Form.Control
                name="setor"
                as="select"
                onChange={(event) => setSetor(event.target.value)}
                value={setor}
              >
                <option>Mecânica</option>
                <option>Elétrica</option>
              </Form.Control>
          </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox"></Form.Group>
      <Button
        className="btn-lg btn-block"
        onClick={onEnterButtonClick}
        variant="dark"
      >
        Registrar-se
      </Button>
      <Button
        className="btn-lg btn-block"
        variant="link"
        to="/login"
        onClick={() => history.push("/login")}
      >
        Login
      </Button>

      <Modal ref={modalRef}></Modal>
    </Form>
  );
}

export default Registrar;
