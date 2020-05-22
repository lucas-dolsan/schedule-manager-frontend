import React, { useState, useEffect } from 'react'
import { Button, Modal, Col, Form } from 'react-bootstrap'
import dataProvider from '../../../../data-provider'
import endpoints from '../../../../constants/endpoints'


function VerticalModal(props) {

  const [colaboradores, setColaboradores] = useState(null)

  useEffect(() => {
    async function getColaboradores() {
      const { users } = await dataProvider.getList(endpoints.USERS)
      setColaboradores(users) 
    }
    getColaboradores() 
  }, [])
  return null
  // return (
  //   <Modal
  //     {...props}
  //     size="lg"
  //     aria-labelledby="contained-modal-title-vcenter"
  //     centered
  //   >
  //     <Modal.Header closeButton>
  //       <Modal.Title>Cadastro de atividade</Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body>
  //       <Form>
  //         <Form.Row>
  //           <Form.Group as={Col}>
  //             <Form.Label>Descrição</Form.Label>
  //             <Form.Control type="text" placeholder="Descreva a atividade" />
  //           </Form.Group>
  //         </Form.Row>
  //         <Form.Row>
  //           <Form.Group as={Col}>
  //             <Form.Label>Observações</Form.Label>
  //             <Form.Control type="text" placeholder="Acrescente quaisquer observações" />
  //           </Form.Group>
  //         </Form.Row>
  //         <Form.Row>
  //           <Form.Group as={Col}>
  //             <Form.Label>Data de início da atividade</Form.Label>
  //             <Form.Control type="date" />
  //           </Form.Group>
  //           <Form.Group as={Col}>
  //             <Form.Label>Hora de início da atividade</Form.Label>
  //             <Form.Control type="time" />
  //           </Form.Group>
  //         </Form.Row>
  //         <Form.Row>
  //           <Form.Group as={Col}>
  //             <Form.Label>Data de fim da atividade</Form.Label>
  //             <Form.Control type="date" />
  //           </Form.Group>
  //           <Form.Group as={Col}>
  //             <Form.Label>Hora de fim da atividade</Form.Label>
  //             <Form.Control
  //               type="time"
  //               onChange={event => setOs(event.target.value)}
  //               value={os}
  //             />
  //           </Form.Group>
  //         </Form.Row>

  //         <Form.Row>
  //           <Form.Group as={Col} controlId="formGridCity">
  //             <Form.Label>OS</Form.Label>
  //             <Form.Control
  //               type="text"
  //               onChange={event => setOs(event.target.value)}
  //               value={os}
  //             />
  //           </Form.Group>

  //           <Form.Group as={Col} controlId="formGridZip">
  //             <Form.Label>AES</Form.Label>
  //             <Form.Control
  //               onChange={event => setAes(event.target.value)}
  //               value={aes}
  //               type="text"
  //             />
  //           </Form.Group>

  //           <Form.Group as={Col} controlId="formGridState">
  //             <Form.Label>Responsável</Form.Label>
  //             <Form.Control
  //               as="select"
  //               value={responsavel}
  //               onChange={event => setResponsavel(event.target.value)}
  //             >
  //               {colaboradores ? colaboradores.map(({ nome }) => <option>{nome}</option>) : null}
  //             </Form.Control>
  //           </Form.Group>
  //         </Form.Row>
  //       </Form>
  //     </Modal.Body>
  //     <Modal.Footer>
  //       <Button variant="secondary" onClick={props.onHide}>
  //         Fechar
  //         </Button>
  //       <Button variant="primary" >
  //         Salvar atividade
  //         </Button>
  //     </Modal.Footer>
  //   </Modal>
  // );
}

function ModalFormAtividade() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="btn-lg btn-block" variant="dark" onClick={() => setModalShow(true)}>
        Cadastrar Atividade
      </Button>

      <VerticalModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalFormAtividade
