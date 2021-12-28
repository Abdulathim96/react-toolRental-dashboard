import { useState } from "react"
import { Button } from "react-bootstrap"
import RequestDeleteModal from "./RequestDeleteModal"
import RequestViewModal from "./RequestViewModal"

function RequestCell(props) {
  const { request } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{request._id}</td>
      <td>{request.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{request.description}</td>
      <td>
        <img src={request.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <RequestViewModal show={viewShow} setShow={setViewShow} request={request} />
      <RequestDeleteModal show={deleteShow} setShow={setDeleteShow} requestId={request._id} />
    </tr>
  )
}

export default RequestCell
