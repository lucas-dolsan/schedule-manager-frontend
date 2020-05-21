import React from "react"
import { Card } from 'react-bootstrap'

function Atividade({ atividade }) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{atividade.numeroItem}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{atividade.descricao}</Card.Subtitle>
        </Card.Body>
      </Card>
  )
}

export default Atividade
