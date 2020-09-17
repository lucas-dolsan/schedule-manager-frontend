import React, { useState, useEffect } from 'react'
import { Button, Modal, Col, Form } from 'react-bootstrap'
import DataProvider from '../../../data-provider'

function ModalProgressoAtividade({ atividade, progressoSetCallback }) {
    const [show, setShow] = useState(false);
    const [progresso, setProgresso] = useState(atividade.progresso)
    const [smallerProgresso, setSmallerProgresso] = useState(false)

     async function onClickSaveButton() {
        await DataProvider.setProgressoAtividade({ atividadeId: atividade._id, progresso })
        setShow(false)
        progressoSetCallback()
    }

    function handleProgressoChange(value) {
        if(value > progresso) {
            setSmallerProgresso(false)
            setProgresso(value)
        } else {
            setSmallerProgresso(true)
        }
    }

    function handleHideModal() {
        setShow(false)
        setSmallerProgresso(false)
        setProgresso(atividade.progresso)
    }

    return (
        <>
            <Button variant="link" style={{ color: 'black' }} onClick={() => setShow(true)}>Definir progresso</Button>
            <Modal show={show} onHide={handleHideModal}
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
                            <Form.Control
                                onChange={event => handleProgressoChange(event.target.value)}
                                style={{ display: 'flex', width: '10rem', margin: 'auto' }}
                                type="number"
                                placeholder="Progresso (%)"
                                centered
                            />
                        </Form.Row>
                        <Form.Row >
                        </Form.Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    {smallerProgresso ? "Progresso menor do que anterior" : null}
                    <Button variant="primary" variant="primary"
                        type='submit'
                        disabled={smallerProgresso}
                        onClick={onClickSaveButton}> Salvar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalProgressoAtividade
