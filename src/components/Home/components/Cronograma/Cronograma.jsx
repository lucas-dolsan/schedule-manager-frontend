import React from 'react';
import { Atividade } from '../Atividade';
import { Encarregado } from '../Encarregado';
import { NavBar } from '../NavBar'
import { TituloAtividade } from '../TituloAtividade'


function renderAtividades(atividades) {
  return atividades.map(atividade => <Atividade key={atividade.uuid} atividade={atividade} />)
}



function Cronograma({ cronograma }) {


  return (
    <div className="container border border-primary" >
      <NavBar logo={cronograma.nome} />

      <table class="table table-hover table-bordered">
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
          </tr>
        </thead>
        <tbody>
          <TituloAtividade />
          {renderAtividades(cronograma.atividades)}
          <TituloAtividade />

        </tbody>
      </table>


    </div>
  )
}

export default Cronograma
