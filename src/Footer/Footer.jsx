import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="col-md-3 footer-left-w3">
                    <h4 className={styles["left-footer"]}>Contact</h4>
                    <ul>
                        <li>
                            <span className="glyphicon glyphicon-envelope" aria-hidden="true" />
                        </li>
                        <li>
                            <h6>emilbankov17d@mail.com</h6>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span className="glyphicon glyphicon-earphone" aria-hidden="true" />
                        </li>
                        <li>
                            <h6>+359 899 507 113</h6>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span
                                className="glyphicon glyphicon-map-marker"
                                aria-hidden="true"
                            />
                        </li>
                        <li>
                            <h6>Plovdiv, Bulgaria</h6>
                        </li>
                    </ul>

                </div>
                <div className="col-md-5 footer-middle-w3">
                    <h4 className={styles["middle-footer"]}>Latest Games</h4>
                    <div className="col-md-3 img-w3-agile">
                        <a href="single.html">
                            <img src="images/ng1.jpg" alt=" " />
                        </a>
                    </div>
                    <div className="col-md-3 img-w3-agile">
                        <a href="single.html">
                            <img src="images/ng2.jpg" alt=" " />
                        </a>
                    </div>
                    <div className="col-md-3 img-w3-agile">
                        <a href="single.html">
                            <img src="images/ng3.jpg" alt=" " />
                        </a>
                    </div>
                    <div className="col-md-3 img-w3-agile">
                        <a href="single.html">
                            <img src="images/ng4.jpg" alt=" " />
                        </a>
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="col-md-4 footer-right-w3">
                    <a href="index.html">
                        <h4 className={styles["right-footer"]}>
                            Infinite <img className={styles["img-logo-black"]} src="images/logo-black.png" alt=" " /> Pixels
                        </h4>
                    </a>
                    <p className="agileinfo">
                        Infinite Pixels: Where Gaming Unleashes Artistry! Your portal to endless entertainment. Immerse in a universe where pixels tell stories, and games are canvases of excitement, elevating your gaming experience.
                    </p>
                </div>
                <div className="clearfix" />
                <div className="copyright">
                    <p>
                        © 2023 Infinite Pixels. All Rights Reserved | Design by{" "}
                        <a href="http://w3layouts.com/" target="_blank">
                            {" "}
                            W3layouts{" "}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}