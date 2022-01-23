import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"
import OfferCell from "../components/OfferCell"
import AddIcon from "@mui/icons-material/Add"

function Offers() {
  const { offers } = useContext(ToolRentelContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Offers</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed",backgroundColor: "rgb(248, 248, 248)" }}>
        <thead>
          <tr style={{backgroundColor: "rgb(44, 52, 64)", color: "#fff"}}>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Title</th>
            <th style={{ width: "18%" }}>Description</th>
            <th style={{ width: "18%" }}>photo</th>
            <th style={{ width: "23%" }}>Actions</th>

          </tr>
        </thead>
        <tbody>
          {offers.map(offer => (
            <OfferCell key={offer._id} offer={offer} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Offers
