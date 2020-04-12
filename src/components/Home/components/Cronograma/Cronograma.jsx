import React from 'react';
import styles from './styles';
import { Atividade } from '../Atividade';

function renderAtividades(atividades) {
    return atividades.map(atividade => <Atividade key= {atividade.uuid} atividade={atividade} /> )
}

function Cronograma({ cronograma }) {
    return (
        <div styles={styles.container}>
            <h3>Data de início agendada: {cronograma.dataInicioAgendada}</h3>
            <h3>Data de início: {cronograma.dataInicio}</h3>
            <h3>Data de fim agendada: {cronograma.dataFimAgendada}</h3>
            <h3>Data de fim: {cronograma.dataFim}</h3>
            {renderAtividades(cronograma.atividades)}
        </div>
    )
}

export default Cronograma