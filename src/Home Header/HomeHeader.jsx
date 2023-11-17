import { Link } from "react-router-dom"
import styles from "./HomeHeader.module.css"
import { useEffect } from "react"

export default function HomeHeader() {
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
                        <a href="index.html">
                            <h1>
                                Infinite <img className={styles["img-logo-white"]} src="images/logo.png" alt=" " /> Pixels
                            </h1>
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hover-effect">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="hover-effect">
                                <Link to="/games">Games</Link>
                            </li>
                            <li className="hover-effect">
                                <Link to="#">Add Game</Link>
                            </li>
                            <li className="hover-effect">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="hover-effect">
                                <Link to="#">Login</Link>
                            </li>
                            <li className="hover-effect">
                                <Link to="#">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="slider">
                <ul className="rslides" id="slider">
                    <li>
                        <img src="images/banner1.jpg" alt="" />
                    </li>
                    <li>
                        <img src="images/banner2.jpg" alt="" />
                    </li>
                    <li>
                        <img src="images/banner3.jpg" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}