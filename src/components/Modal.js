
import "./modal.css";

export const Modal = ({children, isOpen, closeModal})=>{
  const handleModalContainerClick = (e) => e.stopPropagation();


  return (

    <article className={`modal${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        
      <button className="modal-close" onClick={closeModal}>
        x 
      </button>
      {children}
      </div>
    </article>

  )
}

// export const Modal = ()=>{

//   return (
//   <Modal.Dialog>
//       <Modal.Header closeButton>
//       <Modal.Title>Modal title</Modal.Title>
//     </Modal.Header>

//     <Modal.Body>
//       <p>Modal body text goes here.</p>
//     </Modal.Body>

//     <Modal.Footer>
//       <Button variant="secondary">Close</Button>      
//     </Modal.Footer>
//   </Modal.Dialog>
  
  
//   )
// }