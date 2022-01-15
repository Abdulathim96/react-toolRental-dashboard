import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function SubCategoryViewModal(props) {
  const { show, setShow, subCategory } = props

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View SubCategory</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup.Item>
          <strong>Name:</strong> {subCategory.name}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Category:</strong> {subCategory.category.name}
        </ListGroup.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default SubCategoryViewModal
