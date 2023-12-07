import { useContext, useEffect } from "react";
import { logout } from "../../services/authService.js";
import AuthContext from "../../contexts/AuthContext.js";

export default function Logout() {
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        logout()
            .then(() => logoutHandler())
    }, []);

    return null;
}