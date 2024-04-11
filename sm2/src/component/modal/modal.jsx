import { useState } from "react"
import Modal from 'react-modal'
import CreatePage from '../../page/add/add'
import Btn from "../btn/btn"

export default function ModalWindow(){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    function closeModal(){
        setModalIsOpen(false)
    }

    return(

        <Modal isOpen={modalIsOpen}>
            <Btn title='закрыть' onclick={closeModal}/>
            <CreatePage />
        </Modal>
    )
}