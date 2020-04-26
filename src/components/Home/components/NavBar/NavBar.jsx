import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


const NavBar = forwardRef((props, ref) => {
  const [value, setValue] = useState("Cu")

  useImperativeHandle(ref, () => {
    return {
      nomeCronograma: (nome) => open(nome),
    }
  })

  const open = (nome) => {
    setValue(nome)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand >Cronograma UHSP: {value}</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/cronogramas" >Meus Cronogramas</Nav.Link>
        <Nav.Link href="/cadastro">Cadrastar Colaborador</Nav.Link>
        <Nav.Link >Sair</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  )
})

export default NavBar
