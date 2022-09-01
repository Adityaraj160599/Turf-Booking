import React from 'react';
import turf1 from '../images/turf1.jpg';
import turf2 from '../images/turf2.jpg';
import turf3 from '../images/turf3.jpg';
import turf4 from '../images/turf4.jpg';
import turf5 from '../images/turf5.jpg';
import turf6 from '../images/turf6.jpg';


const MostPopular = () => {
    return (
        <>
            <div className="most-popular">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section">
                            <h4><em>Most Popular</em> Right Now</h4>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={turf1} alt />
                                    <h4>Town Turf<br /><span>Indore</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star" /> 4.8</li>
                                        <li><i className="fa fa-download" /> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={turf2} alt />
                                    <h4>Turf Club<br /><span>Mumbai</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star" /> 4.8</li>
                                        <li><i className="fa fa-download" /> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={turf3} alt />
                                    <h4>P.K versi turf<br /><span>Banglore</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star" /> 4.8</li>
                                        <li><i className="fa fa-download" /> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={turf4} alt />
                                    <h4>The Willigdon Turf<br /><span>Indore</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star" /> 4.8</li>
                                        <li><i className="fa fa-download" /> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="item inner-item">
                                                <img src={turf5} alt />
                                                <h4>DLF Golf &amp; Country Club<br /><span>Pune</span></h4>
                                                <ul>
                                                    <li><i className="fa fa-star" /> 4.8</li>
                                                    <li><i className="fa fa-download" /> 2.3M</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="item">
                                                <img src={turf6} alt />
                                                <h4>The Bull Ring<br /><span>Chennai</span></h4>
                                                <ul>
                                                    <li><i className="fa fa-star" /> 4.8</li>
                                                    <li><i className="fa fa-download" /> 2.3M</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={turf5} alt />
                                    <h4>Roshnara Turf &amp; Club<br /><span>Mumbai</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star" /> 4.8</li>
                                        <li><i className="fa fa-download" /> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={turf6} alt />
                                    <h4>SkyTurf<br /><span>Hyderabad</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star" /> 4.8</li>
                                        <li><i className="fa fa-download" /> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="main-button">
                                    <a href="browse.html">Discover Popular</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MostPopular