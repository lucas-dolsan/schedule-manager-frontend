import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


function NavBar({ nome }) {


  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand >{nome}</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/cronogramas" >Meus Cronogramas</Nav.Link>
        <Nav.Link href="/cadastro">Cadrastar Colaborador</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
        <Button variant="outline-light">Buscar</Button>
      </Form>
      <Nav >
        <Nav.Link className="justify-content-end tc-light" >Sair</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar
