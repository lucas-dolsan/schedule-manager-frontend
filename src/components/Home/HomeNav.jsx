import React from 'react';
import { NavBar } from '../Home/components/NavBar'
import { Container } from 'react-bootstrap'




function HomeNav() {

  return (
    <>
      <NavBar nome={"Cronograma UHSP: "} />
      <Container>
        <h1 className="text-center" style={{ marginTop: "250px" }}>Gerenciador de Cronogramas</h1>
        <p className="text-center">
          Uma ótima maneira de organizar seus cronogramas, de maneira rápida e fácil!!!
    </p>
      </Container>
    </>
  )
}

export default HomeNav
