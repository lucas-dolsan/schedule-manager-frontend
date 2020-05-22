import React, { useState, useEffect } from "react"
import dataProvider from "../../data-provider"
import endpoints from "../../constants/endpoints"
import { Card, Nav, Container, Button, Collapse } from 'react-bootstrap'
import Cronograma from "./components/Cronograma"
import { NavBar } from "../Home/components/NavBar"

function Cronogramas() {
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
    return null

  return (
    <>
      <NavBar hideMeusCronogramasLink={true} nome={"Meus Cronogramas"} >
        <Nav.Link href="/cronogramas" >Esse</Nav.Link>
      </NavBar>
      <Container>
        <Card className="text-center">
          <Card.Header as="h2">Listagem de Cronogramas</Card.Header>
          <Card.Body>
            {cronogramas.map(cronograma => {
              return <Cronograma key={cronograma.id} cronograma={cronograma} />
            })}
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

export default Cronogramas
