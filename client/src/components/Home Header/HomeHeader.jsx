import { Link } from "react-router-dom"
import styles from "./HomeHeader.module.css"
import { useContext, useEffect } from "react"
import AuthContext from "../../contexts/AuthContext.jsx";

export default function HomeHeader() {
    const { accessToken } = useContext(AuthContext);
    const isAuthenticated = !!accessToken;

    useEffect(() => {
        $("#slider").responsiveSlides({
            auto: true,
            autoPlaySpeed: 3000,
            nav: false,
            speed: 1000,
            namespace: "callbacks",
            pager: true,
        });
    }, []);

    return (
        <div className="header">
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
            <div className="slider">
                <ul className="rslides" id="slider">
                    <li>
                        <img src="/images/banner1.jpg" alt="" />
                    </li>
                    <li>
                        <img src="/images/banner2.jpg" alt="" />
                    </li>
                    <li>
                        <img src="/images/banner3.jpg" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}