import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import About from "./components/About/About.jsx"
import Card from "./components/Card/Card.jsx"
import DefaultHeader from "./components/Default Header/DefaultHeader.jsx"
import HomeHeader from "./components/Home Header/HomeHeader.jsx"
import Home from "./components/Home/Home.jsx"
import Catalog from "./components/Catalog/Catalog.jsx"
import Details from "./components/Details/Details.jsx"
import EditGame from "./components/Edit Game/EditGame.jsx"
import AddGame from "./components/Add Game/AddGame.jsx"
import Login from "./components/Login/Login.jsx"
import Register from "./components/Register/Register.jsx"
import Error from "./components/Error/Error.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Logout from "./components/Logout/Logout.jsx"

function App() {
  const isHomePage = useLocation().pathname === '/';
  
  return (
    <>
      {isHomePage ?
        (
          <HomeHeader />
        ) : (
          <DefaultHeader />
        )
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games/catalog" element={<Catalog />} />
        <Route path="/games/details" element={<Details />} />
        <Route path="/games/create" element={<AddGame />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to='/404' />} />
      </Routes>

      {/* <Card /> */}

      <Footer />
    </>

  )
}

export default App
