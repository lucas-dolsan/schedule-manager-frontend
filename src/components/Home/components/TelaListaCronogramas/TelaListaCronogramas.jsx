import React, { useEffect, useState } from 'react';
import { NavBar } from '../NavBar'
import { Nav, Card, Container, Button, setOpen, Collapse, Table } from 'react-bootstrap'
import { Tabela } from '../Tabela'
import { Cronogramas } from '../../../Cronogramas'
import dataProvider from "../../../../data-provider";
import endpoints from "../../../../constants/endpoints";
import { Atividade } from '../Atividade';
import { TituloAtividade } from '../TituloAtividade'




function renderAtividades(atividades) {
  return atividades.map(atividade => <Atividade key={atividade.uuid} atividade={atividade} />)
}

function TelaListaCronogramas() {
  const [cronogramas, setCronogramas] = useState(null);
  useEffect(() => {
    async function getCronogramas() {
      const data = await dataProvider.getList(endpoints.CRONOGRAMAS);
      setCronogramas(data.cronogramas);
    }
    getCronogramas();
  }, []);

  const [open, setOpen] = useState(false);
  // <ListGroup striped bordered hover>
  //{cronogramas ? cronogramas.map(cronograma => (<ListGroup.Item href={`#${cronograma.id}`}>{cronograma.nome}</ListGroup.Item>)) : null}
  //  </ListGroup>

  return (
    <>
      <NavBar hideMeusCronogramasLink={true} nome={"Meus Cronogramas"} >
        <Nav.Link href="/cronogramas" >Esse</Nav.Link>
      </NavBar>

      <Card className="text-center">
        <Card.Header as="h2">Listagem de Cronogramas</Card.Header>
        {cronogramas ? cronogramas.map(cronograma => (
          <>
            <Button className="btn-lg btn-block"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              variant="dark"
            >
              {cronograma.nome}
            </Button>
            <Collapse in={open}>
              <Table striped bordered hover>
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Atividades</th>
                    <th scope="col">AES</th>
                    <th scope="col">Observações</th>
                    <th scope="col">Excutante</th>
                    <th scope="col">Data Início</th>
                    <th scope="col">Hora Início</th>
                    <th scope="col">Duração (Horas)</th>
                    <th scope="col">---</th>
                    <Tabela></Tabela>
                    <Tabela></Tabela>
                    <Tabela></Tabela>
                    <Tabela></Tabela>
                    <Tabela></Tabela>
                  </tr>
                </thead>
                <tbody>
                  <TituloAtividade />
                  {renderAtividades(cronograma.atividades)}
                  <TituloAtividade />

                </tbody>
              </Table>
            </Collapse>
          </>
        )) : null}

      </Card>


    </>
  )
}

export default TelaListaCronogramas
