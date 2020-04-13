import React from 'react';
import styles from './styles';
import {Setor} from '../Setor';

function renderSetor(setor) {
    return setor.map(setor => <Setor key= {setor.uuid} setor={setor} /> )
}

function Encarregado({ encarregado }) {
    console.log(styles.container)

    return (
        <div styles={{backgroundColor: 'red'}}>
            <h4>Nome: {encarregado.nome}</h4>
            <h4>Matrícula: {encarregado.matricula}</h4>
            <h4>Setor: </h4>
            {renderSetor(encarregado.setor)}
            
        </div>
    )
}

export default Encarregado