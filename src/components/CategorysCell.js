import { useState } from "react"
import { Button } from "react-bootstrap"
import CategoryDeleteModal from "./CategorysDeleteModal"
import CategoryViewModal from "./CategorysViewModal"

function CategoryCell(props) {
  const { category } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{category._id}</td>
      <td>{category.name}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2">
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <CategoryViewModal show={viewShow} setShow={setViewShow} category={category} />
      <CategoryDeleteModal show={deleteShow} setShow={setDeleteShow} categoryId={category._id} />
    </tr>
  )
}
export default CategoryCell
