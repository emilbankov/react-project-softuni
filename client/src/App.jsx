import { useState } from "react"
import { Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom"

import { login, register } from "./services/authService.js";
import AuthContext from "./contexts/AuthContext.js"

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

function App() {
    const navigate = useNavigate();
    const isHomePage = useLocation().pathname === '/';
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem("accessToken");

        return {};
    });

    const loginHandler = async ({ email, password }) => {
        const result = await login(email, password);

        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);
        navigate("/")
    };

    const registerHandler = async ({ username, email, password }) => {
        const result = await register(username, email, password);

        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);
        navigate("/");
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.clear();
        navigate("/");
    };

    return (
        <>
            <AuthContext.Provider value={{ loginHandler, registerHandler, logoutHandler, ...auth }}>
                {isHomePage ?
                    (
                        <HomeHeader />
                    ) : (
                        <DefaultHeader />
                    )
                };

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

                <Footer />
            </AuthContext.Provider>
        </>

    )
}

export default App
