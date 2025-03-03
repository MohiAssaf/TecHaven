import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import ProductDetails from "./pages/ProductDetails"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CreateListing from "./pages/CreateListing"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/create" element={<CreateListing/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
