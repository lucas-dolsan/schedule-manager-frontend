import React, { useState, useEffect } from "react"
import dataProvider from "../../data-provider"
import endpoints from "../../constants/endpoints"
import { Card, Nav, Container, Col, Form, ListGroup, Button } from 'react-bootstrap'
import { NavBar } from "../Home/components/NavBar"
import AtividadeView from "./components/AtividadeView"

function CronogramaView(props) {
    const [cronograma, setCronograma] = useState(null)
    const [open, setOpen] = useState(false);
    const [iniciado, setIniciado] = useState(false)

    useEffect(() => {
        async function getCronograma() {
            const { cronograma } = await dataProvider.getOne(endpoints.CRONOGRAMAS, props.match.params.id)
            setCronograma(cronograma)
        }
        getCronograma()
    }, [])

    function dateFormat(date) {
        date = new Date();
        return date.toLocaleString()
    }
    function verInicio(dados, string) {
        if (dados == null && string == 'inicio') {
            return 'Cronograma não iniciado'
        } else if (dados == null && string == 'fim') {
            return 'Cronograma em execução'
        } else {
            return dados
        }
    }
    async function iniciarCronograma() {
        const response = await dataProvider.registerUser(cronograma.id);
        if (response.success) {
            setIniciado(true)
        }
    }



    return (
        <>
            <NavBar hideHomeLink={true} nome={"Cronogramas UHSP "} >
                <Nav.Link href="/cronogramas" >Esse</Nav.Link>
            </NavBar>
            <Container>
                <Card className="text-center">
                    <Card.Header as="h2">{cronograma ? cronograma.nome : null}</Card.Header>
                    <Button variant='secondary'>Iniciar cronograma</Button>
                    {/*{cronograma.iniciado ?  <Button onClick='iniciarCronograma()' variant='secondary' id='iniciarCron'>Iniciar cronograma</Button> : null}*/}
                    <Card.Body>
                        <Card.Title>Encarregado: Rodrigo Souza Tassoni</Card.Title>
                        <Card.Subtitle>Descrição do Cronograma: {cronograma ? dateFormat(cronograma.descricao) : null}</Card.Subtitle>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Data de início agendada: {cronograma ? dateFormat(cronograma.dataInicioAgendada) : null}</Form.Label>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Data de Término agendada: {cronograma ? dateFormat(cronograma.dataFimAgendada) : null}</Form.Label>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Data de início: {cronograma ? verInicio(dateFormat(cronograma.dataInicio), 'inicio') : null}</Form.Label>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Data de Término: {cronograma ? verInicio(dateFormat(cronograma.dataFimAgendada), 'fim') : null}</Form.Label>
                                    </Form.Group>
                                </Form.Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <div>
                            {cronograma && cronograma.atividades ? cronograma.atividades.map(atividade => <AtividadeView atividade={atividade} />) : null}
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default CronogramaView
