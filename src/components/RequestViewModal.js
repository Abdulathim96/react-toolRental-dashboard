import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function RequestViewModal(props) {
  const { show, setShow, request } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Request</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Title:</strong> {request.title}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Description:</strong> {request.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Photo:</strong>{" "}
            <img src={request.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Phone Number:</strong> {request.phoneNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Category:</strong>
            <ListGroup>
              {request.categorys.map(category => (
                <ListGroup.Item>{category.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RequestViewModal
