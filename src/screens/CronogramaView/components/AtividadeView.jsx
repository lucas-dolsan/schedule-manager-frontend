import React from "react"
import { Card, Nav, Container, ProgressBar, Col, Form, ListGroup } from 'react-bootstrap'

function AtividadeView({ atividade }) {
    const now = 60;
    return (
        <>
            <br />
            <Card.Text>Atividade 1 </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Data de início agendada: dd/mm/aaaa</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Data de fim agendada: dd/mm/aaaa</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Data de início: dd/mm/aaaa</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Data de fim: dd/mm/aaaa</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>OS: 0000</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>AES: 0000</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Card.Text>Descrição Atividade </Card.Text>
                    <ProgressBar animated now={60} label={`${60}%`} />
                    <br />
                </ListGroup.Item>
            </ListGroup>
        </>
        //    <div>
        //
        //          <h3>{atividade.numeroItem}</h3>
        //        <h7>Executor - {atividade.executor.nome}</h7>
        //      <br />
        //    <h7>OS - {atividade.OS} - </h7>
        //  <h7>AES - {atividade.AES}</h7>
        //<ProgressBar animated now={now} label={`${now}%`} />
        // </div>

        //<Card style={{ width: '18rem' }}>
        //  <Card.Body>
        //    <Card.Title>{atividade.numeroItem}Titulo</Card.Title>
        //  <Card.Subtitle className="mb-2 text-muted">{atividade.descricao}Teste</Card.Subtitle>
        //</Card.Body>
        //</Card>
    )
}

export default AtividadeView
