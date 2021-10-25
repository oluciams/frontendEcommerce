import { useModal } from "../customHooks/useModal"
import { Modal } from "./Modal"


export const Modals = ()=>{

  const {isOpen, openModal, closeModal} = useModal(true)
  console.log(isOpen)


  return (
    <div>
      <button onClick={openModal}>Modal</button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <p>Modal</p>
        <img src="https://placeimg.com/200/200/animals" alt="Animals"/>
      </Modal>
    </div>
  )
}