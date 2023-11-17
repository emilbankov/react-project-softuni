import About from "./About/About.jsx"
import Card from "./Card/Card.jsx"
import DefaultHeader from "./Default Header/DefaultHeader.jsx"
import Footer from "./Footer/Footer.jsx"
import Games from "./Games/Games.jsx"
import HomeHeader from "./Home Header/HomeHeader.jsx"
import Home from "./Home/Home.jsx"
import { Routes, Route, useLocation } from "react-router-dom"
import Login from "./Login/Login.jsx"
import Register from "./Register/Register.jsx"

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
        <Route path="/games" element={<Games />} />
        <Route path="/games/create" element={<Card />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* <Card /> */}

      <Footer />
    </>

  )
}

export default App
