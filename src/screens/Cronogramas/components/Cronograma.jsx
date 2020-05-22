import React, { useState } from "react"
import { Card, Accordion, Button } from 'react-bootstrap'
import Atividade from "./Atividade"

function Cronograma({ cronograma }) {
  return (
    <>
      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0" className="bg-dark text-white">
            {cronograma.nome}
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">{"cronograma.encarregado.nome"}</Card.Subtitle>
              <Card.Text>{cronograma.descricao}</Card.Text>
              {cronograma.atividades.map(atividade => <Atividade atividade={atividade} />)}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}

export default Cronograma
