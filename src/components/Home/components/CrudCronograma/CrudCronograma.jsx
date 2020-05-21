import React from 'react';
import {
  Form, Col, Button, Row, Nav, Card, ListGroup, Container
} from 'react-bootstrap'
import { NavBar } from '../../../../screens/Home/components/NavBar'
import { useHistory } from 'react-router-dom'
import { CrudAtividade } from '../CrudAtividade'


function CrudCronograma({ crudcronograma }) {
  const history = useHistory()

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
                    <Form.Control type="email" placeholder="Digite o nome do cronograma" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Data início</Form.Label>
                    <Form.Control type="password" placeholder="dd/mm/aaaa" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Data final prevista</Form.Label>
                    <Form.Control placeholder="dd/mm/aaaa" />
                  </Form.Group>
                </Form.Row>
                <CrudAtividade></CrudAtividade>

              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-lg btn-block"
                  onClick={"onEnterButtonClick"}
                  variant="dark"
                >
                  Cadastrar Cronograma
                  </Button>
                <Button
                  className="btn-lg btn-block"
                  variant="link"
                  to="/login"
                  onClick={() => history.push("/TelaListaCronogramas")}
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

export default CrudCronograma


