import React, { useState, useEffect } from 'react'
import { Button, Modal, Col, Form } from 'react-bootstrap'
import dataProvider from '../../../../data-provider'
import endpoints from '../../../../constants/endpoints'


function VerticalModal({show, onHide, setAtividadesCallback}) {
  const [colaboradores, setColaboradores] = useState(null)
  const [dataInicioAgendada, setDataInicioAgendada] = useState(null)
  const [horaInicioAgendada, setHoraInicioAgendada] = useState(null)
  const [dataFimAgendada, setDataFimAgendada] = useState(null)
  const [horaFimAgendada, setHoraFimAgendada] = useState(null)
  const [descricao, setDescricao] = useState(null)
  const [observacao, setObservacao] = useState(null)
  const [OS, setOS] = useState(null)
  const [AES, setAES] = useState(null)
  const [executor, setExecutor] = useState(null)

  function formatDate(date, time) {    
    return new Date(`${date} ${time}`)
  }

  async function submit(setAtividadesCallback, onHideCallback) {

    const atividade = {
      dataInicioAgendada: formatDate(dataInicioAgendada, horaInicioAgendada), 
      dataFimAgendada: formatDate(dataFimAgendada, horaFimAgendada),  
      descricao,  
      observacao, 
      OS, 
      AES,  
      executor, 
    }

    setAtividadesCallback(atividade)
    onHideCallback()
  }

  useEffect(() => {
    async function getColaboradores() {
      const { users } = await dataProvider.getList(endpoints.USERS)
      setColaboradores(users) 
    }
    getColaboradores() 
  }, [])

  return (
    <Modal
      show={show}
      onHide={onHide}
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
            <Form.Group as={Col} controlId="formGridDescricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descreva a atividade"
                onChange={event => setDescricao(event.target.value)}
                value={descricao ? descricao : ''}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridObservacao">
              <Form.Label>Observações</Form.Label>
              <Form.Control
                type="text"
                placeholder="Acrescente quaisquer observações"
                onChange={event => setObservacao(event.target.value)}
                value={observacao ? observacao : ''}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridDataInicioAgendada">
              <Form.Label>Data agendada de início da atividade</Form.Label>
              <Form.Control
                type="date"
                onChange={event => setDataInicioAgendada(event.target.value)}
                value={dataInicioAgendada ? dataInicioAgendada : ''}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridHoraAgendada">
              <Form.Label>Hora agendada de início da atividade</Form.Label>
              <Form.Control
                type="time"
                onChange={event => setHoraInicioAgendada(event.target.value)}
                value={horaInicioAgendada ? horaInicioAgendada : ''}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridDataFimAgendada">
              <Form.Label>Data agendada de fim da atividade</Form.Label>
              <Form.Control
                type="date"
                onChange={event => setDataFimAgendada(event.target.value)}
                value={dataFimAgendada ? dataFimAgendada : ''}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridHoraFimAgendada">
              <Form.Label>Hora agendada de fim da atividade</Form.Label>
              <Form.Control
                type="time"
                onChange={event => setHoraFimAgendada(event.target.value)}
                value={horaFimAgendada ? horaFimAgendada : ''}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridOS">
              <Form.Label>OS</Form.Label>
              <Form.Control
                type="text"
                onChange={event => setOS(event.target.value)}
                value={OS ? OS : ''}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="FormGridAES">
              <Form.Label>AES</Form.Label>
              <Form.Control
                onChange={event => setAES(event.target.value)}
                value={AES ? AES : ''}
                type="text"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridExecutor">
              <Form.Label>Executor</Form.Label>
              <Form.Control
                as="select"
                value={executor ? executor : ''}
                onChange={event => setExecutor(event.target.value)}
              >
                {colaboradores ? colaboradores.map(({ nome, id }) => <option key={id}>{nome}</option>) : null}
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={onHide}
        >Fechar</Button>
        <Button
          variant="primary"
          onClick={() => submit(setAtividadesCallback, onHide)}
        >Salvar atividade</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalFormAtividade({ setAtividadesCallback }) {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <Button
        className="btn-lg btn-block" variant="dark" onClick={() => setModalShow(true)}>
        Cadastrar Atividade
      </Button>

      <VerticalModal
        show={modalShow}
        setAtividadesCallback={setAtividadesCallback}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default ModalFormAtividade
