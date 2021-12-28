import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function OfferViewModal(props) {
  const { show, setShow, offer } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Offer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Title:</strong> {offer.title}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Description:</strong> {offer.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Photo:</strong>{" "}
            <img src={offer.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Phone Number:</strong> {offer.phoneNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Price:</strong> {offer.price}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Category:</strong>
            <ListGroup>
              {offer.categorys.map(category => (
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

export default OfferViewModal
