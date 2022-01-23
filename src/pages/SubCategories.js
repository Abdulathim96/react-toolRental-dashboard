import { useContext, useState } from "react"
import { Button, Table } from "react-bootstrap"
import ToolRentelContext from "../utils/ToolRentelContext"
import SubCategoryAddModall from '../components/SubCategoryAddModal'
import AddIcon from "@mui/icons-material/Add"
import SubCategoryCell from "../components/SubCategoryCell"

function SubCategories() {
  const { subCategories } = useContext(ToolRentelContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Sub Categories</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" ,backgroundColor: "rgb(248, 248, 248)" }}>
        <thead>
          <tr style={{backgroundColor: "rgb(44, 52, 64)", color: "#fff"}}>
            <th style={{ width: "20%" }}>ID</th> <th style={{ width: "18%" }}>Name</th>
            <th style={{ width: "38%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subCategories.map(subCategory => (
            <SubCategoryCell key={subCategory._id} subCategory={subCategory} />
          ))}
        </tbody>
        <SubCategoryAddModall show={show} setShow={setShow} />
      </Table>
    </>
  )
}

export default SubCategories
