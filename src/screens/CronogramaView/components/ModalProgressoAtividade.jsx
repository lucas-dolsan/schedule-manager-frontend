import React, { useState, useEffect } from 'react'
import { Button, Modal, Col, Form } from 'react-bootstrap'
import dataProvider from '../../../../data-provider'
import endpoints from '../../../../constants/endpoints'


function VerticalModal({ show, onHide, setAtividadesCallback }) {
    const [colaboradores, setColaboradores] = useState(null)

    async function submit(setAtividadesCallback, onHideCallback) {

        const atividade = {
            dataInicioAgendada,
            dataFimAgendada,
            descricao,
            observacao,
            OS,
            AES,
            executor,
        }

        setAtividadesCallback(atividade)
        onHideCallback()
    }

    useEffect(() => {
        async function getColaboradores() {
            const { colaboradores } = await dataProvider.getList(endpoints.USERS)
            if (colaboradores.length === 1) {
                setExecutor(colaboradores[0]._id)
            }
            setColaboradores(colaboradores)
        }
        getColaboradores()
    }, [])

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Digite a porcentagem do progresso:</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

function ModalProgressoAtividade({ setAtividadesCallback }) {
    const [modalShow, setModalShow] = React.useState(false)

    return (
        <>
            <VerticalModal
                show={modalShow}
                setAtividadesCallback={setAtividadesCallback}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default ModalProgressoAtividade
