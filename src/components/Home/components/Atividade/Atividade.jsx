import React from 'react';

function Atividade({ atividade }) {
  console.log(atividade.observacao)
  return (
    <tr>
      <th scope="row">{atividade.numeroItem}</th>
      <td>{atividade.descricao}</td>
      <td>{atividade.AES}</td>
      <td>{atividade.observacao}</td>
      <td>{atividade.executor.nome}</td>
      <td>{atividade.dataInicioAgendada}</td>
      <td>{atividade.dataFimAgendada}</td>
      <td>48</td>

    </tr>
  )
}

export default Atividade
