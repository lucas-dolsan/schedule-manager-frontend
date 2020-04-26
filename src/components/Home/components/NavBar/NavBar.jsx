import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function NavBar({ nome, hideHomeLink }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>{nome}</Navbar.Brand>
      <Nav className="mr-auto">
        {!hideHomeLink && <Nav.Link href="/home">Página inicial</Nav.Link>}
        <Nav.Link href="/cronogramas">Meus Cronogramas</Nav.Link>
        <Nav.Link href="/cadastro">Cadrastar Colaborador</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
        <Button variant="outline-light">Buscar</Button>
      </Form>
      <Nav>
        <Nav.Link className="justify-content-end tc-light">Sair</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
