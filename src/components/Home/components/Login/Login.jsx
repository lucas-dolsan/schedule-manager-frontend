import React, { useState, useEffect } from 'react';
import styles from './styles';
import dataProvider from '../../../../data-provider';

function Login() {
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)

  async function onEnterButtonClick() {
    const credentials = { login, password }
    await dataProvider.login(credentials)
  }

  return (
    <div style={styles.container}>
      <h4>Login: </h4>
      <input onChange={event => setLogin(event.target.value)} type="text" name="name" value={login} />
      <h4>Senha: </h4>
      <input onChange={event => setPassword(event.target.value)} type="text" name="senha" value={password} />
      <br />
      <div style={styles.button}>
        <button onClick={onEnterButtonClick}>Entrar</button>
        <button style={{ marginLeft: '5px' }}>Esqueci a Senha</button>
      </div>

    </div>
  )
}

export default Login
