import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function CategoryDeleteModal(props) {
  const { deleteCategory } = useContext(ToolRentelContext)
  const { show, setShow, genreId } = props

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete category</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this category ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteCategory(genreId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default CategoryDeleteModal
