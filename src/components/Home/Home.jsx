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
        </>
    )
}