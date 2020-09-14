import React from "react"
import { Card, Nav, Container, ProgressBar, Col, Form, ListGroup } from 'react-bootstrap'

function AtividadeView({ atividade }) {
    console.log({ atividade })
    const now = 60;

    function dateFormat(date) {
        date = new Date();
        return date.toLocaleString()
    }
    function verInicio(dados, string) {
        console.log(dados)
        if (dados == null && string == 'inicio') {
            return 'Cronograma não iniciado'
        } else if (dados == null && string == 'fim') {
            return 'Cronograma em execução'
        } else {
            return dados
        }
    }
    return (
        <>
            <br />
            <Card.Text>Atividade 1 </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Data de início agendada: {dateFormat(atividade.dataInicioAgendada)}</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Data de fim agendada: {dateFormat(atividade.dataFimAgendada)}</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Data de início: {verInicio(dateFormat(atividade.dataInicio), 'inicio')}</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Data de fim: {verInicio(dateFormat(atividade.dataFim), 'fim')}</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>OS: {atividade.OS}</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>AES: {atividade.AES}</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Card.Text>Descrição Atividade: {atividade.descricao} </Card.Text>
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
