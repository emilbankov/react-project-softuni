import styles from "./App.module.css"

function App() {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <a href="index.html">
                <h1>
                  Infinite <img className={styles.img} src="images/logo.png" alt=" " /> Pixels
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
      <div className="trend-w3layouts">
        <div className="container">
          <h2>Trending Games</h2>
          <ul id="flexiselDemo1">
            <li>
              <div className="trend-grid">
                <h4>Racing Games</h4>
                <img src="images/tg1.jpg" alt=" " className="img-responsive" />
              </div>
            </li>
            <li>
              <div className="trend-grid">
                <h4>3D Games</h4>
                <img src="images/tg2.jpg" alt=" " className="img-responsive" />
              </div>
            </li>
            <li>
              <div className="trend-grid">
                <h4>Action Games</h4>
                <img src="images/tg3.jpg" alt=" " className="img-responsive" />
              </div>
            </li>
            <li>
              <div className="trend-grid">
                <h4>Toy Games</h4>
                <img src="images/tg4.jpg" alt=" " className="img-responsive" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="new-w3-agile">
        <div className="container">
          <h3>New Games</h3>
          <div className="col-md-3 new-grid-w3l view view-eighth">
            <img src="images/ng1.jpg" alt=" " />
            <div className="mask">
              <a href="single.html">
                <h4>Click here</h4>
              </a>
              <p>To learn more about this</p>
            </div>
          </div>
          <div className="col-md-3 new-grid-w3l view view-eighth">
            <img src="images/ng2.jpg" alt=" " />
            <div className="mask">
              <a href="single.html">
                <h4>Click here</h4>
              </a>
              <p>To learn more about this</p>
            </div>
          </div>
          <div className="col-md-3 new-grid-w3l view view-eighth">
            <img src="images/ng3.jpg" alt=" " />
            <div className="mask">
              <a href="single.html">
                <h4>Click here</h4>
              </a>
              <p>To learn more about this</p>
            </div>
          </div>
          <div className="col-md-3 new-grid-w3l view view-eighth">
            <img src="images/ng4.jpg" alt=" " />
            <div className="mask">
              <a href="single.html">
                <h4>Click here</h4>
              </a>
              <p>To learn more about this</p>
            </div>
          </div>
          <div className="col-md-3 new-grid-agile view view-eighth">
            <img src="images/ng5.jpg" alt=" " />
            <div className="mask">
              <a href="single.html">
                <h4>Click here</h4>
              </a>
              <p>To learn more about this</p>
            </div>
          </div>
          <div className="col-md-3 new-grid-agile view view-eighth">
            <img src="images/ng6.jpg" alt=" " />
            <div className="mask">
              <a href="single.html">
                <h4>Click here</h4>
              </a>
              <p>To learn more about this</p>
            </div>
          </div>
          <div className="col-md-3 new-grid-agile view view-eighth">
            <img src="images/ng7.jpg" alt=" " />
            <div className="mask">
              <a href="single.html">
                <h4>Click here</h4>
              </a>
              <p>To learn more about this</p>
            </div>
          </div>
          <div className="col-md-3 new-grid-agile view view-eighth">
            <img src="images/ng8.jpg" alt=" " />
            <div className="mask">
              <a href="single.html">
                <h4>Click here</h4>
              </a>
              <p>To learn more about this</p>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="col-md-3 footer-left-w3">
            <h4>Contact</h4>
            <ul>
              <li>
                <span className="glyphicon glyphicon-envelope" aria-hidden="true" />
              </li>
              <li>
                <a href="mailto:example@mail.com">
                  <h6>ex@mail.com</h6>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <span className="glyphicon glyphicon-earphone" aria-hidden="true" />
              </li>
              <li>
                <h6>+18045678834</h6>
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
                <h6>4th Avenue,London</h6>
              </li>
            </ul>
            <ul>
              <li>
                <span
                  className="glyphicon glyphicon-phone-alt"
                  aria-hidden="true"
                />
              </li>
              <li>
                <h6>(0033)6544 5453 644</h6>
              </li>
            </ul>
          </div>
          <div className="col-md-5 footer-middle-w3">
            <h4>Latest Games</h4>
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
            <div className="col-md-3 img-w3-agile footer-middle-wthree">
              <a href="single.html">
                <img src="images/ng5.jpg" alt=" " />
              </a>
            </div>
            <div className="col-md-3 img-w3-agile footer-middle-wthree">
              <a href="single.html">
                <img src="images/ng6.jpg" alt=" " />
              </a>
            </div>
            <div className="col-md-3 img-w3-agile footer-middle-wthree">
              <a href="single.html">
                <img src="images/ng7.jpg" alt=" " />
              </a>
            </div>
            <div className="col-md-3 img-w3-agile footer-middle-wthree">
              <a href="single.html">
                <img src="images/ng8.jpg" alt=" " />
              </a>
            </div>
            <div className="clearfix" />
          </div>
          <div className="col-md-4 footer-right-w3">
            <a href="index.html">
              <h4>
                Kids <img src="images/f1.png" alt=" " /> Game
              </h4>
            </a>
            <p>
              Donec lobortis diam eu auctor porta. Phasellus in elementum tortor,
              sit amet imperdiet urna pellentesque non risus porta.
            </p>
            <p className="agileinfo">
              Suspendisse convallis malesuada libero, non rutrum arcu pellentesque
              lacinia.
            </p>
          </div>
          <div className="clearfix" />
          <div className="copyright">
            <p>
              © 2020 Kids Video Game. All Rights Reserved | Design by{" "}
              <a href="http://w3layouts.com/" target="_blank">
                {" "}
                W3layouts{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
