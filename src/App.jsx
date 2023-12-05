import About from "./About/About.jsx"
import Card from "./Card/Card.jsx"
import DefaultHeader from "./Default Header/DefaultHeader.jsx"
import Footer from "./Footer/Footer.jsx"
import HomeHeader from "./Home Header/HomeHeader.jsx"
import Home from "./Home/Home.jsx"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import Login from "./Login/Login.jsx"
import Register from "./Register/Register.jsx"
import AddGame from "./Add Game/AddGame.jsx"
import EditGame from "./Edit Game/EditGame.jsx"
import Error from "./Error/Error.jsx"
import Catalog from "./Catalog/Catalog.jsx"
import Details from "./Details/Details.jsx"


function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
