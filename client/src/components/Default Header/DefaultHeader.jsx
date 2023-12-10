import { Link } from "react-router-dom"
import styles from "./DefaultHeader.module.css"
import { useContext } from "react"
import AuthContext from "../../contexts/AuthContext.jsx"

export default function DefaultHeader() {
    const { accessToken } = useContext(AuthContext);
    let isAuthenticated = !!accessToken;

    return (
        <div className="sub-banner">
            <nav className="navbar navbar-default">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/">
                            <h1>
                                Infinite <img className={styles["img-logo-white"]} src="/images/logo.png" alt=" " /> Pixels
                            </h1>
                        </Link>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hover-effect">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="hover-effect">
                                <Link to="/games/catalog">Games</Link>
                            </li>

                            {isAuthenticated ?
                                (
                                    <>
                                        <li className="hover-effect">
                                            <Link to="/games/create">Add Game</Link>
                                        </li>
                                        <li className="hover-effect">
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li className="hover-effect">
                                            <Link to="/logout">Logout</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="hover-effect">
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li className="hover-effect">
                                            <Link to="/login">Login</Link>
                                        </li>
                                        <li className="hover-effect">
                                            <Link to="/register">Register</Link>
                                        </li>
                                    </>
                                )}
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}