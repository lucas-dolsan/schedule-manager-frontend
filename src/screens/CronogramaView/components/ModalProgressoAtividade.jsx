import React, { useState, useEffect } from 'react'
import { Button, Modal, Col, Form } from 'react-bootstrap'

function ModalProgressoAtividade({ setAtividadesCallback }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = React.useState(false)



    return (
        <>

            <Button variant="link" style={{ color: 'black' }} onClick={handleShow}>Definir Progresso</Button>

            <Modal show={show} onHide={handleClose}

                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Progresso da Atividade</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form style={{}}>
                        <Form.Row >
                            <Form.Label  >Informe a porcentagem do progresso da atividade:</Form.Label>
                            <Form.Control style={{ display: 'flex', width: '10rem', margin: 'auto' }} type="number" placeholder="Porcentagem" centered />
                        </Form.Row>
                        <Form.Row >
                        </Form.Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" variant="primary"
                        type='submit'
                        onClick={handleClose}> Salvar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalProgressoAtividade
