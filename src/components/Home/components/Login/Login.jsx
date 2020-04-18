import React from 'react';
import styles from './styles';


function Login(login) {
    return (
        <div style={styles.container}>
            <h4>Login: </h4>
            <input type="text" name="name" />
            <h4>Senha: </h4>
            <input type="text" name="senha" />
            <br/>
            <div style={styles.button}>
                <button>Vai!</button>
                <button style={{marginLeft:'5px'}}>Esqueci a Senha</button>
            </div>

        </div>
    )
}

export default Login