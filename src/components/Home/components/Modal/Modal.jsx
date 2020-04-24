import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'

function Alerta() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Launch demo modal
        </Button>

      <Modal show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(() => setShow(false))}>
            Close
            </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}
export default Alerta
