import styles from "./DefaultHeader.module.css"

export default function DefaultHeader() {
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
        </div>
    )
}