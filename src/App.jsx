import About from "./About/About.jsx"
import Card from "./Card/Card.jsx"
import DefaultHeader from "./Default Header/DefaultHeader.jsx"
import Footer from "./Footer/Footer.jsx"
import Games from "./Games/Games.jsx"
import HomeHeader from "./Home Header/HomeHeader.jsx"
import Home from "./Home/Home.jsx"
import { Routes, Route, useLocation } from "react-router-dom"

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
      </Routes>

      {/* <Card /> */}

      <Footer />
    </>

  )
}

export default App
