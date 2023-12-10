import { useEffect } from "react"
import { Link } from "react-router-dom";
import MostAnticipated from "./MostAnticipated.jsx";

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
            <div className="trend-w3layouts most-anticipated-trend">
                <h2>Most Anticipated Game</h2>
                <div className="most-anticipated">
                    <Link to={"/most-anticipated"}>
                        <img src="https://insider-gaming.com/wp-content/uploads/2023/05/gta-6-1.jpg" alt="" />
                    </Link>
                </div>
            </div>
            <div className="trend-w3layouts">
                <div className="container">
                    <h2>Trending Genres</h2>
                    <ul id="flexiselDemo1">
                        <li>
                            <div className="trend-grid">
                                <h4>Racing Games</h4>
                                <img src="/images/tg1.jpg" alt=" " className="img-responsive" />
                            </div>
                        </li>
                        <li>
                            <div className="trend-grid">
                                <h4>Kids Games</h4>
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
                                <h4>Fantasy Games</h4>
                                <img src="/images/tg4.jpg" alt=" " className="img-responsive" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}