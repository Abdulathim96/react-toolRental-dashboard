import { useState } from "react"
import { Button } from "react-bootstrap"
import SubCategoryDeleteModal from "./SubCategoryDeleteModal"
import SubCategoryViewModal from "./SubCategoryViewModal"
import SubCategoryEditModal from "./SubCategoryEditModal"

function SubCategoryCell(props) {
  const { subCategory } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{subCategory._id}</td>
      <td>{subCategory.name}</td>
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
      <SubCategoryViewModal show={viewShow} setShow={setViewShow} subCategory={subCategory} />
      <SubCategoryDeleteModal show={deleteShow} setShow={setDeleteShow} subCategoryId={subCategory._id} categoryId={subCategory.category._id} />
      <SubCategoryEditModal show={editShow} setShow={setEditShow} subCategory={subCategory} />
    </tr>
  )
}
export default SubCategoryCell
