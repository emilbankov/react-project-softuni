import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login, register } from "../services/authService.js";
import * as gamesService from "../services/gamesService.js";
import usePersistedState from "../hooks/usePersistedState.js";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = usePersistedState('auth', {});
    const navigate = useNavigate();
    const [errorFromServer, setErrorFromServer] = useState({});

    const loginHandler = async ({ email, password }) => {
        const result = await login(email, password);

        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);
        navigate("/")
    };

    const registerHandler = async ({ username, email, password }) => {
        try {
            const result = await register(username, email, password);
            setAuth(result);
            localStorage.setItem("accessToken", result.accessToken);
            navigate("/");
            setErrorFromServer({});
        } catch (err) {
            setErrorFromServer(err)
        }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.clear();

        navigate("/");
    };

    const createGameHandler = async ({ title, imageUrl, genre, developer, players, price, description }) => {
        await gamesService.create(title, imageUrl, genre, developer, players, price, description);
        navigate("/games/catalog");
    };

    const values = {
        loginHandler,
        registerHandler,
        logoutHandler,
        createGameHandler,
        errorFromServer,
        ...auth
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;