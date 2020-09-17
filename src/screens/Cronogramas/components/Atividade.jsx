import React from "react"
import { Button, ProgressBar } from 'react-bootstrap'

function Atividade({ atividade }) {
  const now = 60;
    return (
      <div>
        
      <h3>{atividade.numeroItem}</h3>
      <h7>Executor - {atividade.executor ? atividade.executor.nome : ""}</h7>
      <br/>
      <h7>OS - {atividade.OS} - </h7>
      <h7>AES - {atividade.AES}</h7>
      <ProgressBar animated now={now} label={`${now}%`}  />
      </div>

      //<Card style={{ width: '18rem' }}>
      //  <Card.Body>
        //    <Card.Title>{atividade.numeroItem}Titulo</Card.Title>
          //  <Card.Subtitle className="mb-2 text-muted">{atividade.descricao}Teste</Card.Subtitle>
        //</Card.Body>
      //</Card>
  )
}

export default Atividade
