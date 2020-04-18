import React from 'react';
import styles from './styles';

function Atividade({ atividade }) {
    console.log(styles.container)

    return (
        <div style={styles.container}>
            <h4>Descrição {atividade.descricao}</h4>
            <h4>Observação: {atividade.observacao}</h4>
            <h4>Data de início agendada: {atividade.dataInicioAgendada}</h4>
            <h4>Data de início: {atividade.atividade}</h4>
            <h4>Data de fim agendada: {atividade.dataFimAgendada}</h4>
            <h4>Data de fim: {atividade.dataFim}</h4>
            <h4>Ordem de serviço: {atividade.OS}</h4>
            <h4>AES: {atividade.AES}</h4>
        </div>
    )
}

export default Atividade