import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function SubCategoryEditModal(props) {
  const { show, setShow, subCategory } = props
  const { editSubCategory } = useContext(ToolRentelContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editSubCategory(e, subCategory.category._id, subCategory._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Film</Modal.Title>
        </Modal.Header>
        <Form.Group as={Row} className="mb-3">
          <Form.Label md="3">Name</Form.Label>
          <Col md="8">
            <Form.Control type="text" name="name" defaultValue={subCategory.name} required />
          </Col>
        </Form.Group>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default SubCategoryEditModal
