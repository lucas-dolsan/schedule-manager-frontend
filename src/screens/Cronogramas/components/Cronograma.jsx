import React from "react"
import { Card } from 'react-bootstrap'
import Atividade from "./Atividade"

function Cronograma({ cronograma }) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{cronograma.nome}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{cronograma.encarregado.nome}</Card.Subtitle>
            <Card.Text>{cronograma.descricao}</Card.Text>
            {cronograma.atividades.map(atividade => <Atividade atividade={atividade} />)}
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
  )
}

export default Cronograma
