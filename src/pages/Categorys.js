import { useContext, useState } from "react"
import { Button, Table } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"
import CategorysCell from "../components/CategorysCell"
import CategoryAddModal from "../components/CategoryAddModal"
import AddIcon from "@mui/icons-material/Add"

function Categorys() {
  const { categorys } = useContext(ToolRentelContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Categories</h1>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed",backgroundColor: "rgb(248, 248, 248)" }}>
        <thead>
          <tr style={{backgroundColor: "rgb(44, 52, 64)", color: "#fff"}}>
            <th style={{ width: "20%" }}>ID</th> <th style={{ width: "18%" }}>Name</th>
            <th style={{ width: "38%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categorys.map(category => (
            <CategorysCell key={category._id} category={category} />
          ))}
        </tbody>
        <CategoryAddModal show={show} setShow={setShow} />
      </Table>
    </>
  )
}

export default Categorys
