import { useState } from "react"
import { Button } from "react-bootstrap"
import OfferDeleteModal from "./OfferDeleteModal"
import OfferEditModal from "./OfferEditModal"
import OfferViewModal from "./OfferViewModal"

function OfferCell(props) {
  const { offer } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{offer._id}</td>
      <td>{offer.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{offer.description}</td>
      <td>
        <img src={offer.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <OfferViewModal show={viewShow} setShow={setViewShow} offer={offer} />
      <OfferDeleteModal show={deleteShow} setShow={setDeleteShow} offerId={offer._id} />
      <OfferEditModal show={editShow} setShow={setEditShow} offer={offer} />
    </tr>
  )
}

export default OfferCell
