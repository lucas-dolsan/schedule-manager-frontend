import React, { useState, useEffect } from 'react'
import { Button, Modal, Col, Form } from 'react-bootstrap'
import dataProvider from '../../../../data-provider'
import endpoints from '../../../../constants/endpoints'


function VerticalModal({ show, onHide, setAtividadesCallback }) {
    const [colaboradores, setColaboradores] = useState(null)
    const [dataInicioAgendada, setDataInicioAgendada] = useState(null)
    const [horaInicioAgendada, setHoraInicioAgendada] = useState(null)
    const [dataFimAgendada, setDataFimAgendada] = useState(null)
    const [horaFimAgendada, setHoraFimAgendada] = useState(null)
    const [descricao, setDescricao] = useState(null)
    const [observacao, setObservacao] = useState(null)
    const [OS, setOS] = useState(null)
    const [AES, setAES] = useState(null)
    const [executor, setExecutor] = useState(null)

    function formatDate(date, time) {
        return new Date(`${date} ${time}`)
    }

    async function submit(setAtividadesCallback, onHideCallback) {

        const atividade = {
            dataInicioAgendada: formatDate(dataInicioAgendada, horaInicioAgendada),
            dataFimAgendada: formatDate(dataFimAgendada, horaFimAgendada),
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
                <Modal.Title>Modal title</Modal.Title>
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

function ModalFormAtividade({ setAtividadesCallback }) {
    const [modalShow, setModalShow] = React.useState(false)

    return (
        <>
            <Button
                className="btn-lg btn-block" variant="dark" onClick={() => setModalShow(true)}>
                Cadastrar Atividade
      </Button>

            <VerticalModal
                show={modalShow}
                setAtividadesCallback={setAtividadesCallback}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default ModalFormAtividade
