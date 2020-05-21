import React, { useState } from 'react'
import { Button, Modal, Col, Form } from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Cadastro de atividade</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Descrição</Form.Label>
              <Form.Control type="text" placeholder="Descreva a atividade" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Observações</Form.Label>
              <Form.Control type="text" placeholder="Acrescente quaisquer observações" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Data de início da atividade</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Hora de início da atividade</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Data de fim da atividade</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Hora de fim da atividade</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>OS</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>AES</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Responsável</Form.Label>
              <Form.Control as="select" value="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Fechar
          </Button>
        <Button variant="primary" >
          Salvar atividade
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

function CrudAtividade() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="btn-lg btn-block" variant="dark" onClick={() => setModalShow(true)}>
        Cadastrar Atividade
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />


    </>
  );
}

export default CrudAtividade
