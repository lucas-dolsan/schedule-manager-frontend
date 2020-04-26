import React, { useState, forwardRef, useImperativeHandle } from "react"
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

var caminho = ""
const Alerta = forwardRef((props, ref) => {
  const [show, setShow] = useState(false)
  const history = useHistory()
  const [value, setValue] = useState("false")

  useImperativeHandle(ref, () => {
    return {
      openModal: (alerta) => open(alerta),
      close: () => close(),
      routerRedirect: (caminho) => redirecionar(caminho)
    }
  })

  const open = (alerta) => {
    setShow(true)
    setValue(alerta)
  }

  const close = () => {
    setShow(false)
    history.push(caminho)
  }

  const redirecionar = (caminhos) => {
    caminho = caminhos
  }

  if (show) {
    return (
      <>
        <Modal show={show} onHide={() => setShow(false)} animation={false}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body className="text-center">
            {value}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    )
  }

  return null

})

export default Alerta
