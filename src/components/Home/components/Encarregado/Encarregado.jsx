import React from 'react';
import styles from './styles';
import {Setor} from '../Setor';


function Encarregado(encarregado) {
    return (
        <div styles={{backgroundColor: 'red'}}>
            <h4>Nome: {encarregado.nome}</h4>
            <h4>Matrícula: {encarregado.matricula}</h4>
            <h4>Setor: </h4>
            <Setor setor={encarregado.setor} />
        </div>
    )
}

export default Encarregado