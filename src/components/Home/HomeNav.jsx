import React, { useRef, useState } from 'react';
import { NavBar } from '../Home/components/NavBar'
import { Jumbotron, Container, Image } from 'react-bootstrap'




function HomeNav() {

  const imagem = require('../../Imagens/Fundo.jpg')
  const modalRef = useRef()

  console.log(modalRef.current)
  const nomeCronograma = (nome) => {
    modalRef.current.nomeCronograma(nome)
  }

  return (
    <>
      <NavBar ref={modalRef}></NavBar>
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
    </p>
      </Container>
    </>
  )
}

export default HomeNav
