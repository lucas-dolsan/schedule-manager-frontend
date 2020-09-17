import React from "react"
import ModalProgressoAtividade from "./ModalProgressoAtividade"
import { Card, Button, Container, ProgressBar, Col, Form, ListGroup } from 'react-bootstrap'

function AtividadeView({ atividade, progressoSetCallback}) {
    function dateFormat(dateString, shouldReturnNull) {
        if(!dateString) {
            if(shouldReturnNull) {
                return null
            } else {
                return ""
            }
        }
        return new Date(dateString).toLocaleString()
    }
    function verInicio(dados, type) {
        if (!dados && type == 'inicio') {
            return 'Atividade não iniciada'
        } else if (!dados && type == 'fim') {
            return 'Atividade não concluída'
        } else {
            return dados
        }
    }
    return (
        <>
            <br />
    <Card.Title style={{fontWeight: 'bold'}}>Atividade: {atividade.numeroItem}</Card.Title>
        <Card.Text>Executor: {atividade.executor.nome}</Card.Text>
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
                            <Form.Label>Data de início: {verInicio(dateFormat(atividade.dataInicio, true), 'inicio')}</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Data de fim: {verInicio(dateFormat(atividade.dataFim, true), 'fim')}</Form.Label>
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
                    <ProgressBar variant="info" animated now={atividade.progresso || 0} label={`${atividade.progresso || 0}%`} />
                    <br />
                    <ModalProgressoAtividade atividade={atividade} progressoSetCallback={progressoSetCallback}/>
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default AtividadeView
