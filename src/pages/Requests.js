import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"
import RequestsCell from "../components/RequestsCell"
import AddIcon from "@mui/icons-material/Add"

function Requests() {
  const { requests } = useContext(ToolRentelContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Requests</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button> */}
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Title</th>
            <th style={{ width: "18%" }}>Description</th>
            <th style={{ width: "18%" }}>photo</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <RequestsCell key={request._id} request={request} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Requests
