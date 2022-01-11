import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Offers from "./pages/Offers"
import Requests from "./pages/Requests"
import Categorys from "./pages/Categorys"
import Users from "./pages/Users"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import ToolRentelContext from "./utils/ToolRentelContext"

function App() {
  const [offers, setOffers] = useState([])
  const [requests, setRequests] = useState([])
  const [categorys, setCategorys] = useState([])
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  /////////////////////
  /* Get Offer */
  const getOffers = async () => {
    const response = await axios.get("http://localhost:5000/api/offers")
    setOffers(response.data)
  }
  /* Get Offer */
  /////////////////////
  /* Get Request */
  const getRequests = async () => {
    const response = await axios.get("http://localhost:5000/api/requests")
    setRequests(response.data)
  }
  /* Get Request */
  /////////////////////
  /* Get Categorys */
  const getCategorys = async () => {
    const response = await axios.get("http://localhost:5000/api/categorys")
    setCategorys(response.data)
  }
  /* Get Categorys */
  /////////////////////
  /*Get Users*/
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/users", {
      headers: {
        Authorization: localStorage.tokenDashboardOffers,
      },
    })
    setUsers(response.data)
  }
  /*Get Users*/
  /////////////////////
  useEffect(() => {
    getOffers()
    getRequests()
    getCategorys()
    getUsers()
  }, [])

  //___________________________________________________________________________
  /* Offer */
  /* Delete Offer */
  const deleteOffer = async offerId => {
    try {
      await axios.delete(`http://localhost:5000/api/offers/${offerId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardOffers,
        },
      })
      toast.success("offer deleted")
      getOffers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  /* Edit Offer */

  const editOffer = async (e, offerId) => {
    e.preventDefault()
    try {
      const form = e.target

      const categorys = []
      form.elements.categorys.forEach(category => {
        if (category.checked) {
          categorys.push(category.value)
        }
      })

      const offerBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        photo: form.elements.photo.value,
        price: form.elements.price.value,
        phoneNumber: form.elements.phoneNumber.value,
        categorys: categorys,
      }
      await axios.put(`http://localhost:5000/api/offers/${offerId}`, offerBody, {
        headers: {
          Authorization: localStorage.tokenDashboardOffers,
        },
      })
      getOffers()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  /* Add offer */

  const addOffer = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const categorys = []
      form.elements.categorys.forEach(category => {
        if (category.checked) {
          categorys.push(category.value)
        }
      })

      const offerBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        photo: form.elements.photo.value,
        price: form.elements.price.value,
        phoneNumber: form.elements.phoneNumber.value,
        categorys: categorys,
      }
      await axios.post(`http://localhost:5000/api/offers`, offerBody, {
        headers: {
          Authorization: localStorage.tokenDashboardOffers,
        },
      })
      getOffers()
      toast.success("add offer success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /* Offer */

  //___________________________________________________________________________
  /* requests */
  /* Delete requests */
  const deleteRequest = async requestId => {
    try {
      await axios.delete(`http://localhost:5000/api/requests/${requestId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardOffers,
        },
      })
      toast.success("requests deleted")
      getRequests()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /* requests */

  //___________________________________________________________________________
  /* categorys */
  /* Add categorys */
  const addCategory = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const ganraBody = {
        name: form.elements.name.value,
      }
      await axios.post(`http://localhost:5000/api/categorys`, ganraBody, {
        headers: {
          Authorization: localStorage.tokenDashboardOffers,
        },
      })
      getCategorys()
      toast.success("add category success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /*Edit categorys*/
  const editCategory = async (e, categoryId) => {
    e.preventDefault()
    try {
      const form = e.target

      const CategoryBody = {
        name: form.elements.name.value,
      }
      await axios.put(`http://localhost:5000/api/categorys/${categoryId}`, CategoryBody, {
        headers: {
          Authorization: localStorage.tokenDashboardOffers,
        },
      })
      getCategorys()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /*delete categorys*/
  const deleteCategory = async categoryId => {
    try {
      await axios.delete(`http://localhost:5000/api/categorys/${categoryId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardOffers,
        },
      })
      toast.success("Category deleted")
      getCategorys()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //___________________________________________________________________________
  // User //
  /* Delete User */
  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post(`http://localhost:5000/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardOffers,
        },
      })
      getUsers()
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteUser = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardOffers,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login/admin", adminBody)
      localStorage.tokenDashboardOffers = response.data
      toast.success("login success")
      navigate("/users")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenDashboardOffers")

    navigate("/offers")
  }
  // User //

  const store = {
    offers,
    deleteOffer,
    addOffer,
    editOffer,
    requests,
    deleteRequest,
    categorys,
    addCategory,
    editCategory,
    deleteCategory,
    users,
    addAdmin,
    deleteUser,
    login,
    logout,
  }

  return (
    <ToolRentelContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/offers" element={localStorage.tokenDashboardOffers ? <Offers /> : <Navigate to="/login" />} />
            <Route
              path="/requests"
              element={localStorage.tokenDashboardOffers ? <Requests /> : <Navigate to="/login" />}
            />
            <Route
              path="/categorys"
              element={localStorage.tokenDashboardOffers ? <Categorys /> : <Navigate to="/login" />}
            />
            <Route path="/users" element={localStorage.tokenDashboardOffers ? <Users /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </ToolRentelContext.Provider>
  )
}

export default App
