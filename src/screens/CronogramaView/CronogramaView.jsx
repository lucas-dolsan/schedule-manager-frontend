import React, { useState, useEffect } from "react"
import dataProvider from "../../data-provider"
import endpoints from "../../constants/endpoints"
import { Card, Nav, Container, Col, Form, ListGroup } from 'react-bootstrap'
import Cronograma from "../Cronogramas/components/Cronograma"
import { NavBar } from "../Home/components/NavBar"
import AtividadeView from "./components/AtividadeView"

function CronogramaView(props) {
    const [cronograma, setCronograma] = useState(null)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(props.match.params.id)
        async function getCronograma() {
            const cronograma = await dataProvider.getOne(endpoints.CRONOGRAMAS, props.match.params.id)
            setCronograma(cronograma)

        }
        getCronograma()
    }, [])

    if (!cronograma)
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
                        {/* {cronograma.atividades.map(atividade => <AtividadeView atividade={atividade} />)} */}
                        <AtividadeView />
                        <AtividadeView />
                        <AtividadeView />
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
