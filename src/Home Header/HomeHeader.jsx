import styles from "./HomeHeader.module.css"

export default function HomeHeader() {
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
                                <a href="index.html">Home</a>
                            </li>
                            <li className="hover-effect">
                                <a href="games.html">Games</a>
                            </li>
                            <li className="hover-effect">
                                <a href="#">Add Game</a>
                            </li>
                            <li className="hover-effect">
                                <a href="about.html">About</a>
                            </li>
                            <li className="hover-effect">
                                <a href="#">Login</a>
                            </li>
                            <li className="hover-effect">
                                <a href="#">Register</a>
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