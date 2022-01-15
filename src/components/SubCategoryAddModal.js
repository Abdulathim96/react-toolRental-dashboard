import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"

function SubCategoryAddModal(props) {
  const { show, setShow } = props
  const { categorys,addsubCategory } = useContext(ToolRentelContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addsubCategory}>
        <Modal.Header closeButton>
          <Modal.Title>add sub Category</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              name
            </Form.Label>

            <Col md="8">
              <Form.Control type="text" name="name" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Category
            </Form.Label>
            <Col md="8">
              {categorys.map(categoryObject => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="categorys" value={categoryObject._id} />
                  </Col>
                  <Col md="2">
                    <span>{categoryObject.name}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>

          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add SubCategory
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default SubCategoryAddModal
