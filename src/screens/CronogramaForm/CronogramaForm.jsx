import React, { useState, useEffect } from 'react';
import {
  Form, Col, Button, Row, Nav, Card, ListGroup, Container
} from 'react-bootstrap'
import { NavBar } from '../Home/components/NavBar'
import { useHistory } from 'react-router-dom'
import { ModalFormAtividade } from './components/ModalFormAtividade'
import dataProvider from '../../data-provider';
import endpoints from '../../constants/endpoints';


function CronogramaForm() {
  const history = useHistory()

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [dataInicioAgendada, setDataInicioAgendada] = useState('')
  const [dataFim, setDataFimAgendada] = useState('')

  function handleChange(event, callback) {
    callback(event.target.value)
  }

  async function submit() {
    await dataProvider.createOne(endpoints.CREATE_CRONOGRAMA, { nome, descricao, dataInicioAgendada, dataFim })
  }

  return (
    <>
      <NavBar hideCrudCronogramaLink={true} nome={"Criar Cronograma"} >
        <Nav.Link href="/cronogramas" >Esse</Nav.Link>
      </NavBar>
      <Container>
        <Card className='mt-5 '>
          <Card.Header >
            <Card.Title >Novo Cronograma</Card.Title>
          </Card.Header>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nome Cronograma</Form.Label>
                    <Form.Control 
                    type="text" 
                    onChange={event => handleChange(event, setNome)}
                    placeholder="Digite o nome do cronograma" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control 
                    type="text" 
                    onChange={event => handleChange(event, setDescricao)}
                    placeholder="Digite a descrição do cronograma" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Data de início agendada</Form.Label>
                    <Form.Control 
                    type="date" 
                    onChange={event => handleChange(event, setDataInicioAgendada)}
                    placeholder="dd/mm/aaaa" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Data final prevista</Form.Label>
                    <Form.Control 
                    type="date" 
                    onChange={event => handleChange(event, setDataFimAgendada)}
                    placeholder="dd/mm/aaaa" />
                  </Form.Group>
                </Form.Row>
                <ModalFormAtividade/>

              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-lg btn-block"
                  onClick={submit}
                  variant="dark"
                >
                  Cadastrar Cronograma
                  </Button>
                <Button
                  className="btn-lg btn-block"
                  variant="link"
                  to="/login"
                  onClick={() => history.push("/cronogramas")}
                >
                  Cancelar
                  </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default CronogramaForm


