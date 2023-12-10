import { Routes, Route, Navigate, useLocation } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext.jsx"

import DefaultHeader from "./components/Default Header/DefaultHeader.jsx"
import HomeHeader from "./components/Home Header/HomeHeader.jsx"
import Home from "./components/Home/Home.jsx"
import Catalog from "./components/Catalog/Catalog.jsx"
import Details from "./components/Details/Details.jsx"
import EditGame from "./components/Edit Game/EditGame.jsx"
import AddGame from "./components/Add Game/AddGame.jsx"
import About from "./components/About/About.jsx"
import Login from "./components/Login/Login.jsx"
import Logout from "./components/Logout/Logout.jsx"
import Register from "./components/Register/Register.jsx"
import Error from "./components/Error/Error.jsx"
import Footer from "./components/Footer/Footer.jsx"
import MostAnticipated from "./components/Home/MostAnticipated.jsx";

export default function App() {
    const isHomePage = useLocation().pathname === '/';

    return (
        <>
            <AuthProvider>
                {isHomePage ?
                    (
                        <HomeHeader />
                    ) : (
                        <DefaultHeader />
                    )
                }

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/most-anticipated" element={<MostAnticipated />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/games/catalog" element={<Catalog />} />
                    <Route path="/games/create" element={<AddGame />} />
                    <Route path="/games/details/:gameId" element={<Details />} />
                    <Route path="/games/edit/:gameId" element={<EditGame />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/404" element={<Error />} />
                    <Route path="*" element={<Navigate to='/404' />} />
                </Routes>

                <Footer />
            </AuthProvider>
        </>

    )
}