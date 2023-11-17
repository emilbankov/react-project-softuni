import { useEffect } from "react"

export default function Home() {
    useEffect(() => {
        $("#flexiselDemo1").flexisel({
          visibleItems: 4,
          animationSpeed: 1000,
          autoPlay: true,
          autoPlaySpeed: 3000,
          pauseOnHover: true,
        });
      }, []);


    return (
        <>
            <div className="trend-w3layouts">
                <div className="container">
                    <h2>Trending Games</h2>
                    <ul id="flexiselDemo1">
                        <li>
                            <div className="trend-grid">
                                <h4>Racing Games</h4>
                                <img src="/images/tg1.jpg" alt=" " className="img-responsive" />
                            </div>
                        </li>
                        <li>
                            <div className="trend-grid">
                                <h4>3D Games</h4>
                                <img src="/images/tg2.jpg" alt=" " className="img-responsive" />
                            </div>
                        </li>
                        <li>
                            <div className="trend-grid">
                                <h4>Action Games</h4>
                                <img src="/images/tg3.jpg" alt=" " className="img-responsive" />
                            </div>
                        </li>
                        <li>
                            <div className="trend-grid">
                                <h4>Toy Games</h4>
                                <img src="/images/tg4.jpg" alt=" " className="img-responsive" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="new-w3-agile">
                <div className="container">
                    <h3>New Games</h3>
                    <div className="col-md-3 new-grid-w3l view view-eighth">
                        <img src="/images/ng1.jpg" alt=" " />
                        <div className="mask">
                            <a href="single.html">
                                <h4>Click here</h4>
                            </a>
                            <p>To learn more about this</p>
                        </div>
                    </div>
                    <div className="col-md-3 new-grid-w3l view view-eighth">
                        <img src="/images/ng2.jpg" alt=" " />
                        <div className="mask">
                            <a href="single.html">
                                <h4>Click here</h4>
                            </a>
                            <p>To learn more about this</p>
                        </div>
                    </div>
                    <div className="col-md-3 new-grid-w3l view view-eighth">
                        <img src="/images/ng3.jpg" alt=" " />
                        <div className="mask">
                            <a href="single.html">
                                <h4>Click here</h4>
                            </a>
                            <p>To learn more about this</p>
                        </div>
                    </div>
                    <div className="col-md-3 new-grid-w3l view view-eighth">
                        <img src="/images/ng4.jpg" alt=" " />
                        <div className="mask">
                            <a href="single.html">
                                <h4>Click here</h4>
                            </a>
                            <p>To learn more about this</p>
                        </div>
                    </div>
                    <div className="col-md-3 new-grid-agile view view-eighth">
                        <img src="/images/ng5.jpg" alt=" " />
                        <div className="mask">
                            <a href="single.html">
                                <h4>Click here</h4>
                            </a>
                            <p>To learn more about this</p>
                        </div>
                    </div>
                    <div className="col-md-3 new-grid-agile view view-eighth">
                        <img src="/images/ng6.jpg" alt=" " />
                        <div className="mask">
                            <a href="single.html">
                                <h4>Click here</h4>
                            </a>
                            <p>To learn more about this</p>
                        </div>
                    </div>
                    <div className="col-md-3 new-grid-agile view view-eighth">
                        <img src="/images/ng7.jpg" alt=" " />
                        <div className="mask">
                            <a href="single.html">
                                <h4>Click here</h4>
                            </a>
                            <p>To learn more about this</p>
                        </div>
                    </div>
                    <div className="col-md-3 new-grid-agile view view-eighth">
                        <img src="/images/ng8.jpg" alt=" " />
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
        </>
    )
}