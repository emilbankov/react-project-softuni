import './About.module.css';

export default function About() {
    return (
        <>
            <div className="about-agileinfo" id="about">
                <div className="container">
                    <h2>About Us</h2>
                    <div className="about-grids-w3-agileits">
                        <div className="col-md-6 about-grid-left-agileits-w3layouts">
                            <ul>
                                <li><i>1.</i><a className="link link--kumya" href="single.html"><span data-letters="Qui ratione voluptatem dolores eos qui">Qui ratione voluptatem dolores</span></a></li>
                                <li><i>2.</i><a className="link link--kumya" href="single.html"><span data-letters="Dolores eos qui ratione voluptatem sequi">Dolores eos qui ratione volu</span></a></li>
                                <li><i>3.</i><a className="link link--kumya" href="single.html"><span data-letters="Voluptatem quia voluptas sit asper">Voluptatem quia voluptas sit asper</span></a></li>
                                <li><i>4.</i><a className="link link--kumya" href="single.html"><span data-letters="Consectetur adipiscing elit, incid">Consectetur adipiscing elit, incid</span></a></li>
                                <li><i>5.</i><a className="link link--kumya" href="single.html"><span data-letters="Quia voluptas sit aspernatur aut odit">Quia voluptas sit aspernatur aut</span></a></li>
                                <li><i>6.</i><a className="link link--kumya" href="single.html"><span data-letters="Eos qui ratione voluptatem sequi">Eos qui ratione voluptatem sequi</span></a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 about-grid-right-w3-agile">
                            <div className="grid-w3ls">
                                <figure className="effect-zoe">
                                    <img src="/images/about.jpg" alt=" " className="img-responsive" />
                                    <figcaption>
                                        <h3>Kids<span>Video</span>Game</h3>
                                        <p className="icon-links">
                                            <a href="#"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></a>
                                            <a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                            <a href="#"><span className="glyphicon glyphicon-paperclip" aria-hidden="true"></span></a>
                                        </p>
                                        <p className="description">Suspendisse convallis malesuada libero, non rutrum arcu pellentesque lacinia.</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>

            <h2>Fun Facts About Games</h2>
            <div className="collection-agileits">
                <div className="collection-grids-agileits-w3layouts">
                    <div className="col-md-4 col-sm-4 collection-left"></div>
                    <div className="col-md-8 col-sm-8 collection-right">
                        <div className="col-md-4 col-sm-4 collection-grid collection-text collection-grid-1">
                            <img src="/images/c1.png" alt="" />
                            <h3>Super Mario </h3>
                            <p>Mario was originally known as "Jumpman" in Donkey Kong. He got his iconic name from Nintendo's warehouse landlord, Mario Segale.</p>
                        </div>
                        <div className="col-md-4 col-sm-4 collection-grid collection-image collection-grid-2"></div>

                        <div className="col-md-4 col-sm-4 collection-grid collection-text collection-grid-3">
                            <img src="/images/c2.png" alt="" />
                            <h3>Pac Man</h3>
                            <p>The ghosts in Pac Man have distinct personalities. Blinky is programmed to chase you, Pinky tries to ambush, Inky is random, and Clyde alternates between random and chasing.</p>
                        </div>
                        <div className="col-md-4 col-sm-4 collection-grid collection-image collection-grid-4"></div>

                        <div className="col-md-4 col-sm-4 collection-grid collection-text collection-grid-5">
                            <img src="/images/c3.png" alt="" />
                            <h3>Minecraft</h3>
                            <p>The world in Minecraft is virtually infinite. If you were to walk from one end to the other without stopping, it would take over 820 hours in real time.</p>
                        </div>
                        <div className="col-md-4 col-sm-4 collection-grid collection-image collection-grid-6"></div>

                        <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </>
    )
}