import React, { useState, useEffect } from "react"
import dataProvider from "../../data-provider"
import endpoints from "../../constants/endpoints"
import { Card, Container, Col, Form, ListGroup, ProgressBar } from 'react-bootstrap'
import { NavBar } from "../Home/components/NavBar"
import AtividadeView from "./components/AtividadeView"

function CronogramaView(props) {
    const [cronograma, setCronograma] = useState(null)

    useEffect(() => {
        async function getCronograma() {
            const { cronograma } = await dataProvider.getOne(endpoints.CRONOGRAMAS, props.match.params.id)
            setCronograma(cronograma)
        }
        getCronograma()
    }, [])

    async function progressoSetCallback() {
        const { cronograma } = await dataProvider.getOne(endpoints.CRONOGRAMAS, props.match.params.id)
        setCronograma(cronograma)    
    }

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
            return 'Cronograma não iniciado'
        } else if (!dados && type == 'fim') {
            return 'Cronograma não concluído'
        } else {
            return dados
        }
    }

    if(!cronograma) {
        return null
    }

    return (
        <>
            <NavBar hideHomeLink={true} nome={"Cronogramas UHSP "} >
            </NavBar>
            <Container>
                <Card className="text-center">
                    <Card.Header as="h2">{cronograma ? cronograma.nome : null}</Card.Header>
                    <ProgressBar variant="success" animated now={cronograma.progresso || 0} label={`${cronograma.progresso || 0}%`} />
                    <Card.Body>
                        <Card.Title>Encarregado: {cronograma.encarregado.nome}</Card.Title>
                        <Card.Subtitle>Descrição do Cronograma: {cronograma.descricao}</Card.Subtitle>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Data de início agendada: {dateFormat(cronograma.dataInicioAgendada)}</Form.Label>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Data de Término agendada: {dateFormat(cronograma.dataFimAgendada)}</Form.Label>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Data de início: {verInicio(dateFormat(cronograma.dataInicio, true), 'inicio')}</Form.Label>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Data de Término: {verInicio(dateFormat(cronograma.dataFim, true), 'fim')}</Form.Label>
                                    </Form.Group>
                                </Form.Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <div>
                            {cronograma.atividades ? cronograma.atividades.map(atividade => <AtividadeView atividade={atividade} progressoSetCallback={progressoSetCallback} />) : null}
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default CronogramaView
