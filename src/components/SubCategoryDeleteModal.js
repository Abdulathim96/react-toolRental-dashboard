import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function SubCategoryDeleteModal(props) {
  const { deleteSubCategory } = useContext(ToolRentelContext)
  const { show, setShow, subCategoryId, categoryId } = props

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Sub Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Sub Category ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deleteSubCategory(categoryId, subCategoryId)
            setShow(false)
          }}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default SubCategoryDeleteModal
