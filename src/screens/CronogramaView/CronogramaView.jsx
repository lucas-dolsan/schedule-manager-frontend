import React, { useState, useEffect } from "react"
import dataProvider from "../../data-provider"
import endpoints from "../../constants/endpoints"
import { Card, Nav, Container, ProgressBar, Col, Form, ListGroup } from 'react-bootstrap'
import Cronograma from "../Cronogramas/components/Cronograma"
import { NavBar } from "../Home/components/NavBar"

function CronogramaView() {
    const [cronogramas, setCronogramas] = useState(null)
    const [open, setOpen] = useState(false);

    useEffect(() => {

        async function getCronogramas() {
            const { cronogramas } = await dataProvider.getList(endpoints.CRONOGRAMAS)
            setCronogramas(cronogramas)
        }
        getCronogramas()
    }, [])

    if (!cronogramas)
        return (
            <>
                <NavBar hideHomeLink={true} nome={"Cronogramas UHSP "} >
                    <Nav.Link href="/cronogramas" >Esse</Nav.Link>
                </NavBar>
                <Container>
                    <Card className="text-center">
                        <Card.Header as="h2">Nenhum cronograma cadastrado</Card.Header>
                    </Card>
                </Container>
            </>
        )

    return (
        <>
            <NavBar hideHomeLink={true} nome={"Cronogramas UHSP "} >
                <Nav.Link href="/cronogramas" >Esse</Nav.Link>
            </NavBar>
            <Container>
                <Card className="text-center">
                    <Card.Header as="h2">Nome do Cronograma</Card.Header>
                    <Card.Body>
                        <Card.Title>Encarregado: Rodrigo Souza Tassoni</Card.Title>
                        <Card.Subtitle>Descrição do Cronograma</Card.Subtitle>
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
                            </ListGroup.Item>


                        </ListGroup>
                        <Card.Text>Atividade 1 </Card.Text>
                        <Card.Text>Descrição Atividade </Card.Text>
                        <ProgressBar animated now={60} label={`${60}%`} />
                        <br />
                        <Card.Text>Atividade 2 </Card.Text>
                        <Card.Text>Descrição Atividade </Card.Text>
                        <ProgressBar animated now={76} label={`${76}%`} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    )



    return (
        <>

        </>
    )
}

export default CronogramaView
