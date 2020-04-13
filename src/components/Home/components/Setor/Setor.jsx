import React from 'react';
import styles from './styles';

function Setor(setor) {
    return (
        <div styles={{backgroundColor: 'red'}}>
            <h4>Tipo: {setor.tipo}</h4>
        </div>
    )
}

export default Setor